"use client";
import { DependencyList, useEffect, useState } from "react";

type Result<T, E = Error> =
	| { loading: true; error: null; state: null }
	| { loading: false; error: null; state: Awaited<T> }
	| { loading: false; error: E; state: null };

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
export function usePromise<T, E = Error>(factory: () => T | Promise<T>, deps: DependencyList = []): Result<T, E> {
	const [result, setResult] = useState<Result<T, E>>({
		loading: true,
		error: null,
		state: null,
	} as Result<T, E>);

	useEffect(() => {
		let cancelled = false;

		setResult({ loading: true, error: null, state: null });

		Promise.resolve()
			.then(() => factory())
			.then((data: T) => {
				if (!cancelled) {
					setResult({ loading: false, error: null, state: data as Awaited<T> });
				}
			})
			.catch((err: E) => {
				if (!cancelled) {
					setResult({ loading: false, error: err, state: null });
				}
			});

		return () => {
			cancelled = true;
		};
	}, deps);

	return result;
}
