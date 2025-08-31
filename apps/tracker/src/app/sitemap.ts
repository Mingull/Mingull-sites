import { env } from "@/env/server";
import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { MetadataRoute } from "next";
import { Locale } from "next-intl";

const baseUrl = env.TRACKER_BASE_URL;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	return [...getEntries("/")];
}

type Href = Parameters<typeof getPathname>[0]["href"];

function getEntries(href: Href, opts?: Omit<MetadataRoute.Sitemap[number], "url" | "alternates">): MetadataRoute.Sitemap {
	return routing.locales.map((locale) => ({
		url: getUrl(href, locale),
		alternates: {
			languages: Object.fromEntries(routing.locales.map((cur) => [cur, getUrl(href, cur)])),
		},
		...opts,
	}));
}

function getUrl(href: Href, locale: Locale) {
	const pathname = getPathname({ locale, href });
	return baseUrl + pathname;
}
