import { isPromise } from "../lib/utils.js";
import { Result } from "./index.js";

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
