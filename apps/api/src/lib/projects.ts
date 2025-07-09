import path from "path";
import fs from "fs/promises";
import matter from "gray-matter";
import { z } from "zod";
import { projectMetadataSchema, projectSchema } from "./schemas/project";

const rootDirectory = path.join(process.cwd(), "src", "content", "projects");

export type Project = z.infer<typeof projectSchema>;
export type ProjectMetadata = z.infer<typeof projectMetadataSchema>;

export async function getProjectBySlug({ locale, slug }: { slug: string; locale?: string }): Promise<Project | null> {
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

		if (!filePath) {
			console.warn(`Project file not found for slug: ${slug}`);
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

		const parsed = projectMetadataSchema.safeParse({
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
		console.log(e);
		return null;
	}
}

export async function getProjects({
	limit,
	locale,
}: {
	limit?: number;
	locale?: string | undefined;
}): Promise<ProjectMetadata[]> {
	const candidateDirs = [path.join(rootDirectory, locale ?? "nl"), rootDirectory];

	const seenSlugs = new Set<string>();
	const collected: ProjectMetadata[] = [];

	for (const dir of candidateDirs) {
		let files: string[] = [];
		try {
			files = await fs.readdir(dir);
		} catch {
			continue;
		}

		for (const file of files) {
			if (!file.endsWith(".mdx")) continue;

			const slug = file.replace(/\.mdx$/, "").replace(/^(nl|en)\\/, "");
			if (seenSlugs.has(slug)) continue;

			try {
				const metadata = await getProjectMetadata(path.join(path.relative(rootDirectory, dir), file));
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

export async function getProjectMetadata(filepath: string): Promise<ProjectMetadata> {
	// remove {nl|en}/ and .mdx extension
	const slug = filepath.replace(/\.mdx$/, "").replace(/^(nl|en)\//, "");
	console.log({ slug });
	const filePath = path.join(rootDirectory, filepath);
	const fileContent = await fs.readFile(filePath, "utf-8");
	const { data } = matter(fileContent);

	const parsed = projectMetadataSchema.safeParse({ ...data, slug });

	if (!parsed.success) {
		console.error(`Invalid metadata in: ${filepath}`, parsed.error.format());
		throw new Error("Invalid frontmatter");
	}

	return parsed.data;
}
