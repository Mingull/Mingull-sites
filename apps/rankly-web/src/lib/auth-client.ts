"use client";
import { createAuthClient } from "better-auth/react";
import { apiKeyClient, inferAdditionalFields, organizationClient, usernameClient } from "better-auth/client/plugins";
import { ac, admin, member, owner } from "./permissions";

export const authClient = createAuthClient({
	fetchOptions: {
		credentials: "include",
	},
	baseURL: process.env.BETTER_AUTH_URL!,
	plugins: [
		organizationClient({
			ac,
			dynamicAccessControl: {
				enabled: true,
			},
		}),
		apiKeyClient(),
		usernameClient(),
		inferAdditionalFields({
			user: {
				bio: {
					type: "string",
					nullable: true,
					required: false,
				},
			},
		}),
	],
});
