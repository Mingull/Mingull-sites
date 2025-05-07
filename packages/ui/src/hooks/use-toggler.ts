"client only";
import { useState } from "react";

/**
 * A simple boolean state toggle hook.
 *
 * @param initialValue The initial boolean value.
 * @returns An object with the current value and functions to toggle/set it.
 */
export const useToggler = (initialValue: boolean = false) => {
	const [value, setValue] = useState(initialValue);

	const toggle = () => setValue((prev) => !prev);
	const setTrue = () => setValue(true);
	const setFalse = () => setValue(false);

	return { value, toggle, setTrue, setFalse };
};
