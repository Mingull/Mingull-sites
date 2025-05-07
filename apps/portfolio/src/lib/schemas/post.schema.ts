import { z } from "zod";

export const PostMetadataSchema = z.object({
	slug: z.string(),
	title: z.string().optional(),
	summary: z.string().optional(),
	image: z.string().optional(),
	author: z.string().optional(),
	publishedAt: z.string().datetime().optional(),
	updatedAt: z.string().datetime().optional(),
	components: z
		.record(
			z.string(),
			//.regex(/^(?!.*\.mdx$)(?!.*\.json$)[\w/@-]+$/, "Component path must not end with .mdx or .json"),
		)
		.optional(),
});

export const PostSchema = z.object({
	metadata: PostMetadataSchema,
	content: z.string(),
});
