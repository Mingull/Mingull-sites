import { Card, CardContent, CardHeader } from "@mingull/ui/comps/card";
import { Settings2, TrendingUp, Zap } from "lucide-react";
import { ReactNode } from "react";

export function Features() {
	return (
		<section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
			<div className="@container mx-auto max-w-5xl px-6">
				<div className="text-center">
					<h2 className="text-balance text-4xl font-semibold lg:text-5xl">Gear Up for Legendary Workouts</h2>
					<p className="mt-4">Every set counts, every streak matters. Train smarter, track faster, and rise to the top.</p>
				</div>
				<div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
					<Card className="group shadow-zinc-950/5">
						<CardHeader className="pb-3">
							<CardDecorator>
								<Zap className="size-6" aria-hidden />
							</CardDecorator>
							<h3 className="mt-6 font-medium">Your Hero&apos;s Routine</h3>
						</CardHeader>

						<CardContent>
							<p className="text-sm">Tailor workouts, sets, and reps exactly how your inner hero demands. No limits, just gains.</p>
						</CardContent>
					</Card>

					<Card className="group shadow-zinc-950/5">
						<CardHeader className="pb-3">
							<CardDecorator>
								<Settings2 className="size-6" aria-hidden />
							</CardDecorator>
							<h3 className="mt-6 font-medium">Command Your Progress</h3>
						</CardHeader>

						<CardContent>
							<p className="mt-3 text-sm">Track every streak, monitor every rep, and take full control of your fitness journey.</p>
						</CardContent>
					</Card>

					<Card className="group shadow-zinc-950/5">
						<CardHeader className="pb-3">
							<CardDecorator>
								<TrendingUp className="size-6" aria-hidden />
							</CardDecorator>
							<h3 className="mt-6 font-medium">Epic Stats</h3>
						</CardHeader>

						<CardContent>
							<p className="mt-3 text-sm">See your progress over time, compare with friends, and celebrate every heroic achievement.</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
	<div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
		<div
			aria-hidden
			className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
		/>
		<div aria-hidden className="bg-radial to-background absolute inset-0 from-transparent to-75%" />
		<div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">{children}</div>
	</div>
);
