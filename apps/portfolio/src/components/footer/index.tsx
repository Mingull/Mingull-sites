import { navigation } from "./navigation"; // your config

export default function Footer() {
	return (
		<footer className="bg-muted py-16">
			<div className="container max-w-3xl">
				<div className="md:flex md:items-center md:justify-between">
					<div className="flex w-full justify-between gap-4">
						{navigation.groups?.map((group) => {
							const GroupIcon = group.icon;
							return (
								<div key={group.label}>
									<div className="text-muted-foreground flex items-center gap-2 font-semibold">
										{GroupIcon ?
											<GroupIcon className="h-4 w-4" />
										:	null}
										{group.label}
									</div>
									<ul className="mt-2 space-y-1">
										{group.items.map((item) => {
											const ItemIcon = item.icon;
											return (
												<li
													key={item.label}
													className={item.disabled ? "cursor-not-allowed opacity-50" : ""}
												>
													<a
														href={item.href}
														target={item.external ? "_blank" : undefined}
														rel={item.external ? "noopener noreferrer" : undefined}
														className="flex items-center gap-2 text-sm hover:underline"
													>
														{ItemIcon ?
															<ItemIcon className="h-4 w-4" />
														:	null}
														{item.label}
														{item.badge ?
															<span className="bg-muted ml-auto rounded px-2 py-0.5 text-xs">
																{item.badge}
															</span>
														:	null}
													</a>
												</li>
											);
										})}
									</ul>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</footer>
	);
}
