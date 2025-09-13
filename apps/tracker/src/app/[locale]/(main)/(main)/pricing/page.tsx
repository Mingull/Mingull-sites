import { Pricing } from "@/components/pricing";
import { PricingComparison } from "@/components/pricing-comparison";
import { data } from "./data";

export default async function PricingPage() {
	function extractFeaturesFor(tier: "Rookie" | "Hero") {
		return data.features.filter((feature) => Boolean(feature[tier])).map((feature) => feature.feature);
	}

	const rookie = extractFeaturesFor("Rookie");
	const hero = extractFeaturesFor("Hero").filter((item) => !rookie.includes(item));

	return (
		<div className="py-24">
			<Pricing rookie={rookie} hero={hero} />
			<PricingComparison {...data} />
		</div>
	);
}
