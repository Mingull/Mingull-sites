"use client";

import { Link } from "@/i18n/navigation";
import { authClient } from "@/lib/auth-client";
import { GitHubIcon, MingullIcon } from "@mingull/icons";
import { cn } from "@mingull/lib";
import { Avatar, AvatarFallback, AvatarImage } from "@mingull/ui/comps/avatar";
import { Button } from "@mingull/ui/comps/button";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@mingull/ui/comps/sheet";
import { LogIn, MenuIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import NextLink from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { ComponentProps } from "react";
import { LanguageSelector } from "./language-selector";
import { ThemeToggle } from "./theme-toggle";
import { useConstants } from "@/constants/client";

export function Header() {
	const constants = useConstants();
	const t = useTranslations("nav");
	const { data, error, isPending } = authClient.useSession();

	return (
		<header className="border-border bg-background/70 fixed top-0 z-50 w-full border-b shadow-sm backdrop-blur-lg">
			<nav className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 xl:max-w-screen-2xl">
				{/* Logo */}
				<Link
					href="/"
					className="focus-visible:ring-ring hover:text-foreground flex items-center gap-2 rounded font-serif text-xl font-bold tracking-tight transition-colors focus:outline-none focus-visible:ring-2"
					aria-label="Go to homepage"
				>
					<MingullIcon className="h-10 w-10" />
					{constants.TITLE}
				</Link>

				{/* Desktop navigation */}
				<div className="hidden items-center gap-4 sm:flex">
					<ul className="flex gap-2 text-sm font-medium">
						{/* Add header links here */}
						<HeaderLink href="/pricing">Pricing</HeaderLink>
					</ul>
				</div>

				{/* Actions */}
				<div className="flex items-center gap-2">
					<LanguageSelector />
					<ThemeToggle />
					{isPending ?
						<Avatar>
							<AvatarFallback>
								<MingullIcon className="h-10 w-10" />
							</AvatarFallback>
						</Avatar>
					: data?.user ?
						<Avatar>
							<AvatarImage src={data.user.image ?? ""} alt={data.user.name} />
							<AvatarFallback>
								<MingullIcon className="h-10 w-10" />
							</AvatarFallback>
						</Avatar>
					:	<Button asChild variant="ghost" aria-label="Login" className="flex items-center gap-1">
							<Link href="/sign-in">
								<LogIn className="h-5 w-5" />
								<span className="hidden sm:inline">Login</span>
							</Link>
						</Button>
					}
				</div>

				{/* Mobile menu trigger */}
				<div className="sm:hidden">
					<MobileMenu />
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
			<Button variant="ghost" asChild aria-label={`Navigate to ${href}`} className="px-2 py-1">
				<Link
					href={href}
					aria-current={isActive ? "page" : undefined}
					className={cn("focus-visible:ring-ring hover:text-foreground rounded transition-colors focus:outline-none focus-visible:ring-2", {
						"text-foreground font-semibold": isActive,
						"text-muted-foreground": !isActive,
					})}
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
				<Button variant="ghost" size="icon" aria-label="Open menu">
					<MenuIcon className="h-5 w-5" />
				</Button>
			</SheetTrigger>
			<SheetContent side="right" className="w-72 rounded-l-lg">
				<SheetHeader className="border-b pb-2">
					<SheetTitle className="flex items-center gap-2 font-serif text-lg font-semibold tracking-tight">
						<MingullIcon className="h-10 w-10" />
						Mingull
					</SheetTitle>
				</SheetHeader>

				<nav className="flex h-full flex-col justify-between py-4">
					<ul className="flex flex-col gap-2 text-sm font-medium">{/* Add mobile header links here */}</ul>

					<div className="border-border mt-auto flex items-center justify-evenly border-t pt-4">
						<LanguageSelector size="default" />
						<Button size="default" variant="ghost" asChild aria-label="View GitHub profile">
							<NextLink href="https://github.com/mingull" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm">
								<GitHubIcon className="text-foreground h-6 w-6" />
							</NextLink>
						</Button>
						<ThemeToggle size="default" />
					</div>
				</nav>

				<SheetFooter>
					<p className="text-muted-foreground mt-4 text-center text-sm">&copy; {new Date().getFullYear()} Mingull</p>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
