import { AccountDetails, Provider } from "./types";

const providerAPIs: Record<Provider, string | ((id: string) => string)> = {
	apple: "", // Apple doesn't provide a public API for fetching user details.
	discord: (id) => `https://discord.com/api/v10/users/${id}`,
	dropbox: "https://api.dropboxapi.com/2/users/get_current_account",
	facebook: (id) => `https://graph.facebook.com/${id}?fields=name`,
	github: (id) => `https://api.github.com/user/${id}`,
	google: "https://www.googleapis.com/oauth2/v3/userinfo",
	kick: "", // No public API found
	microsoft: "https://graph.microsoft.com/v1.0/me",
	tiktok: "", // No public API found
	twitch: (id) => `https://api.twitch.tv/helix/users?id=${id}`,
	twitter: (id) => `https://api.twitter.com/2/users/${id}`,
	linkedin: "https://api.linkedin.com/v2/me",
	gitlab: (id) => `https://gitlab.com/api/v4/users/${id}`,
	reddit: (id) => `https://www.reddit.com/user/${id}/about.json`,
	roblox: (id) => `https://users.roblox.com/v1/users/${id}`,
	spotify: "https://api.spotify.com/v1/me",
	vk: (id) => `https://api.vk.com/method/users.get?user_ids=${id}&fields=first_name,last_name&v=5.131`,
};

export const getExtraAccountDetails = async (provider: Provider, accountId: string): Promise<AccountDetails | null> => {
	const apiEndpoint = providerAPIs[provider];
	if (!apiEndpoint) return null;

	const url = typeof apiEndpoint === "function" ? apiEndpoint(accountId) : apiEndpoint;

	try {
		const response = await fetch(url, {
			headers: token ? { Authorization: `Bearer ${token}` } : {},
		});
		if (!response.ok) throw new Error(`Failed to fetch data: ${response.statusText}`);

		const data = await response.json();
		let displayName: string | null = null;

		switch (provider) {
			case "discord":
				displayName = data.username + (data.discriminator !== "0" ? "#" + data.discriminator : "");
				break;
			case "facebook":
				displayName = data.name;
				break;
			case "github":
				displayName = data.login;
				break;
			case "google":
				displayName = data.name;
				break;
			case "microsoft":
				displayName = data.displayName;
				break;
			case "reddit":
				displayName = data.data.name;
				break;
			case "roblox":
				displayName = data.displayName;
				break;
			case "spotify":
				displayName = data.display_name;
				break;
			case "vk":
				displayName = `${data.response[0].first_name} ${data.response[0].last_name}`;
				break;
			case "gitlab":
				displayName = data.username;
				break;
			default:
				displayName = accountId; // Fallback
		}

		return { accountId, provider, displayName, createdAt: new Date(), updatedAt: new Date(), scopes: [], id: "" };
	} catch (error) {
		console.error(`Error fetching details for ${provider}:`, error);
		return null;
	}
};
