"client only";
import { useEffect, useRef } from "react";

/**
 * Runs a callback repeatedly with a given interval delay.
 *
 * @param callback Function to call at each interval.
 * @param delay Delay in milliseconds. Pass `null` to pause.
 */
export const useInterval = (callback: () => void, delay: number | null) => {
	const savedCallback = useRef(callback);

	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	useEffect(() => {
		if (delay === null) return;

		const tick = () => savedCallback.current();
		const id = setInterval(tick, delay);
		return () => clearInterval(id);
	}, [delay]);
};
