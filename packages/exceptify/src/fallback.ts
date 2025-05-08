import { isPromise } from "@mingull/lib/utils";
import { type Result } from "./types.js";

export function withFallback<T, E = unknown>(result: Result<T, E>, fallback: T): T;
export function withFallback<T, E = unknown>(result: Promise<Result<T, E>>, fallback: T): Promise<T>;
export function withFallback<T, E = unknown>(
	result: Result<T, E> | Promise<Result<T, E>>,
	fallback: T,
): T | Promise<T> {
	if (isPromise<Result<T, E>>(result)) {
		return result.then((res): T => {
			if ("error" in res) {
				return fallback;
			}
			return res.data;
		});
	}

	if ("error" in result) {
		return fallback;
	}

	return result.data;
}
