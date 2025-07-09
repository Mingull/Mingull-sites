import { getFormatter } from "next-intl/server";

export async function formatDate(date: string) {
	const format = await getFormatter();
	return format.dateTime(new Date(date), {
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
	});
}

export function formatTitle(title: string) {
	return title.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
}
