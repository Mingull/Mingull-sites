// og-theme.ts

export const ogTheme = {
	colors: {
		background: "#fefefe",
		foreground: "#0e0e16",
		primary: "#6643f3",
		primaryForeground: "#faf9ff",
		secondary: "#9adcd6",
		secondaryForeground: "#123431",
		muted: "#f4f4f7",
		mutedForeground: "#55556f",
		destructive: "#ef4444",
		destructiveForeground: "#ffffff",
		warning: "#f59500",
		success: "#5bb661",
		border: "#e2e2ef",
		input: "#e6e6f0",
		ring: "#6643f3",
	},
	fonts: {
		sans: "DM Sans, sans-serif",
		serif: "Merriweather, serif",
		mono: "Fira Code, monospace",
		special: "Leckerli One, cursive",
	},
	radius: {
		base: "0.3rem",
		sm: "calc(0.3rem - 4px)",
		md: "calc(0.3rem - 2px)",
		lg: "0.3rem",
		xl: "calc(0.3rem + 4px)",
	},
	shadows: {
		"2xs": "0 1px 3px 0px hsl(0 0% 0% / 0.05)",
		xs: "0 1px 3px 0px hsl(0 0% 0% / 0.05)",
		sm: "0 1px 3px 0px hsl(0 0% 0% / 0.1), 0 1px 2px -1px hsl(0 0% 0% / 0.1)",
		base: "0 1px 3px 0px hsl(0 0% 0% / 0.1), 0 1px 2px -1px hsl(0 0% 0% / 0.1)",
		md: "0 1px 3px 0px hsl(0 0% 0% / 0.1), 0 2px 4px -1px hsl(0 0% 0% / 0.1)",
		lg: "0 1px 3px 0px hsl(0 0% 0% / 0.1), 0 4px 6px -1px hsl(0 0% 0% / 0.1)",
		xl: "0 1px 3px 0px hsl(0 0% 0% / 0.1), 0 8px 10px -1px hsl(0 0% 0% / 0.1)",
		"2xl": "0 1px 3px 0px hsl(0 0% 0% / 0.25)",
	},
} as const;
