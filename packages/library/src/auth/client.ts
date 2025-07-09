import { createAuthClient as createAuthClientCore } from "better-auth/react";
import { adminClient, apiKeyClient, inferAdditionalFields, usernameClient } from "better-auth/client/plugins";
import { auth } from "./server.ts";
import { accountDetailsClient } from "~/plugins/client/account-details.ts";
import { birthdayClient } from "~/plugins/client/birthday.ts";

export const createAuthClient = ({ baseURL }: { baseURL: string }) =>
	createAuthClientCore({
		baseURL,
		plugins: [
			adminClient(),
			apiKeyClient(),
			accountDetailsClient(),
			birthdayClient(),
			usernameClient(),
			inferAdditionalFields<typeof auth>(),
		],
	});
