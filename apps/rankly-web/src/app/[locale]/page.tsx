import { CallToAction } from "@/components/call-to-action";
import { Features } from "@/components/features";
import { HeroSection } from "@/components/hero-section";

export default async function Home() {
	return (
		<div className="py-24">
			<HeroSection />
			<Features />
			<CallToAction />
		</div>
	);
}
