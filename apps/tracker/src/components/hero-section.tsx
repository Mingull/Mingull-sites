import { AnimatedGroup } from "@/components/ui/animated-group";
import { TextEffect } from "@/components/ui/text-effect";
import { Button } from "@mingull/ui/comps/button";
import { Link } from "@/i18n/navigation";

import type { Variants } from "framer-motion";

const transitionVariants: Record<string, Variants> = {
	item: {
		hidden: {
			opacity: 0,
			filter: "blur(12px)",
			y: 12,
		},
		visible: {
			opacity: 1,
			filter: "blur(0px)",
			y: 0,
			transition: {
				type: "spring",
				bounce: 0.3,
				duration: 1.5,
			},
		},
	},
};

export function HeroSection() {
	return (
		<section className="overflow-hidden">
			<div aria-hidden className="absolute inset-0 isolate hidden contain-strict lg:block">
				<div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
				<div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
				<div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
			</div>
			<div>
				<div className="relative py-24">
					<div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
					<div className="mx-auto max-w-5xl px-6">
						<div className="sm:mx-auto lg:mr-auto lg:mt-0">
							<TextEffect preset="fade-in-blur" speedSegment={0.3} as="h1" className="mt-8 max-w-3xl text-balance text-5xl font-medium md:text-6xl lg:mt-16">
								Unleash your inner <span className="text-primary font-special font-bold">Hero</span>.
							</TextEffect>
							<TextEffect per="line" preset="fade-in-blur" speedSegment={0.3} delay={0.5} as="p" className="mt-8 max-w-2xl text-pretty text-lg">
								From daily workouts to epic streaks, Repulse transforms every session into a hero&apos;s journey. Track your progress, challenge friends, and rise to legendary status.
							</TextEffect>

							<AnimatedGroup
								variants={{
									container: {
										visible: {
											transition: {
												staggerChildren: 0.05,
												delayChildren: 0.75,
											},
										},
									},
									...transitionVariants,
								}}
								className="mt-12 flex items-center gap-2"
							>
								<div key={1} className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5">
									<Link href="/sign-up">
										<Button asChild size="lg">
											<span className="text-nowrap">Start Training</span>
										</Button>
									</Link>
								</div>
								<Link href="/pricing">
									<Button key={2} asChild size="lg" variant="ghost">
										<span className="text-nowrap">View Pricing</span>
									</Button>
								</Link>
							</AnimatedGroup>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
