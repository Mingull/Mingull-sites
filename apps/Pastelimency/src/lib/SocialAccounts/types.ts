import { Account } from "../db/schemas/auth";

export type Provider =
	| "apple"
	| "discord"
	| "dropbox"
	| "facebook"
	| "github"
	| "google"
	| "kick"
	| "microsoft"
	| "tiktok"
	| "twitch"
	| "twitter"
	| "linkedin"
	| "gitlab"
	| "reddit"
	| "roblox"
	| "spotify"
	| "vk";

export type AccountDetails = Account & {
	displayName: string | null;
};
