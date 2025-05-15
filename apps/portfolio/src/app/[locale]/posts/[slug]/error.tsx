"use client";

import { Link } from "@/i18n/navigation";
import { Button, Typography } from "@mingull/ui/comps";
import { ArrowLeftIcon } from "lucide-react";
import { useEffect } from "react";
import Balancer from "react-wrap-balancer";

export default function PostError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<section className="container max-w-3xl px-4 pt-24 pb-16 md:px-6 md:pt-32 md:pb-24">
			<BackLink />
			<div className="mt-8 space-y-4">
				<Typography.H1>
					<Balancer>Something went wrong.</Balancer>
				</Typography.H1>
				<Typography.Lead>
					<Balancer>Please try again later.</Balancer>
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
