export const defaults = {
	TITLE: "M.O.N.I.T.R.",
	SUBTITLE:
		"Management & Observation Node for Infrastructure, Telemetry, and Reports (a.k.a. Your Digital Mischief HQ)",
	SUMMARY:
		"Welcome to M.O.N.I.T.R., your snarky sidekick for flipping switches, breaking stuff (intentionally), and looking cool while doing it. Feature flags? Check. Project wrangling? Check. Occasional existential crisis? Also check. Dive in, cause some controlled chaos, and maybe save the day—no pressure.",
	DESCRIPTION: `
    Hey, you glorious code slinger, meet M.O.N.I.T.R.: your sarcastic, slightly unhinged control panel for all things backend. Toggle features like a boss, resurrect services faster than a caffeinated zombie, and watch logs scroll like your favorite hacker movie montage.
    
    Powered by Next.js, decked out with shadcn/ui flair, and guarded by Better-Auth’s watchful eye. This dashboard’s basically your backstage pass to chaos, order, and everything in between.
    
    Warning: Every button has the potential to ruin your life or make you look like a legend. Use responsibly—or don’t. Your call. Just remember: in here, you’re the star of this show. Break things. Fix things. Repeat.`,
	KEYWORDS:
		"M.O.N.I.T.R., chaos dashboard, feature flags of doom, sarcastic UI, backend boss moves, toggle like a rebel, logs on fire, nerdy playground, next.js power, shadcn/ui swag, better-auth secured mischief",

	TOOLTIPS: {
		FEATURE_FLAG: "Flip this switch to unleash controlled chaos. Or fix stuff. Depends on your vibe.",
		PROJECTS: "All your projects, wrangled and ready for your command (or abuse).",
		LOGS: "Watch the glorious trainwreck of logs scroll by. Popcorn recommended.",
		RESTART_SERVICE: "Smack this button to resurrect a service. May cause fireworks.",
		SAVE_CHANGES: "Click to save your brilliance. Or your mistakes. No judgment.",
	},

	LOADING_SCREENS: [
		"Brewing your digital mayhem...",
		"Sharpening code swords...",
		"Summoning backend gremlins...",
		"Counting down to chaos...",
		"Coffee-infused loading... almost ready...",
	],

	ERROR_PAGES: {
		NOT_FOUND: {
			code: 404,
			text: "Looks like this page took a vacation. Or maybe it never existed. Classic.",
		},
		SERVER_ERROR: {
			code: 500,
			text: "Something exploded behind the scenes. Don't worry, we sent a mercenary to fix it. Maybe.",
		},
		UNAUTHORIZED: {
			code: 401,
			text: "You shall not pass! (Without the right magic token, anyway.)",
		},
		FORBIDDEN: {
			code: 403,
			text: "Access denied. This area is off-limits, even for awesome people like you.",
		},
	},
} as const;
