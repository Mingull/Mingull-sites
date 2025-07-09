import { db } from "~/db/index.ts";
import { accounts, apikeys, sessions, users, verifications } from "~/db/schemas/auth.ts";
import { accountDetails } from "~/plugins/server/account-details.ts";
import { birthday } from "~/plugins/server/birthday.ts";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { admin, apiKey, username } from "better-auth/plugins";

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: "mysql",
		usePlural: true,
		schema: {
			accounts,
			apikeys,
			sessions,
			users,
			verifications,
		},
	}),
	basePath: "/v1/auth",
	user: {
		additionalFields: {
			bio: {
				type: "string",
				nullable: true,
				required: false,
			},
		},
	},
	account: {
		accountLinking: {
			enabled: true,
			trustedProviders: ["discord", "email-password", "github"],
		},
	},
	advanced: {
		crossSubDomainCookies: {
			enabled: true,
			domain: process.env.NODE_ENV === "production" ? "mingull.nl" : undefined, // Set to your production domain
		},
	},
	trustedOrigins:
		process.env.TRUSTED_ORIGINS ?
			process.env.TRUSTED_ORIGINS.split(",").map((origin) => origin.trim())
		:	["http://localhost:3000", "https://mingull.nl"],
	onAPIError: {
		onError(error) {
			console.error(error);
		},
	},
	emailAndPassword: {
		enabled: true,
	},
	socialProviders: {
		discord: {
			clientId: process.env.DISCORD_CLIENT_ID as string,
			clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
		},
		github: {
			clientId: process.env.GITHUB_CLIENT_ID as string,
			clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
		},
	},
	plugins: [
		admin(),
		apiKey(),
		accountDetails(),
		birthday(),
		username({
			usernameValidator: (username) => {
				if (username === "admin") {
					return false;
				} else {
					return true;
				}
			},
		}),
	],
});
