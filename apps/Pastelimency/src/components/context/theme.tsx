"use client";
import { createFlexibleContext } from "@/lib/utils/flexibleContext";
import { useState, useEffect } from "react";

export type Theme = "light" | "dark";

const { Provider, useFlexibleContext: useTheme } = createFlexibleContext<{
	theme: Theme;
	toggleTheme: () => void;
}>({ errorMessage: "useTheme must be used within a ThemeProvider" });

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [theme, setTheme] = useState<Theme>((localStorage.getItem("theme") as Theme) || "light");

	useEffect(() => {
		document.documentElement.classList.toggle("dark", theme === "dark");
		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

	return <Provider value={{ theme, toggleTheme }}>{children}</Provider>;
};

export { useTheme };
