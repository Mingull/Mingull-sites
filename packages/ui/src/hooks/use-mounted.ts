"use client";
import { useEffect, useRef } from "react";

/**
 * Returns a ref that is true when the component is mounted.
 */
export const useMounted = () => {
	const mountedRef = useRef(false);

	useEffect(() => {
		mountedRef.current = true;
		return () => {
			mountedRef.current = false;
		};
	}, []);

	return mountedRef;
};
