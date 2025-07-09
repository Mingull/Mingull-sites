import { z } from "zod";

export const projectMetadataSchema = z.object({
	slug: z.string(),
	title: z.string().optional(),
	summary: z.string().optional(),
	image: z.string().optional(),
	author: z.string().optional(),
	publishedAt: z.string().datetime().optional(),
	updatedAt: z.string().datetime().optional(),
	tags: z.array(z.string()).optional(),
});

export const projectSchema = z.object({
	metadata: projectMetadataSchema,
	content: z.string(),
});
