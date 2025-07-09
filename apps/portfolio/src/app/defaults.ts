import { z } from "zod";
import { createDefaults } from "@mingull/defaults";
import { routing } from "@/i18n/routing";

const schema = {
	TITLE: z.string(),
	SUBTITLE: z.string(),
	SUMMARY: z.string(),
	DESCRIPTION: z.string(),
	KEYWORDS: z.string(),
	TOOLTIPS: z.record(z.string()),
	LOADING_SCREENS: z.array(z.string()),
	ERROR_PAGES: z.object({
		NOT_FOUND: z.object({
			code: z.number(),
			text: z.string(),
		}),
		SERVER_ERROR: z.object({
			code: z.number(),
			text: z.string(),
		}),
		UNAUTHORIZED: z.object({
			code: z.number(),
			text: z.string(),
		}),
		FORBIDDEN: z.object({
			code: z.number(),
			text: z.string(),
		}),
	}),
};

export const defaults = createDefaults({
	routing,
	schema,
	shared: {
		TITLE: "Mingull",
		ERROR_PAGES: {
			NOT_FOUND: {
				code: 404,
				text: "",
			},
			SERVER_ERROR: {
				code: 500,
				text: "",
			},
			UNAUTHORIZED: {
				code: 401,
				text: "",
			},
			FORBIDDEN: {
				code: 403,
				text: "",
			},
		},
	},
	en: {
		SUBTITLE: "Subtitle",
		SUMMARY: "Summary",
		DESCRIPTION: "Description",
		KEYWORDS: "Keywords",
		TOOLTIPS: {},
		LOADING_SCREENS: [],
	},
	nl: {
		SUBTITLE: "Subtitel",
		SUMMARY: "Samenvatting",
		DESCRIPTION: "Beschrijving",
		KEYWORDS: "Trefwoorden",
		TOOLTIPS: {},
		LOADING_SCREENS: [],
	},
});
