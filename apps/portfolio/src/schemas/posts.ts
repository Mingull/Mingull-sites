import { z } from "zod";

export const postMetadataSchema = z.object({
	slug: z.string(),
	title: z.string().optional(),
	summary: z.string().optional(),
	image: z.string().optional(),
	author: z.string().optional(),
	publishedAt: z.iso.datetime().optional(),
	updatedAt: z.iso.datetime().optional(),
});

export const postSchema = z.object({
	metadata: postMetadataSchema,
	content: z.string(),
});
