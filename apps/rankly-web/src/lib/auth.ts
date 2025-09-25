import { db } from "@/db";
import { accounts, apikeys, sessions, users, verifications } from "@/db/schemas";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { apiKey, organization, username } from "better-auth/plugins";
import { Resend } from "resend";
import { ForgotPasswordEmail } from "@mingull/auth/emails";
import { ac, admin, member, owner } from "./permissions";
import { getActiveOrganization } from "./utils";

const schema = { accounts, apikeys, sessions, users, verifications };

const resend = new Resend();

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: "mysql",
		usePlural: true,
		schema,
	}),
	account: {
		accountLinking: {
			enabled: true,
			trustedProviders: ["discord", "email-password", "google"],
		},
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
	emailAndPassword: {
		enabled: true,
		sendResetPassword: async ({ user, url, token }, request) => {
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
		apiKey(),
		organization({
			ac,
			roles: { member, admin, owner },
			dynamicAccessControl:{
				enabled: true,
			}
		}),
		username(),
	],
});
