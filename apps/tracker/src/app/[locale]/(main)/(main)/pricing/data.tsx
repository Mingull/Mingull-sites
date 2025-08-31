import { Link } from "@/components/intl-link";
import { Button } from "@mingull/ui/comps";
import { Dumbbell, BarChart3, Trophy, Sparkles } from "lucide-react";

export const data = {
	tiers: [
		{
			name: "Rookie",
			highlighted: false,
			callToAction: (
				<Button asChild size="sm" variant="outline">
					<Link href="/sign-up">Join the Squad</Link>
				</Button>
			),
		},
		{
			name: "Hero",
			highlighted: true,
			callToAction: (
				<Button asChild size="sm">
					<Link href="/sign-up">Become a Hero</Link>
				</Button>
			),
		},
	],
	categories: [
		{
			name: "Workout Tracking",
			icon: <Dumbbell className="size-4" />,
		},
		{
			name: "Progress & Stats",
			icon: <BarChart3 className="size-4" />,
		},
		{
			name: "Community",
			icon: <Trophy className="size-4" />,
		},
		{
			name: "Quality of Life",
			icon: <Sparkles className="size-4" />,
		},
	],
	features: [
		// Workout Tracking
		{
			feature: "Log workouts (sets, reps, weight)",
			category: "Workout Tracking",
			Rookie: true,
			Hero: true,
		},
		{
			feature: "Track streaks (daily/weekly/monthly)",
			category: "Workout Tracking",
			Rookie: true,
			Hero: true,
		},
		{
			feature: "Saved workout templates",
			category: "Workout Tracking",
			Rookie: "Up to 3",
			Hero: "Unlimited",
		},

		// Progress & Stats
		{
			feature: "Basic progress charts",
			category: "Progress & Stats",
			Rookie: true,
			Hero: true,
		},
		{
			feature: "Advanced analytics (muscle groups, PRs, trends)",
			category: "Progress & Stats",
			Rookie: false,
			Hero: true,
		},
		{
			feature: "Data export",
			category: "Progress & Stats",
			Rookie: "Monthly",
			Hero: "Unlimited",
		},

		// Community
		{
			feature: "Global leaderboard",
			category: "Community",
			Rookie: true,
			Hero: true,
		},
		{
			feature: "Friends & private leaderboards",
			category: "Community",
			Rookie: "Up to 10 friends",
			Hero: "Unlimited",
		},
		{
			feature: "Profile customization",
			category: "Community",
			Rookie: false,
			Hero: true,
		},

		// Quality of Life
		{
			feature: "Dark mode themes",
			category: "Quality of Life",
			Rookie: true,
			Hero: true,
		},
		{
			feature: "Custom streak reminders",
			category: "Quality of Life",
			Rookie: false,
			Hero: true,
		},
		{
			feature: "Early access to new features",
			category: "Quality of Life",
			Rookie: false,
			Hero: true,
		},
	],
};
