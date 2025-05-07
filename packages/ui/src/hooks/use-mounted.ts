"client only";
import { useEffect, useState } from "react";

/**
 * Detects if the component has mounted on the client.
 * Useful for hydration-safe rendering.
 *
 * @returns `true` if mounted on the client, otherwise `false`.
 */
export const useMounted = () => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		return () => setMounted(false);
	}, []);

	return mounted;
};
