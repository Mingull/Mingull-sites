import { z } from "zod";
import { registry } from "@mingull/icons";

export const skillSchema = z.object({
	name: z.string({ error: "Name is required." }).min(1, "Name is required."),
	version: z
		.string({ error: "Version is required." })
		.min(1, "Version is required.")
		.regex(/^\d+\.\d+(\.\d+)?$/, { message: "Version must be in the format X.Y or X.Y.Z" }),
	summary: z.string({ error: "Summary is required." }).min(1, "Summary must be at least 1 character."),
	content: z.string({ error: " content is required." }).min(1, "Content must be at least 1 character."),
	experience: z.object({
		value: z.number({ error: "Experience is required." }).min(0, "Experience must be a positive number.").max(100, "Experience must be realistic."),
		years: z.number({ error: "Years is required." }).min(0.1, { message: "Years must be at least 0.1." }).max(100, "Years must be realistic."),
	}),
	icon: z
		.string({ error: "Icon is required." })
		.min(1, "Icon is required.")
		.refine((icon) => Object.hasOwn(registry.nodes, icon), {
			message: "Icon must be a valid registered icon.",
		}),
	cta: z.object(
		{
			text: z.string({ error: "CTA text is required." }).min(1, "CTA must be at least 1 character."),
			link: z.url({ message: "CTA link must be a valid URL." }),
		},
		{ error: "CTA is required." },
	),
});
