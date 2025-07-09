import Hero from "@/components/hero-section";
import RecentPosts from "@/components/recent-posts";
import RecentProjects from "@/components/recent-projects";
import Skills from "@/components/skills";

export default async function Home() {
	return (
		<section className="py-24">
			{/*py-6">*/}
			<div className="container max-w-2xl md:max-w-5xl">
				{/* <Intro /> */}
				<Hero />

				<Skills />

				<RecentProjects />
				<RecentPosts />

				{/* <GlowingEffectDemoSecond /> */}

				{/* <NewsletterForm /> */}
			</div>
		</section>
	);
}
