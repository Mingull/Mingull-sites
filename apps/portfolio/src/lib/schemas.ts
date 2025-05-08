import { z } from "zod";

export const ContactFormSchema = z.object({
	name: z.string().min(1, { message: "Name is required." }).min(2, { message: "Must be at least 2 characters." }),
	email: z.string().min(1, { message: "Email is required." }).email("Invalid email."),
	message: z.string().min(1, { message: "Message is required." }),
});

export const NewsletterFormSchema = z.object({
	email: z.string().email("Invalid email."),
});

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
