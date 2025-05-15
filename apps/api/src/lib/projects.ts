import path from "path";
import fs from "fs/promises";
import matter from "gray-matter";
import { z } from "zod";
import { projectMetadataSchema, projectSchema } from "./schemas/project.schema";

const rootDirectory = path.join(process.cwd(), "src", "content", "projects");

export type Project = z.infer<typeof projectSchema>;
export type ProjectMetadata = z.infer<typeof projectMetadataSchema>;

export async function getProjectBySlug({ locale, slug }: { slug: string; locale?: string }): Promise<Project | null> {
	try {
		const filePath = path.join(rootDirectory, `${slug}.mdx`);
		const fileContent = await fs.readFile(filePath, "utf-8");

		const { data, content } = matter(fileContent);

		return { metadata: { ...data, slug }, content };
	} catch (e) {
		console.log(e);
		return null;
	}
}

export async function getProjects({ limit, locale }: { limit?: number; locale?: string | undefined }) {
	const files = await fs.readdir(rootDirectory);

	// get the posts sorted by date in descending order using the metadata from the posts
	const projects = (await Promise.all(files.map(async (file) => await getProjectMetadata(file)))).sort((a, b) =>
		new Date(a.publishedAt ?? "") < new Date(b.publishedAt ?? "") ? 1 : -1,
	);

	if (limit) {
		return projects.slice(0, limit);
	}
	return projects;
}

export async function getProjectMetadata(filepath: string): Promise<ProjectMetadata> {
	const slug = filepath.replace(/\.mdx$/, "");
	const filePath = path.join(rootDirectory, filepath);
	const fileContent = await fs.readFile(filePath, "utf-8");
	const { data } = matter(fileContent);

	return { ...data, slug };
}
