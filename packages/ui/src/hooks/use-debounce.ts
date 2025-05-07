"client only";
import { useEffect, useState } from "react";

/**
 * Debounces a value over a given delay.
 *
 * @param value The value to debounce.
 * @param delay Time in milliseconds to wait before updating.
 * @returns The debounced value.
 */
export const useDebounce = <T>(value: T, delay: number): T => {
	const [debounced, setDebounced] = useState(value);

	useEffect(() => {
		const timer = setTimeout(() => setDebounced(value), delay);
		return () => clearTimeout(timer);
	}, [value, delay]);

	return debounced;
};
