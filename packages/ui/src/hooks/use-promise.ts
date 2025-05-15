"use client";
import { DependencyList, useCallback, useEffect, useRef, useState } from "react";
import { useMounted } from "./use-mounted.ts";

type Result<T, E = Error> =
	| { status: "loading"; data: null; error: null }
	| { status: "success"; data: T; error: null }
	| { status: "error"; data: null; error: E };

type UsePromiseOptions<T> = {
	queryKey: DependencyList;
	queryFn: () => T | Promise<T>;
	enabled?: boolean;
};

type UsePromiseReturn<T, E = Error> = Result<T, E> & {
	isLoading: boolean;
	isSuccess: boolean;
	isError: boolean;
	refetch: () => void;
};

/**
 * Runs a synchronous or asynchronous function and tracks its loading, success, and error state.
 *
 * Useful for wrapping data-fetching or other promise-returning logic in a React-friendly way.
 *
 * @param factory Function that returns a value or a promise. It's re-run when dependencies change.
 * @param deps Dependency array for controlling when the effect runs.
 * @returns An object with `loading`, `state`, and `error` to represent the result.
 *
 * @example
 * const { state: data, loading, error } = usePromise(() => fetchData(id), [id]);
 *
 * if (loading) return <Loader />;
 * if (error) return <ErrorDisplay error={error} />;
 * return <Content data={data} />;
 */

export function usePromise<T, E = Error>({
	queryKey,
	queryFn,
	enabled = true,
}: UsePromiseOptions<T>): UsePromiseReturn<T, E> {
	const isMounted = useMounted();
	const [result, setResult] = useState<Result<T, E>>({
		status: "loading",
		data: null,
		error: null,
	});
	const [nonce, setNonce] = useState(0);

	const refetch = () => setNonce((n) => n + 1);

	const callback = useCallback(queryFn, queryKey);

	useEffect(() => {
		if (!enabled) return;

		setResult({ status: "loading", data: null, error: null });

		Promise.resolve(callback())
			.then((data) => {
				if (isMounted.current) {
					setResult({ status: "success", data: data as Awaited<T>, error: null });
				}
			})
			.catch((err: E) => {
				if (isMounted.current) {
					setResult({ status: "error", data: null, error: err });
				}
			});
	}, [callback, nonce, enabled]);

	return {
		...result,
		isLoading: result.status === "loading",
		isSuccess: result.status === "success",
		isError: result.status === "error",
		refetch,
	};
}
