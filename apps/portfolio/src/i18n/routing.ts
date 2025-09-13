import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
	// A list of all locales that are supported
	locales: ["en", "nl"],

	// Used when no locale matches
	defaultLocale: "nl",
	pathnames: {
		"/": "/",
		"/contact": "/contact",
		"/posts": { en: "/posts", nl: "/berichten" },
		"/posts/[slug]": { en: "/posts/[slug]", nl: "/berichten/[slug]" },
		"/projects": { en: "/projects", nl: "/projecten" },
		"/projects/[slug]": { en: "/projects/[slug]", nl: "/projecten/[slug]" },
	},
});
