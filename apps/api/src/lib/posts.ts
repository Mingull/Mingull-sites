"use server";
import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";
import { z } from "zod";
import { postMetadataSchema, postSchema } from "./schemas/post";

const rootDirectory = path.join(process.cwd(), "src", "content", "posts");

export type Post = z.infer<typeof postSchema>;
export type PostMetadata = z.infer<typeof postMetadataSchema>;

export async function getPostBySlug({ locale, slug }: { slug: string; locale?: string }): Promise<Post | null> {
	if (!slug || typeof slug !== "string") throw new Error(`Invalid or missing slug: ${slug}`);

	try {
		const candidatePaths = [
			path.join(rootDirectory, locale ?? "nl", `${slug}.mdx`),
			path.join(rootDirectory, `${slug}.mdx`),
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

		if (!filePath) throw new Error(`Post file not found for slug: ${slug}`);

		const fileContent = await fs.readFile(filePath, "utf-8");
		const { data, content } = matter(fileContent);

		const parsed = postMetadataSchema.safeParse({
			...data,
			slug,
		});

		if (!parsed.success)
			throw new Error(
				`Invalid metadata in post "${slug}": ${JSON.stringify(z.treeifyError(parsed.error), null, 2)}`,
			);

		return { metadata: parsed.data, content };
	} catch (e) {
		throw new Error(`Failed to load post "${slug}": ${(e as Error).message}`);
	}
}

export async function getPosts({
	limit,
	locale,
}: {
	limit?: number;
	locale?: string | undefined;
}): Promise<PostMetadata[]> {
	const candidateDirs = [path.join(rootDirectory, locale ?? "nl"), rootDirectory];

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

			const slug = file.replace(/\.mdx$/, "").replace(/^(nl|en)(\/|\\)/, "");
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

	return limit ? sorted.slice(0, limit) : sorted;
}

export async function getPostMetadata(filepath: string): Promise<PostMetadata> {
	const slug = filepath.replace(/\.mdx$/, "").replace(/^(nl|en)(\/|\\)/, "");
	const filePath = path.join(rootDirectory, filepath);
	const fileContent = await fs.readFile(filePath, "utf-8");
	const { data } = matter(fileContent);

	const parsed = postMetadataSchema.safeParse({ ...data, slug });

	if (!parsed.success)
		throw new Error(`Invalid metadata in "${filepath}": ${JSON.stringify(z.treeifyError(parsed.error), null, 2)}`);

	return parsed.data;
}
