import { routing } from "@/i18n/routing";
import { defineConstants } from "@mingull/constants";
import { z } from "zod";

export const schema = z
	.object({
		TITLE: z.string().min(1),
		SUBTITLE: z.string().min(1),
		KEYWORDS: z.array(z.string().min(1)),
	})
	.strict();

export const constants = defineConstants({
	routing,
	schema,
	shared: {
		TITLE: "Rankly",
		KEYWORDS: ["Rankly"],
	},
	en: {
		SUBTITLE: "Create, share, and discover ranked lists.",
	},
	nl: {
		SUBTITLE: "Maak, deel en ontdek gerangschikte lijsten.",
	},
});
