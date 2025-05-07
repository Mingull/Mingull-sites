"client only";
import { useEffect, useRef } from "react";

/**
 * Returns a stable reference to the previous value of a variable.
 *
 * @param value The current value.
 * @returns The previous value, or `undefined` on first render.
 */
export const usePrevious = <T>(value: T): T | undefined => {
	const ref = useRef<T | undefined>(undefined);

	useEffect(() => {
		ref.current = value;
	}, [value]);

	return ref.current;
};
