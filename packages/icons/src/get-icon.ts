import { Icon } from "./icon.tsx";
import { registry } from "./registry.jsx";

/**
 * Get an Promise based icon by name.
 * @param name The name of the icon.
 * @returns A promise that resolves to the icon.
 */
export const getIcon = async (name: keyof typeof registry.nodes | (string & {})): Promise<Icon | null> =>
	registry.get(name);

/**
 * Get a synchronous icon by name.
 * @param name The name of the icon.
 * @returns The icon.
 *
 * @deprecated Use {@link getIcon()} instead for consistency.
 * This method is synchronous and may block the event loop.
 * It is recommended to use `getIcon` for asynchronous loading.
 */
export const getIconSync = (name: keyof typeof registry.nodes | (string & {})): Icon | null => registry.getSync(name);
