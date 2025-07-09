"use client";

import { cn } from "@mingull/lib";
import { Badge } from "@mingull/ui/comps/badge";
import { useNavigation } from "./navigation";
import { useId } from "react";

export default function Footer() {
	const navigation = useNavigation();
	const id = useId();

	if (!navigation) return null;

	const isHorizontal = navigation.orientation === "horizontal";

	return (
		<footer
			className={cn("bg-muted text-muted-foreground text-sm", {
				"py-16": isHorizontal,
				"py-8": !isHorizontal,
			})}
		>
			<div className="container mx-0 max-w-3xl px-4 sm:mx-auto">
				<div
					className={cn("flex w-full", {
						"flex-row items-start justify-between gap-12": isHorizontal,
						"flex-col items-center gap-6 text-center": !isHorizontal,
					})}
				>
					{/* Title Section */}
					<p
						className={cn(
							"text-foreground flex w-full items-center gap-2 font-serif text-2xl font-semibold",
							{
								"justify-center": !isHorizontal,
							},
						)}
					>
						{navigation.icon && <navigation.icon className="text-primary h-12 w-12" />}
						<span>{navigation.title}</span>
					</p>

					{/* Group Navigation Section */}
					<div
						className={cn("flex w-full", {
							"flex-col items-center gap-8": !isHorizontal,
							"flex-row justify-end gap-12": isHorizontal,
						})}
					>
						{navigation.groups?.map((group, key) => {
							const GroupIcon = group.icon;
							const isGroupHorizontal = group.orientation === "horizontal";
							const groupKey = `${id}-${group.label ?? key}`;

							const showLabel = group.label && !group.header;
							const showHeader = group.header && !group.label;

							const labelContent =
								showLabel ?
									<p className="mb-2 flex items-center justify-start gap-2 font-semibold">
										{GroupIcon && <GroupIcon className="h-4 w-4" />}
										{group.label}
									</p>
								: showHeader ?
									<p className="mb-2 min-w-fit font-semibold">
										{typeof group.header === "function" ?
											group.header(new Date().getFullYear())
										:	group.header}
									</p>
								:	null;

							const footerContent =
								group.footer ?
									<p className="mb-2 min-w-fit font-semibold">
										{typeof group.footer === "function" ? group.footer() : group.footer}
									</p>
								:	null;

							return (
								<div
									key={groupKey}
									className={cn("text-foreground", {
										"text-center": !isGroupHorizontal,
										"text-muted-foreground": group.muted,
										"sm:gap-22 flex w-full items-center justify-center": isGroupHorizontal,
										"justify-evenly": group.header,
									})}
								>
									{labelContent}

									<ul
										className={cn("space-y-1", {
											"flex w-full flex-wrap justify-center space-x-1 space-y-0 text-base sm:space-x-6":
												isGroupHorizontal,
											"justify-evenly": !group.header,
										})}
									>
										{group.items.map((item) => {
											const ItemIcon = item.icon;

											return (
												<li
													key={item.label}
													className={cn({
														"cursor-not-allowed opacity-50": item.disabled,
													})}
												>
													<a
														href={item.href}
														target={item.external ? "_blank" : undefined}
														rel={item.external ? "noopener noreferrer" : undefined}
														className={cn("flex items-center gap-2 hover:underline", {
															"justify-center gap-6": isGroupHorizontal,
														})}
													>
														{ItemIcon && (
															<ItemIcon
																className={cn("h-4 w-4", {
																	"mr-2 h-6 w-6": isGroupHorizontal,
																	"text-muted-foreground": group.muted,
																})}
															/>
														)}
														{(group.orientation === "vertical" || !item.iconOnly) &&
															item.label}
														{item.badge && <Badge>{item.badge}</Badge>}
													</a>
												</li>
											);
										})}
									</ul>
									{footerContent}
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</footer>
	);
}
