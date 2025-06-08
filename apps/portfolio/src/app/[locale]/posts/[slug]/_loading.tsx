// app/posts/page.tsx
import { Link } from "@/i18n/navigation";
import { Button } from "@mingull/ui/comps/button";
import { Typography } from "@mingull/ui/comps/typography";
import { ArrowLeftIcon } from "lucide-react";
import Balancer from "react-wrap-balancer";

export default function PostsLoading() {
	return (
		<section className="container max-w-3xl px-4 pt-24 pb-16 md:px-6 md:pt-32 md:pb-24">
			<BackLink />
			<div className="mt-8 space-y-4">
				<Typography.H1>
					<Balancer>Loading...</Balancer>
				</Typography.H1>
				<Typography.Lead>
					<Balancer>Loading...</Balancer>
				</Typography.Lead>
			</div>
		</section>
	);
}

function BackLink() {
	return (
		<Link href="/posts" passHref>
			<Button variant="ghost" size="sm" className="mb-6">
				<ArrowLeftIcon className="mr-2 size-4" />
				Back to posts
			</Button>
		</Link>
	);
}
