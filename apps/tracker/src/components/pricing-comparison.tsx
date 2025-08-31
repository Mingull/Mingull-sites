import { ReactNode } from "react";
import { Comparison, ComparisonCategory, ComparisonContent, ComparisonFooter, ComparisonHeader, ComparisonHeadItem, ComparisonItem, Feature, Tier } from "./ui/Comparison";

export type PricingComparisonProps<T extends string, C extends string> = {
	tiers: Tier<T>[];
	categories: {
		name: C;
		icon?: ReactNode;
	}[];
	features: Feature<T, C>[];
};

export function PricingComparison<const T extends string, const C extends string>({ features, tiers, categories }: PricingComparisonProps<T, C>) {
	return (
		<section className="py-16 md:py-24" id="compare-plans">
			<div className="mx-auto max-w-5xl px-6">
				<div className="mx-auto mb-12 max-w-2xl space-y-4 text-center">
					<h2 className="text-4xl font-semibold md:text-5xl">Compare Plans</h2>
					<p className="text-muted-foreground text-lg">See what each plan includes and pick the one that powers your hero journey.</p>
				</div>

				<div className="w-full overflow-auto lg:overflow-visible">
					<Comparison tiers={tiers}>
						<ComparisonHeader>
							{tiers.map((tier) => (
								<ComparisonHeadItem key={tier.name} {...tier} />
							))}
						</ComparisonHeader>
						<ComparisonContent>
							{categories.map((cat, i) => (
								<ComparisonCategory key={i} name={cat.name} icon={cat.icon}>
									{features
										.filter((feat) => feat.category === cat.name)
										.map((feature) => (
											<ComparisonItem key={feature.feature} feature={feature} />
										))}
								</ComparisonCategory>
							))}
						</ComparisonContent>
						<ComparisonFooter />
					</Comparison>
				</div>
			</div>
		</section>
	);
}
