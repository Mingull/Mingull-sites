"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Button } from "@mingull/ui/comps/button";
import { SunIcon, MoonIcon } from "lucide-react";
import { Spinner } from "@mingull/icons";

export function ThemeToggle({ size }: { size?: "default" | "sm" }) {
	const { setTheme, resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	if (!mounted)
		return (
			<Button size={size ?? "sm"} variant="ghost">
				<Spinner className="size-6 animate-spin md:size-4" />
				<span className="sr-only">loading theme toggle</span>
			</Button>
		);

	return (
		<Button size={size ?? "sm"} variant="ghost" className="cursor-pointer" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
			{resolvedTheme === "dark" ?
				<SunIcon className="size-6 text-orange-300 md:size-4" />
			:	<MoonIcon className="size-6 text-sky-950 md:size-4" />}
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}
