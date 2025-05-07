"client only";
import { useEffect, useRef } from "react";

/**
 * Returns `true` only on the first render of the component.
 *
 * @returns `true` if it's the first render, `false` otherwise.
 */
export const useIsFirstRender = (): boolean => {
	const isFirst = useRef(true);

	useEffect(() => {
		isFirst.current = false;
	}, []);

	return isFirst.current;
};
