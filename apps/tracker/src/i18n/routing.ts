import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
	// A list of all locales that are supported
	locales: ["en", "nl"],

	// Used when no locale matches
	defaultLocale: "en",
	pathnames: {
		"/": "/",
		"/sign-in": "/sign-in",
		"/sign-up": "/sign-up",
		"/onboarding": "/onboarding",
		"/dashboard": "/dashboard",
		"/pricing": "/pricing",
		"/terms-of-service": "/terms-of-service",
		"/privacy-policy": "/privacy-policy",
	},
});
