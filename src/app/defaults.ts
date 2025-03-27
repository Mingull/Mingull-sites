export const defaults = {
	TITLE: "PlakVault",
	SUMMARY: "A secure and minimalist platform for pasting and sharing code or text.",
	DESCRIPTION:
		"PlakVault is a modern, privacy-focused Pastebin alternative designed for seamless code and text sharing with a sleek interface and enhanced security.",
	KEYWORDS:
		"PlakVault, paste, bin, text sharing, code snippets, secure pastebin, minimal, modern, privacy, developer tool",

	// Branding
	PRIMARY_COLOR: "#4A90E2", // Default primary theme color
	SECONDARY_COLOR: "#F5F5F5", // Background or secondary color
	LOGO_URL: "/logo.svg", // Default logo path
	FAVICON_URL: "/favicon.ico",

	// Features
	ALLOW_ANONYMOUS_PASTES: true, // Whether users can create pastes without an account
	DEFAULT_PASTE_VISIBILITY: "unlisted", // Options: "public", "unlisted", "private"
	MAX_PASTE_LENGTH: 100000, // Max characters per paste
	PASTE_EXPIRATION_OPTIONS: ["never", "1 hour", "1 day", "1 week", "1 month"], // Available expiration times

	// Authentication
	ENABLE_AUTH: true, // Whether authentication is required
	AUTH_PROVIDER: "BetterAuth", // Example: "BetterAuth", "Firebase", "Auth0"
	SESSION_TIMEOUT: 3600, // Time in seconds before auto logout (1 hour)

	// SEO & Social
	OG_IMAGE: "/og-image.png", // Default Open Graph image for social sharing
	TWITTER_HANDLE: "@PlakVault", // Twitter handle for social previews
	CANONICAL_URL: "https://plakvault.com", // Default canonical domain

	// Misc
	SUPPORT_EMAIL: "support@plakvault.com", // Contact email for support
	FOOTER_TEXT: "© 2025 PlakVault. All rights reserved.", // Footer copyright text
} as const;
