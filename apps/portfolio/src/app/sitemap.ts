import { getPosts } from "@/data/posts/get-posts";
import { getProjects } from "@/data/projects/get-projects";
import { env } from "@/env/server";
import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { MetadataRoute } from "next";
import { Locale } from "next-intl";

const baseUrl = env.PORTFOLIO_BASE_URL;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const allPosts = (await Promise.all(routing.locales.map(getPosts))).flat();
	const postMap = new Map<string, Date>();
	for (const post of allPosts) {
		const existing = postMap.get(post.slug);

		const dateString = post.updatedAt ?? post.publishedAt;
		if (!dateString) continue;

		const updatedAt = new Date(dateString);
		if (!existing || updatedAt > existing) {
			postMap.set(post.slug, updatedAt);
		}
	}
	const postsSlugsEntries = Array.from(postMap.entries())
		.map(([slug, lastModified]) => getEntries({ pathname: "/posts/[slug]", params: { slug } }, { lastModified }))
		.flat();

	const allProjects = (await Promise.all(routing.locales.map(getProjects))).flat();
	const projectMap = new Map<string, Date>();
	for (const project of allProjects) {
		const existing = projectMap.get(project.slug);

		const dateString = project.updatedAt ?? project.publishedAt;
		if (!dateString) continue;

		const updatedAt = new Date(dateString);
		if (!existing || updatedAt > existing) {
			projectMap.set(project.slug, updatedAt);
		}
	}
	const projectsSlugsEntries = Array.from(projectMap.entries())
		.map(([slug, lastModified]) => getEntries({ pathname: "/projects/[slug]", params: { slug } }, { lastModified }))
		.flat();

	return [
		...getEntries("/"),
		...getEntries("/contact"),
		...getEntries("/posts"),
		...postsSlugsEntries,
		...getEntries("/projects"),
		...projectsSlugsEntries,
	];
}

type Href = Parameters<typeof getPathname>[0]["href"];

function getEntries(
	href: Href,
	opts?: Omit<MetadataRoute.Sitemap[number], "url" | "alternates">,
): MetadataRoute.Sitemap {
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
