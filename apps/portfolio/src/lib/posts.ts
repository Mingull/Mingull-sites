"use server";

import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";
import { z } from "zod";
import { PostMetadataSchema, PostSchema } from "./schemas/post.schema";
import { getLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

const rootDirectory = path.join(process.cwd(), "src", "content", "posts");

export type Post = z.infer<typeof PostSchema>;
export type PostMetadata = z.infer<typeof PostMetadataSchema>;

export async function getPostBySlug(slug: string): Promise<Post | null> {
	console.log("getting post by slug", slug);
	try {
		const locale = await getLocale();
		const candidatePaths = [
			path.join(rootDirectory, locale, `${slug}.mdx`),
			path.join(rootDirectory, `${slug}.mdx`),
			path.join(rootDirectory, routing.defaultLocale, `${slug}.mdx`),
		];

		let filePath: string | null = null;

		for (const candidate of candidatePaths) {
			try {
				await fs.access(candidate);
				filePath = candidate;
				break;
			} catch {
				continue;
			}
		}

		if (!filePath) {
			console.warn(`Post file not found for slug: ${slug}`);
			return null;
		}

		const fileContent = await fs.readFile(filePath, "utf-8");
		const { data, content } = matter(fileContent);

		let components: Record<string, string> = {};
		if (Array.isArray(data.components)) {
			components = data.components.reduce((acc, obj) => {
				const [key, value] = Object.entries(obj)[0] || [];
				if (typeof key === "string" && typeof value === "string") {
					acc[key] = value;
				}
				return acc;
			}, {});
		}

		const parsed = PostMetadataSchema.safeParse({
			...data,
			slug,
			components,
		});

		if (!parsed.success) {
			console.error(`Invalid metadata in post: ${slug}`, parsed.error.format());
			return null;
		}

		// Optional: Check if components exist
		for (const [key, importPath] of Object.entries(components)) {
			if (importPath.startsWith("@/")) {
				const relPath = importPath.replace(/^@\//, "");
				const absPath = path.join(process.cwd(), "src", relPath);
				const extensions = [".tsx", ".ts", ".jsx", ".js"];

				const found = await Promise.any(
					extensions.map((ext) =>
						fs
							.access(absPath + ext)
							.then(() => true)
							.catch(() => false),
					),
				).catch(() => false);

				if (!found) {
					console.warn(`⚠ Component "${key}" not found at: ${absPath}{.tsx,.ts,.jsx,.js}`);
				}
			}
		}

		return { metadata: parsed.data, content };
	} catch (e) {
		console.error(`Failed to load post: ${slug}`, e);
		return null;
	}
}

export async function getPosts(limit?: number): Promise<PostMetadata[]> {
	const locale = await getLocale();
	console.log({ locale });
	const candidateDirs = [
		path.join(rootDirectory, locale),
		rootDirectory,
		path.join(rootDirectory, routing.defaultLocale),
	];
	console.log({ candidateDirs });

	const seenSlugs = new Set<string>();
	const collected: PostMetadata[] = [];

	for (const dir of candidateDirs) {
		let files: string[] = [];
		try {
			files = await fs.readdir(dir);
		} catch {
			continue;
		}

		for (const file of files) {
			if (!file.endsWith(".mdx")) continue;

			const slug = file.replace(/\.mdx$/, "");
			if (seenSlugs.has(slug)) continue;

			try {
				const metadata = await getPostMetadata(path.join(path.relative(rootDirectory, dir), file));
				collected.push(metadata);
				seenSlugs.add(slug);
			} catch {
				// skip invalid post
			}
		}
	}

	const sorted = collected
		.filter((post) => post.publishedAt && new Date(post.publishedAt).getTime() <= Date.now())
		.sort((a, b) => (new Date(a.publishedAt ?? "") < new Date(b.publishedAt ?? "") ? 1 : -1));
	// await wait(1000); // Simulate delay for testing purposes
	return limit ? sorted.slice(0, limit) : sorted;
}

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getPostMetadata(filepath: string): Promise<PostMetadata> {
	// remove {nl|en}\\ and .mdx extension
	const slug = filepath.replace(/\.mdx$/, "").replace(/^(nl|en)\\/, "");
	const filePath = path.join(rootDirectory, filepath);
	const fileContent = await fs.readFile(filePath, "utf-8");
	const { data } = matter(fileContent);

	const parsed = PostMetadataSchema.safeParse({ ...data, slug });

	if (!parsed.success) {
		console.error(`Invalid metadata in: ${filepath}`, parsed.error.format());
		throw new Error("Invalid frontmatter");
	}

	return parsed.data;
}
