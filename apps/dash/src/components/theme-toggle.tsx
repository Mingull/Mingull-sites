"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Button } from "@mingull/ui/comps/button";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { Spinner } from "@mingull/icons";

export default function ThemeToggle() {
	const { setTheme, resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	if (!mounted)
		return (
			<Button size="sm" variant="ghost">
				<Spinner className="size-4 animate-spin" />
				<span className="sr-only">loading theme toggle</span>
			</Button>
		);

	return (
		<Button size="sm" variant="ghost" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
			{resolvedTheme === "dark" ?
				<SunIcon className="size-4 text-orange-300" />
			:	<MoonIcon className="size-4 text-sky-950" />}
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}
