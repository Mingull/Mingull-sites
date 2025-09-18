import { Button } from "@mingull/ui/comps/button";
import { Link } from "@/i18n/navigation";

export function CallToAction() {
	return (
		<section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
			<div className="mx-auto max-w-5xl px-6 text-center">
				<h2 className="text-balance text-4xl font-semibold lg:text-5xl">Unleash Your Inner Hero</h2>
				<p className="mt-4 text-zinc-700 dark:text-zinc-300">Track every rep, crush your streaks, and rise to the top of the leaderboard.</p>

				<div className="mt-12 flex flex-wrap justify-center gap-4">
					<Link href="/sign-up">
						<Button size="lg" asChild>
							<span>Start Training</span>
						</Button>
					</Link>

					<Link href="/pricing">
						<Button size="lg" variant="outline" asChild>
							<span>View Pricing</span>
						</Button>
					</Link>
				</div>
			</div>
		</section>
	);
}
