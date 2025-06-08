"client only";
import { useEffect, useRef } from "react";

/**
 * Calls a handler function when a click occurs outside the given ref.
 *
 * @param ref Ref of the element to detect outside clicks from.
 * @param handler Function to call when an outside click occurs.
 */
export const useClickOutside = <T extends HTMLElement | null>(
	ref: React.RefObject<T>,
	handler: (event: MouseEvent | TouchEvent) => void,
) => {
	useEffect(() => {
		const listener = (event: MouseEvent | TouchEvent) => {
			if (!ref.current || ref.current.contains(event.target as Node)) {
				return;
			}
			handler(event);
		};

		document.addEventListener("mousedown", listener);
		document.addEventListener("touchstart", listener);

		return () => {
			document.removeEventListener("mousedown", listener);
			document.removeEventListener("touchstart", listener);
		};
	}, [ref, handler]);
};
