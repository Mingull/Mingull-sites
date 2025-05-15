import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useFormatter } from "next-intl";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function useFormatDate() {
	const format = useFormatter();
	return (date: string | Date) =>
		format.dateTime(new Date(date), {
			year: "numeric",
			month: "long",
			day: "numeric",
			hour: "2-digit",
			minute: "2-digit",
		});
}

export type Prettify<T> = {
	[K in keyof T]: T[K];
} & {};

export function omit<T extends object, K extends keyof T>(obj: T, ...keys: K[]): Omit<T, K> {
	const keysToOmit = new Set(keys);
	return Object.fromEntries(Object.entries(obj).filter(([key]) => !keysToOmit.has(key as K))) as Omit<T, K>;
}
