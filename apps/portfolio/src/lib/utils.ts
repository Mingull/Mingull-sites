import { clsx, type ClassValue } from "clsx";
import { MDXRemoteProps } from "next-mdx-remote";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
	return new Date(date).toLocaleDateString("nl-NL", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}

export function formatTitle(title: string) {
	return title.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
}

export type Prettify<T> = {
	[K in keyof T]: T[K];
} & {};

export const getMdxComponents = (components: Record<string, string>) => {
	const mdxComponents: { [x: string]: any } = {};
	// Convert the components object to a format that MDX can understand
	Object.entries(components).forEach(async ([key, value]) => {
		// const Component = await import(`@/components/${value}`).then((mod) => mod.default || mod[key]);
		// mdxComponents[key] = Component;
	});
	console.log({ mdxComponents });
	return mdxComponents satisfies MDXRemoteProps["components"];
};
