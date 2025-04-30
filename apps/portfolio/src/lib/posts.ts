import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";

const rootDirectory = path.join(process.cwd(), "src", "content", "posts");

export type Post = {
	metadata: PostMetadata;
	content: string;
};

export type PostMetadata = {
	slug: string;
	title?: string;
	summary?: string;
	image?: string;
	author?: string;
	publishedAt?: string;
	components?: Record<string, string>;
};

export async function getPostBySlug(slug: string): Promise<Post | null> {
	try {
		const filePath = path.join(rootDirectory, `${slug}.mdx`);
		const fileContent = await fs.readFile(filePath, "utf-8");

		const { data, content } = matter(fileContent);

		// convert string to [key: string]: value: string object
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

		return { metadata: { ...data, slug, components }, content };
	} catch (e) {
		console.error(`Failed to load post: ${slug}`, e);
		return null;
	}
}

export async function getPosts(limit?: number) {
	const files = await fs.readdir(rootDirectory);

	// get the posts sorted by date in descending order using the metadata from the posts
	const posts = (await Promise.all(files.map(async (file) => await getPostMetadata(file)))).sort((a, b) =>
		new Date(a.publishedAt ?? "") < new Date(b.publishedAt ?? "") ? 1 : -1,
	);

	if (limit) {
		return posts.slice(0, limit);
	}
	return posts;
}

export async function getPostMetadata(filepath: string): Promise<PostMetadata> {
	const slug = filepath.replace(/\.mdx$/, "");
	const filePath = path.join(rootDirectory, filepath);
	const fileContent = await fs.readFile(filePath, "utf-8");
	const { data } = matter(fileContent);

	return { ...data, slug };
}
