"use client";

import { TocItem } from "@/lib/docs";
import { cn } from "@mingull/lib";
import { useEffect, useState } from "react";

type TocSidebarProps = {
	toc: TocItem[];
};

export function TocSidebar({ toc }: TocSidebarProps) {
	if (!toc || toc.length === 0) return null;

	const [activeId, setActiveId] = useState<string | null>(null);

	useEffect(() => {
		const handleScroll = () => {
			let current: string | null = null;
			toc.forEach(function check(item) {
				const el = document.getElementById(item.slug);
				if (el && el.getBoundingClientRect().top < 120) current = item.slug;
				item.children?.forEach(check);
			});
			setActiveId(current);
		};
		window.addEventListener("scroll", handleScroll);
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, [toc]);

	const renderItems = (items: TocItem[], level = 0) => (
		<ul className="relative">
			{items.map((item, idx) => {
				const isLast = idx === items.length - 1;
				return (
					<li key={item.slug} className={cn(`pl-${level * 4} relative`)}>
						<a href={`#${item.slug}`} className={cn("hover:text-primary mb-2 block transition-colors", activeId === item.slug ? "text-primary font-medium" : "text-muted-foreground")}>
							{item.text}
						</a>

						{item.children?.length ? renderItems(item.children, level + 1) : null}
					</li>
				);
			})}
		</ul>
	);

	return (
		<aside className="relative hidden w-52 shrink-0 overflow-y-auto xl:block">
			<nav className="text-muted-foreground fixed text-sm">
				<h2 className="mb-4">On this page</h2>
				{renderItems(toc)}
			</nav>
		</aside>
	);
}

function TocSidebarOld({ toc }: TocSidebarProps) {
	if (!toc || toc.length === 0) return null;

	const renderItems = (items: TocItem[], level = 0, parent: TocItem | null = null) => (
		<ul className="border-muted relative">
			{items.map((item) => {
				const isFirstChild = item === items[0];
				const isLastChild = item === items[items.length - 1];
				return (
					<li key={item.slug} className={cn("relative pl-4")}>
						<span className={cn("bg-muted absolute left-0 top-1 h-5 w-px transform", { "-top-1": items.length > 1 && isLastChild, "top-0.5 h-5": !parent })} />

						{parent && isFirstChild ?
							<span className={cn("bg-muted -rotate-65 absolute -left-2 -top-2 block h-4 w-px")} />
						:	null}

						{parent && isLastChild ?
							<span className={cn("bg-muted rotate-65 absolute -bottom-2 -left-2 block h-4 w-px")} />
						:	null}

						<a href={`#${item.slug}`} className={cn("hover:text-primary relative mb-2 block transition-colors")}>
							{item.text}
						</a>

						{item.children?.length ? renderItems(item.children, level + 1, item) : null}
					</li>
				);
			})}
		</ul>
	);

	return (
		<aside className="relative hidden w-52 shrink-0 overflow-y-auto xl:block">
			<nav className="text-muted-foreground text-sm">{renderItems(toc)}</nav>
		</aside>
	);
}
