"use client";
import { createAuthClient } from "better-auth/react";
import { adminClient, apiKeyClient, inferAdditionalFields, organizationClient, usernameClient } from "better-auth/client/plugins";
import { ac } from "./permissions";

export const authClient = createAuthClient({
	fetchOptions: {
		credentials: "include",
	},
	baseURL: process.env.NEXT_PUBLIC_RANKLY_BASE_URL!,
	plugins: [
		adminClient(),
		organizationClient({ ac, dynamicAccessControl: { enabled: true } }),
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
