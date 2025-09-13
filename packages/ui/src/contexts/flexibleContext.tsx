"use client";
import { createContext, ReactNode, use } from "react";

export function createFlexibleContext<T>(opts?: { defaultValue: T }) {
	const Context = createContext<T | undefined>(opts?.defaultValue);

	const useFlexibleContext = (opts?: { errorMessage?: string; onError?: (error: Error) => void }) => {
		const ctx = use(Context);
		if (ctx === undefined) {
			const error = new Error(opts?.errorMessage || "useFlexibleContext must be used within a Provider");
			opts?.onError?.(error);
			throw error;
		}
		return ctx;
	};

	const Provider = ({ children, value }: { value: T; children: ReactNode }) => {
		return <Context value={value}>{children}</Context>;
	};

	return { Provider, useFlexibleContext };
}
