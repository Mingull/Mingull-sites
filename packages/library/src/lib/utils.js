import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}
export function isPromise(value) {
    return !!value && typeof value.then === "function";
}
export function isObject(value) {
    return typeof value === "object" && value !== null;
}
