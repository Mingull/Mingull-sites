import Intro from "@/components/intro";
import RecentPosts from "@/components/recent-posts";
import RecentProjects from "@/components/recent-projects";
import Skills from "@/components/skills";

export default async function Home() {
	return (
		<section className="py-6">
			{/*py-24">*/}
			<div className="container max-w-2xl md:max-w-4xl xl:max-w-5xl">
				<Intro />

				<Skills />

				<RecentProjects />
				<RecentPosts />
				{/* <ExpandableCardDemo /> */}

				{/* <NewsletterForm /> */}
			</div>
		</section>
	);
}
