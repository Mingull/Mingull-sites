import { isPromise } from "@mingull/lib";
import { Result } from "./types.ts";

export function attempt<T, E = unknown>(fn: () => Promise<T>): Promise<Result<T, E>>;
export function attempt<T, E = unknown>(fn: () => T): Result<T, E>;
export function attempt<T, E = unknown>(promise: Promise<T>): Promise<Result<T, E>>;
export function attempt<T, E = unknown>(
	input: Promise<T> | (() => T) | (() => Promise<T>),
): Result<T, E> | Promise<Result<T, E>> {
	if (typeof input === "function") {
		try {
			const result = input();
			if (isPromise<T>(result)) {
				return attempt(result);
			}
			return { data: result } as Result<T, E>;
		} catch (error) {
			return { error: error as E };
		}
	} else {
		return input.then(
			(data): Result<T, E> => ({ data }),
			(error): Result<T, E> => ({ error: error as E }),
		);
	}
}
