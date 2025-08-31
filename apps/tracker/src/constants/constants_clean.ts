export const constants = {
	TITLE: "Repulse",
	SUBTITLE: "Track. Compete. Repeat. Your Stark-grade command center for reps, streaks, and statistical domination.",
	SUMMARY:
		"Welcome to Repulse: the slightly sarcastic strength-tracking sidekick you didn't know you needed. Log workouts, rack up streaks, stalk your own progress, and casually obliterate your friends on the leaderboard. This isn't a fitness app. It's a mission log.",
	DESCRIPTION: `
    Meet Repulse, a workout tracker with just enough attitude to call you out when you skip leg day. From daily grind to PR glory, this dashboard is your hub for stats, streaks, and subtle flexes.

    Built with Next.js, styled sharp with shadcn/ui, and secured by BetterAuth (because gains are sacred). You bring the sweat, Repulse brings the stats.

    Disclaimer: Using Repulse may result in excessive competitiveness, muscle soreness, and smug screenshots. Proceed like a hero.`,
	KEYWORDS: ["Repulse", "workout tracker", "fitness stats", "streak tracker", "fitness app", "PR logging", "next.js gym app", "leaderboard for gains"],

	TOOLTIPS: {
		FEATURE_FLAG: "Flip this if you want to test features not even Stark would trust.",
		PROJECTS: "Your workout programs and routines. Assemble them like a mission plan.",
		LOGS: "Your full workout log. No hiding from skipped sessions here.",
		RESTART_SERVICE: "When in doubt, restart the server. Works for Jarvis.",
		SAVE_CHANGES: "Save your genius or your mistakes. Either way, it's recorded.",
		STREAKS: "Daily, weekly, monthly, yearly — how often are you actually showing up?",
		WORKOUT_STATS: "See how often you've done each exercise. And maybe why your knees hurt.",
		LEADERBOARD: "Climb the ranks. Be the hero your gym group chat deserves.",
	},

	LOADING_SCREENS: [
		{
			type: "leaderboard",
			texts: ["Calibrating leaderboard ego boost...", "Ranking you against your friends...", "Counting flex points..."],
		},
		{
			type: "streaks",
			texts: ["Analyzing streak vectors...", "Measuring daily grind levels...", "Scanning for skipped workouts..."],
		},
		{
			type: "auth",
			texts: ["Verifying your hero credentials...", "Checking if you're worthy to enter...", "Sharpening your identity profile..."],
		},
		{
			type: "stats",
			texts: ["Crunching numbers...", "Plotting progress curves...", "Comparing you to your past self..."],
		},
		{
			type: "history",
			texts: ["Digging through the archives...", "Replaying your grind frame by frame...", "Fetching the highlight reel..."],
		},
		{
			type: "workouts",
			texts: ["Loading your next set...", "Bringing up the pain menu...", "Unpacking today's routine..."],
		},
		{
			type: "profile",
			texts: ["Syncing profile data...", "Updating your alter ego...", "Polishing your public stats..."],
		},
		{
			type: "dashboard",
			texts: ["Assembling your dashboard...", "Fueling up the command center...", "Stitching together your streaks, stats, and sass..."],
		},
		{
			type: "general",
			texts: ["Repulsor systems warming up...", "Syncing your sweat data...", "Fueling up your fitness feed...", "Calculating your next PR...", "Loading your workout wisdom..."],
		},
	],

	ERROR_PAGES: {
		NOT_FOUND: {
			code: 404,
			text: "This page missed its workout. Or it never even tried. Total rep: 0.",
		},
		SERVER_ERROR: {
			code: 500,
			text: "The server pulled a muscle. We'll apply ice, massage and reboot.",
		},
		UNAUTHORIZED: {
			code: 401,
			text: "Access denied. You need a proper login, or a SHIELD badge.",
		},
		FORBIDDEN: {
			code: 403,
			text: "No entry. This zone's off-limits, even for enhanced individuals.",
		},
	},
} as const;
