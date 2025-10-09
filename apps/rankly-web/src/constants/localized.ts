import { routing } from "@/i18n/routing";
import { defineConstants } from "@mingull/constants";
import { statefulSchema } from "@mingull/constants/utils";
import { z } from "zod";

export const schema = z
	.object({
		TITLE: z.string().min(1),
		SUBTITLE: z.string().min(1),
		KEYWORDS: z.array(z.string().min(1)),
		LOADING_STATES: z.array(statefulSchema([["auth", ["sign-in", "sign-up"]], "general"], { texts: z.array(z.string().min(1)) })),
		SUCCESS_STATES: z.array(statefulSchema([["auth", ["sign-in", "sign-up"]]], { texts: z.array(z.string().min(1)) })),
		ERROR_STATES: z.array(statefulSchema([["auth", ["sign-in", "sign-up"]], "unknown"], { texts: z.array(z.string().min(1)) })),
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
		LOADING_STATES: [
			{ type: "auth:sign-in", texts: ["Signing in..."] },
			{ type: "auth:sign-up", texts: ["Signing up..."] },
			{ type: "general", texts: ["Loading...", "Please wait...", "Processing..."] },
		],
		ERROR_STATES: [{ type: "unknown", texts: ["Something went wrong. Please try again later."] }],
		SUCCESS_STATES: [{ type: "auth:sign-up", texts: ["Your account has been created!"] }],
	},
	nl: {
		SUBTITLE: "Maak, deel en ontdek gerangschikte lijsten.",
		LOADING_STATES: [
			{ type: "auth:sign-in", texts: ["Inloggen..."] },
			{ type: "auth:sign-up", texts: ["Registreren..."] },
			{ type: "general", texts: ["Laden...", "Even geduld aub...", "Bezig..."] },
		],
		ERROR_STATES: [{ type: "unknown", texts: ["Er is iets misgegaan. Probeer het later opnieuw."] }],
		SUCCESS_STATES: [{ type: "auth:sign-up", texts: ["Je account is aangemaakt!"] }],
	},
});
