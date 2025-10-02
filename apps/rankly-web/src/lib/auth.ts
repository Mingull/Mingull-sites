import { db } from "@/db";
import { accounts, apikeys, sessions, users, verifications } from "@/db/schemas";
import { ForgotPasswordEmail } from "@mingull/auth/emails";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { admin, apiKey, organization, username } from "better-auth/plugins";
import { Resend } from "resend";
import { ac } from "./permissions";
import { getActiveOrganization } from "./utils";

const schema = { accounts, apikeys, sessions, users, verifications };

const resend = new Resend();

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: "mysql",
		usePlural: true,
		schema,
	}),
	baseURL: process.env.NEXT_PUBLIC_RANKLY_BASE_URL as string,
	basePath: "/api/auth",
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
	logger:{
		log(level, message, ...args) {
			console[level](`[${level}] ${message}`, ...args);
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
	plugins: [nextCookies(), admin(), apiKey(), organization({ ac, dynamicAccessControl: { enabled: true } }), username()],
});
