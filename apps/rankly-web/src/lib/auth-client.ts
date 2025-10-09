"use client";
import { createAuthClient } from "better-auth/react";
import { adminClient, apiKeyClient, inferAdditionalFields, inferOrgAdditionalFields, organizationClient, usernameClient } from "better-auth/client/plugins";
import { ac } from "./permissions";
import { auth } from "./auth";

export const authClient = createAuthClient({
	fetchOptions: {
		credentials: "include",
	},
	baseURL: process.env.NEXT_PUBLIC_RANKLY_BASE_URL!,
	plugins: [
		adminClient(),
		organizationClient({ ac, dynamicAccessControl: { enabled: true }, schema: inferOrgAdditionalFields<typeof auth>() }),
		apiKeyClient(),
		usernameClient(),
		inferAdditionalFields<typeof auth>(),
	],
});
