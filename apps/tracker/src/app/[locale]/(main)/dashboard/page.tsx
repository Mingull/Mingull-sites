"use client";

import { CreateOrganizationForm } from "@/components/forms/create-organization";
import { redirect } from "@/i18n/navigation";
import { authClient } from "@/lib/auth-client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@mingull/ui/comps";
import { Button } from "@mingull/ui/comps/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@mingull/ui/comps/dialog";
import { useLocale } from "next-intl";
import { useState } from "react";

export default function Dashboard() {
	const [dialogOpen, setDialogOpen] = useState(false);
	const { data, error, isPending } = authClient.useSession();
	const locale = useLocale();
	const { data: organizations, error: orgError, isPending: isOrgPending } = authClient.useListOrganizations();

	if (isPending) {
		return (
			<section className="flex min-h-[80vh] items-center justify-center">
				<p className="text-muted-foreground">Loading your dashboard...</p>
			</section>
		);
	}
	if (error) {
		console.error("Error fetching session:", error);
		return (
			<section className="flex min-h-[80vh] items-center justify-center">
				<p className="text-red-500">Failed to load your dashboard. Please try again later.</p>
			</section>
		);
	}
	if (!data) {
		return redirect({ href: "/sign-in", locale });
	}

	const { user, session } = data;

	return (
		<section className="bg-accent/10 py-18 ml-4 min-h-full rounded-xl">
			<div className="container max-w-5xl space-y-10">
				<header className="space-y-2">
					<h1 className="text-4xl font-bold tracking-tight">Welcome back, {user.username ?? user.name ?? "Hero"}!</h1>
					<p className="text-muted-foreground text-lg">This is your control Ready to smash today&apos;s workout? 💪</p>
				</header>

				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{/* Stats */}
					<StatCard title="🔥 Streak" value="12 days" />
					<StatCard title="🏋️ Workouts" value="34" />
					<StatCard title="⚡ PR Bench" value="95kg" />

					{/* Groups Card */}
					<Card>
						<CardHeader>
							<CardTitle>Your Squads</CardTitle>
							<CardDescription>Track progress with your team.</CardDescription>
						</CardHeader>
						<CardContent>
							{organizations && organizations.length > 0 ?
								<ul className="space-y-2 text-sm">
									{organizations.map((g) => (
										<li key={g.id} className="flex items-center justify-between">
											<span>{g.name}</span>
											<Button size="sm" variant="ghost">
												View
											</Button>
										</li>
									))}
								</ul>
							:	<p className="text-muted-foreground text-sm">You haven&apos;t joined a squad yet. Assemble your team! 🦸</p>}

							<Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
								<DialogTrigger asChild>
									<Button variant="outline" className="mt-4 w-full">
										Create Squad
									</Button>
								</DialogTrigger>
								<DialogContent>
									<DialogHeader>
										<DialogTitle>Create Squad</DialogTitle>
										<DialogDescription>Form a new squad to track progress together.</DialogDescription>
									</DialogHeader>
									<CreateOrganizationForm onSuccess={() => setDialogOpen(false)} />
								</DialogContent>
							</Dialog>
						</CardContent>
					</Card>

					{/* Today's Workout */}
					<Card>
						<CardHeader>
							<CardTitle>Today's Mission</CardTitle>
							<CardDescription>Your battle plan for today&apos;s workout.</CardDescription>
						</CardHeader>
						<CardContent>
							<Button size="lg" className="w-full">
								Start Workout
							</Button>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}

function StatCard({ title, value }: { title: string; value: string }) {
	return (
		<Card className="text-center">
			<CardHeader>
				<CardDescription>{title}</CardDescription>
				<CardTitle className="text-2xl">{value}</CardTitle>
			</CardHeader>
		</Card>
	);
}
