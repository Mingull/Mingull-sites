"use client";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { useSelectedLayoutSegment } from "next/navigation";
import { ComponentProps } from "react";
import LanguageSelector from "./language-selector";
import ThemeToggle from "./theme-toggle";
import { GitHubIcon } from "@mingull/icons";

export default function Header() {
	return (
		<header className="bg-background/75 fixed inset-x-0 top-0 z-50 py-6 backdrop-blur-sm">
			<nav className="container flex max-w-5xl items-center justify-between xl:max-w-screen-2xl">
				<div className="flex gap-8">
					<Link href="/" className="font-serif text-2xl font-bold">
						Mingull
					</Link>
					<ul className="text-muted-foreground flex items-center gap-3 text-sm font-light sm:gap-10">
						<HeaderLink href="/posts">Posts</HeaderLink>
						{/* <HeaderLink href="/docs">Docs</HeaderLink> */}
						<HeaderLink href="/projects">Projects</HeaderLink>
						{/* <HeaderLink href="/contact">Contact</HeaderLink> */}
					</ul>
				</div>
				<div className="flex gap-4">
					<LanguageSelector />
					<Link href={"https://github.com/mingull"} target="_blank">
						<GitHubIcon className="text-foreground" />
					</Link>
					<ThemeToggle />
					{/* <LoginButton /> */}
				</div>
			</nav>
		</header>
	);
}

function HeaderLink({ href, ...rest }: ComponentProps<typeof Link>) {
	const selectedLayoutSegment = useSelectedLayoutSegment();
	const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
	const isActive = pathname === href;

	return (
		<li className={cn("hover:text-foreground transition-colors", { "text-foreground": isActive })}>
			<Link aria-current={isActive ? "page" : undefined} href={href} {...rest} />
		</li>
	);
}
