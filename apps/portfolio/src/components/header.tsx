"use client";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { GitHubIcon, MingullIcon } from "@mingull/icons";
import { Button } from "@mingull/ui/comps/button";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@mingull/ui/comps/sheet";
import { MenuIcon } from "lucide-react";
import { useSelectedLayoutSegment } from "next/navigation";
import { ComponentProps } from "react";
import LanguageSelector from "./language-selector";
import ThemeToggle from "./theme-toggle";

export default function Header() {
	return (
		<header className="border-border bg-background/70 fixed top-0 z-50 w-full border-b backdrop-blur-md md:inset-x-0">
			<nav
				aria-label="Main navigation"
				className="container flex h-16 w-full max-w-5xl items-center justify-between px-4 sm:px-6 xl:max-w-screen-2xl"
			>
				<div className="flex items-center justify-between sm:justify-start sm:gap-8">
					<Link
						href="/"
						className="focus-visible:ring-ring flex flex-row items-center justify-center gap-1 rounded font-serif text-xl font-bold tracking-tight focus:outline-none focus-visible:ring-2"
					>
						<MingullIcon className="h-10 w-10" />
						Mingull
					</Link>

					<ul className="hidden items-center gap-2 text-sm sm:flex">
						<HeaderLink href="/posts">Posts</HeaderLink>
						<HeaderLink href="/projects">Projects</HeaderLink>
					</ul>
				</div>

				<div className="sm:hidden">
					<MobileMenu />
				</div>

				<div className="hidden items-center gap-2 sm:flex sm:gap-3">
					<LanguageSelector />
					<Button variant="ghost" size="sm" asChild aria-label="View GitHub profile">
						<Link href="https://github.com/mingull" target="_blank" rel="noopener noreferrer">
							<GitHubIcon className="text-foreground size-4" />
						</Link>
					</Button>
					<ThemeToggle />
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
		<li>
			<Button variant="ghost" asChild aria-label={`Navigate to ${href}`}>
				<Link
					href={href}
					aria-current={isActive ? "page" : undefined}
					className={cn(
						"hover:text-foreground focus-visible:ring-ring transition-colors focus:outline-none focus-visible:ring-2",
						{
							"text-foreground font-medium": isActive,
							"text-muted-foreground": !isActive,
						},
					)}
					{...rest}
				/>
			</Button>
		</li>
	);
}

function MobileMenu() {
	return (
		<Sheet modal>
			<SheetTrigger asChild>
				<Button variant="ghost" size="icon" className="sm:hidden" aria-label="Open menu">
					<MenuIcon className="h-[1.2rem] w-[1.2rem]" />
				</Button>
			</SheetTrigger>
			<SheetContent side="right">
				<SheetHeader className="border-b pb-2">
					<SheetTitle className="flex flex-row items-center justify-start gap-1 font-serif text-lg font-semibold tracking-tight">
						<MingullIcon className="h-10 w-10" />
						Mingull
					</SheetTitle>
				</SheetHeader>

				<nav className="space-y-6">
					<ul className="space-y-2 text-sm font-medium">
						<HeaderLink href="/posts">Posts</HeaderLink>
						<HeaderLink href="/projects">Projects</HeaderLink>
					</ul>

					<hr className="border-border" />

					<div className="flex items-center justify-evenly">
						<LanguageSelector size="default" />
						<Button size="default" variant="ghost" asChild aria-label="View GitHub profile">
							<Link
								href="https://github.com/mingull"
								target="_blank"
								rel="noopener noreferrer"
								className="text-foreground flex items-center text-sm"
							>
								<GitHubIcon className="text-foreground size-6" />
							</Link>
						</Button>
						<ThemeToggle size="default" />
					</div>
				</nav>
				<SheetFooter>
					<p className="text-muted-foreground text-center text-sm">
						&copy; {new Date().getFullYear()} Mingull
					</p>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
