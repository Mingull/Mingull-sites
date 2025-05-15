"use client";
import { createContext, ReactNode, useContext } from "react";

export function createFlexibleContext<T>({ defaultValue, errorMessage }: { defaultValue?: T; errorMessage?: string }) {
	const Context = createContext<T | undefined>(defaultValue);

	const useFlexibleContext = () => {
		const ctx = useContext(Context);
		if (ctx === undefined) {
			throw new Error(errorMessage ?? "useFlexibleContext must be used within a Provider");
		}
		return ctx;
	};

	const Provider = ({ children, value }: { value: T; children: ReactNode }) => {
		return <Context.Provider value={value}>{children}</Context.Provider>;
	};

	return { Provider, useFlexibleContext };
}
