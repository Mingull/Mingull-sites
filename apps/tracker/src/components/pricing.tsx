import { Link } from "@/components/intl-link";
import { Button } from "@mingull/ui/comps/button";
import { Check } from "lucide-react";
import { AnimatedGroup } from "./ui/animated-group";
import { TextEffect } from "./ui/text-effect";

export function Pricing({ rookie, hero }: { rookie: string[]; hero: string[] }) {
	return (
		<section className="py-16 md:py-24">
			<div className="mx-auto max-w-5xl px-6">
				<div className="mx-auto max-w-2xl space-y-6 text-center">
					<TextEffect preset="fade-in-blur" speedSegment={0.3} as="h1" className="max-w-3xl text-balance text-5xl font-medium md:text-6xl">
						Plans for Every Hero
					</TextEffect>
					<TextEffect per="line" preset="fade-in-blur" speedSegment={0.3} as="p" className="text-muted-foreground">
						Whether you&apos;re just starting your journey or aiming for legendary status, we&apos;ve got a plan to power your gains.
					</TextEffect>
				</div>

				<div className="mt-4 flex justify-center">
					<TextEffect as="div" preset="fade-in-blur" speedSegment={0.3} className="center">
						<Button asChild variant="secondary" className="w-full">
							<Link href={{ pathname: "/pricing", hash: "#compare-plans" }}>Compare Plans</Link>
						</Button>
					</TextEffect>
				</div>

				<div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-5 md:gap-0">
					<AnimatedGroup preset="blur" className="rounded-(--radius) flex flex-col justify-between space-y-8 border p-6 md:col-span-2 md:my-4 md:rounded-r-none md:border-r-0 lg:p-10">
						<div className="space-y-4">
							<div>
								<h3 className="font-medium">Rookie</h3>
								<span className="my-3 block text-2xl font-semibold">FREE</span>
								<p className="text-muted-foreground text-sm">Start your heroic journey</p>
							</div>

							<Button asChild variant="outline" className="w-full">
								<Link href="/sign-up">Join the Squad</Link>
							</Button>

							<hr className="border-dashed" />

							<ul className="list-outside space-y-3 text-sm">
								{rookie.map((item, index) => (
									<li key={index} className="flex items-center gap-2">
										<Check className="size-3" />
										{item}
									</li>
								))}
							</ul>
						</div>
					</AnimatedGroup>

					<AnimatedGroup className="dark:bg-muted rounded-(--radius) border p-6 shadow-lg shadow-gray-950/5 md:col-span-3 lg:p-10 dark:[--color-muted:var(--color-zinc-900)]">
						<div className="grid gap-6 sm:grid-cols-2">
							<div className="space-y-4">
								<div>
									<h3 className="font-medium">Hero</h3>
									<span className="my-3 block text-2xl font-semibold">$5 / mo</span>
									<p className="text-muted-foreground text-sm">Unlock all powers</p>
								</div>

								<Button asChild className="w-full">
									<Link href="/sign-up">
										<span>Become a Hero</span>
									</Link>
								</Button>
							</div>

							<div>
								<div className="text-sm font-medium">Includes everything in Rookie plus:</div>

								<ul className="mt-4 list-outside space-y-3 text-sm">
									{hero.map((item, index) => (
										<li key={index} className="flex items-center gap-2">
											<Check className="size-3" />
											{item}
										</li>
									))}
								</ul>
							</div>
						</div>
					</AnimatedGroup>
				</div>
			</div>
		</section>
	);
}
