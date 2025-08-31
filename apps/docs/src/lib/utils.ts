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
