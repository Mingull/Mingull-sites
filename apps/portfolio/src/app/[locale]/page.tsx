import { ExpandableCardDemo } from "@/components/expand-card";
import Intro from "@/components/intro";
import RecentPosts from "@/components/recent-posts";
import RecentProjects from "@/components/recent-projects";
import Skills from "@/components/skills";
import { Alert, AlertDescription, AlertTitle } from "@mingull/ui/comps/alert";
import { TriangleAlert } from "lucide-react";

export default async function Home() {
	return (
		<section className="py-24">
			<div className="container max-w-2xl md:max-w-4xl xl:max-w-5xl">
				<Alert variant="warning">
					<TriangleAlert />
					<AlertTitle>Work in Progress</AlertTitle>
					<AlertDescription>
						This site is currently under construction. Some features may be unavailable or behave
						unexpectedly.
						<br />
						We&apos;re actively working on improvements — please check back soon.
						<br />
						Thanks for your patience and support!
					</AlertDescription>
				</Alert>

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
