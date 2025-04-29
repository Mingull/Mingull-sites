"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useSession } from "@/lib/auth-client";
import { FeatureEnabled } from "@mingull/shared/feature-flags";
import { useEffect, useState } from "react";

export default function Dashboard() {
	const { data: session, isPending } = useSession();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (isPending && !session)
		return (
			<section className="py-24">
				<div className="container max-w-3xl xl:max-w-4xl">Loading...</div>
			</section>
		);

	return (
		<section className="py-24">
			<div className="container max-w-3xl xl:max-w-4xl">
				<h1>Dashboard</h1>

				<div className="flex flex-col gap-4">
					<FeatureEnabled flag="EXPERIMENTAL_FEATURE" user={session!.user}>
						<Card>
							<CardHeader>Advanced Analytics</CardHeader>
							<CardContent>
								<p>Here is some advanced analytics content.</p>
							</CardContent>
						</Card>
					</FeatureEnabled>
					<FeatureEnabled
						flag="DISABLED_FEATURE"
						user={session!.user}
						withBadge={<Badge variant="destructive">Disabled</Badge>}
					>
						<Card>
							<CardHeader>New Feature</CardHeader>
							<CardContent>
								<p>Here is some new feature content.</p>
							</CardContent>
						</Card>
					</FeatureEnabled>
				</div>
			</div>
		</section>
	);
}
