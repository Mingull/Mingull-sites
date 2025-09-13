"use client";
import { Link } from "@/i18n/navigation";
import { MingullIcon } from "@mingull/icons";
import { Button } from "@mingull/ui/comps/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@mingull/ui/comps/navigation-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@mingull/ui/comps/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@mingull/ui/comps/select";
import { useSelectedLayoutSegment } from "next/navigation";
import { ComponentProps } from "react";
import { ThemeToggle } from "./theme-toggle";
import { GlobeIcon } from "lucide-react";
import { routing } from "@/i18n/routing";
import { LanguageSelector } from "./language-selector";

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks: { href: ComponentProps<typeof Link>["href"]; label: string }[] = [
	{ href: "/", label: "Home" },
	{ href: { pathname: "/components/[...slug]", params: { slug: [] } }, label: "Components" },
	{ href: "/extras", label: "Extras" },
];

export function Header() {
	const selectedLayoutSegment = useSelectedLayoutSegment();
	const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment.split("/").shift()}` : "/";

	const calculateHref = (href: ComponentProps<typeof Link>["href"]): string => {
		if (typeof href === "string") return href;
		if (typeof href === "object" && "params" in href) return href.pathname.replace(/\/\[\.{3}slug\]/, (href.params?.slug).join());
		return href.pathname;
	};

	const calculateActive = (href: ComponentProps<typeof Link>["href"]): boolean => pathname === calculateHref(href);

	return (
		<header className="bg-background sticky top-0 z-10 border-b px-4 md:px-24">
			<div className="flex h-16 justify-between gap-4 sm:container">
				{/* Left side */}
				<div className="flex gap-2">
					<div className="flex items-center md:hidden">
						{/* Mobile menu trigger */}
						<Popover>
							<PopoverTrigger asChild>
								<Button className="group size-8" variant="ghost" size="icon">
									<svg
										className="pointer-events-none"
										width={16}
										height={16}
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M4 12L20 12"
											className="origin-center -translate-y-[7px] transition-all duration-500 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
										/>
										<path d="M4 12H20" className="origin-center transition-all duration-500 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45" />
										<path
											d="M4 12H20"
											className="origin-center translate-y-[7px] transition-all duration-500 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
										/>
									</svg>
								</Button>
							</PopoverTrigger>
							<PopoverContent align="start" className="w-36 p-1 md:hidden">
								<NavigationMenu className="max-w-none *:w-full">
									<NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
										{navigationLinks.map((link, index) => (
											<NavigationMenuItem key={index} className="w-full">
												<NavigationMenuLink href={calculateHref(link.href)} className="py-1.5" active={calculateActive(link.href)} asChild>
													{link.label}
												</NavigationMenuLink>
											</NavigationMenuItem>
										))}
									</NavigationMenuList>
								</NavigationMenu>
							</PopoverContent>
						</Popover>
					</div>
					{/* Main nav */}
					<div className="flex items-center gap-6">
						<a href="#" className="text-primary hover:text-primary/90">
							<MingullIcon />
						</a>
						{/* Navigation menu */}
						<NavigationMenu className="h-full *:h-full max-md:hidden">
							<NavigationMenuList className="h-full gap-2">
								{navigationLinks.map((link, index) => (
									<NavigationMenuItem key={index} className="h-full">
										<NavigationMenuLink
											active={calculateActive(link.href)}
											href={calculateHref(link.href)}
											className="text-muted-foreground hover:text-primary border-b-primary hover:border-b-primary data-[active]:border-b-primary data-[active]:bg-transparent! h-full justify-center rounded-none border-y-2 border-transparent py-1.5 font-medium hover:bg-transparent"
										>
											{link.label}
										</NavigationMenuLink>
									</NavigationMenuItem>
								))}
							</NavigationMenuList>
						</NavigationMenu>
					</div>
				</div>
				{/* Right side */}
				<div className="flex items-center gap-2">
					{/* Theme toggle */}
					<ThemeToggle />
					{/* Language selector */}
					<LanguageSelector />
					{/* <Select defaultValue="en">
						<SelectTrigger
							id={`language`}
							className="[&>svg]:text-muted-foreground/80 hover:bg-accent hover:text-accent-foreground h-8 border-none px-2 shadow-none [&>svg]:shrink-0"
							aria-label="Select language"
						>
							<GlobeIcon size={16} aria-hidden="true" />
							<SelectValue className="hidden sm:inline-flex" />
						</SelectTrigger>
						<SelectContent className="[&_*[role=option]>span]:end-2 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2 [&_*[role=option]]:pe-8 [&_*[role=option]]:ps-2">
							{routing.locales.map((lang) => (
								<SelectItem key={lang} value={lang}>
									<span className="flex items-center gap-2">
										<span className="truncate">{lang.toUpperCase()}</span>
									</span>
								</SelectItem>
							))}
						</SelectContent>
					</Select> */}
				</div>
			</div>
		</header>
	);
}
