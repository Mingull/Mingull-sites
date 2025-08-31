import { BetterOmit } from "@mingull/lib";
import { db } from "@mingull/lib/db";
import { accounts, apikeys, invitations, members, organizations, sessions, users, verifications } from "@mingull/lib/db/schemas/index";
import { betterAuth, User } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { organization, username } from "better-auth/plugins";
import { getActiveOrganization } from "./utils.ts";
import { birthday } from "./plugins/server/birthday.ts";
import { Resend } from "resend";
import { ac, admin, member, owner } from "./permissions.ts";
import ForgotPasswordEmail from "./emails/reset-password-email.tsx";

const schema = { accounts, apikeys, invitations, members, organizations, sessions, users, verifications };

const resend = new Resend();

export type BetterAuthOptions = BetterOmit<Parameters<typeof betterAuth>[0], "database" | "user" | "account" | "advanced" | "trustedOrigins" | "emailAndPassword" | "socialProviders" | "plugins">;

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: "mysql",
		usePlural: true,
		schema,
	}),
	basePath: "/v1/auth",
	user: {
		additionalFields: {
			bio: {
				type: "string",
				required: false,
				fieldName: "bio",
			},
			onboardedAt: {
				type: "date",
				required: false,
				fieldName: "onboarded_at",
			},
		},
	},
	account: {
		accountLinking: {
			enabled: true,
			trustedProviders: ["discord", "email-password", "google"],
		},
	},
	advanced: {
		crossSubDomainCookies: {
			enabled: true,
			domain: process.env.NODE_ENV === "production" ? "mingull.nl" : undefined,
		},
		defaultCookieAttributes: {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production" ? true : false,
			sameSite: "Strict",
		},
		useSecureCookies: process.env.NODE_ENV === "production" ? true : false,
	},
	databaseHooks: {
		session: {
			create: {
				before: async (session) => {
					const organization = await getActiveOrganization(session.userId);
					return {
						data: {
							...session,
							activeOrganizationId: organization?.id,
						},
					};
				},
			},
		},
	},
	trustedOrigins: async (req) => {
		return process.env.TRUSTED_ORIGINS?.split(",").map((o) => o.trim()) ?? [];
	},
	emailAndPassword: {
		enabled: true,
		sendResetPassword: async ({ user, url, token }, request) => {
			console.log({ user, url, token });
			resend.emails.send({
				from: "no-reply@mingull.nl",
				to: user.email,
				subject: "Reset your password",
				react: ForgotPasswordEmail({ username: user.name, url, email: user.email }),
			});
		},
	},
	socialProviders: {
		discord: {
			clientId: process.env.DISCORD_CLIENT_ID as string,
			clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
		},
		google: {
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		},
	},
	plugins: [
		nextCookies(),
		organization({
			ac,
			roles: {
				member,
				admin,
				owner,
			},
		}),
		username(),
		birthday(),
	],
});
