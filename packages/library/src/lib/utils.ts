import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
export function isPromise<T>(value: unknown): value is Promise<T> {
	return !!value && typeof (value as any).then === "function";
}
export function isObject(value: unknown): value is Record<string, unknown> {
	return typeof value === "object" && value !== null;
}
