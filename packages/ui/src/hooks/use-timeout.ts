"client only";
import { useEffect, useRef, useState } from "react";

/**
 * Executes a callback only once after a delay (like `setTimeout`).
 *
 * @param callback The function to run.
 * @param delay Delay in milliseconds.
 */
export const useTimeout = (callback: () => void, delay: number) => {
	const savedCallback = useRef(callback);

	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	useEffect(() => {
		const timer = setTimeout(() => savedCallback.current(), delay);
		return () => clearTimeout(timer);
	}, [delay]);
};
