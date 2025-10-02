import { routing } from "@/i18n/routing";
import { defineConstants } from "@mingull/constants";
import { statefulSchema } from "@mingull/constants/utils";
import { z } from "zod";

export const schema = z
	.object({
		TITLE: z.string().min(1),
		SUBTITLE: z.string().min(1),
		KEYWORDS: z.array(z.string().min(1)),
		LOADING_STATES: z.array(statefulSchema(["leaderboard", "streaks", "auth", "stats", "history", "workouts", "profile", "dashboard", "general"], { texts: z.array(z.string().min(1)) })),
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
		
	},
	nl: {
		SUBTITLE: "Maak, deel en ontdek gerangschikte lijsten.",
	},
});
