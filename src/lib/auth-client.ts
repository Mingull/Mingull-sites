import { createAuthClient } from "better-auth/client";
import { apiKeyClient, inferAdditionalFields, usernameClient } from "better-auth/client/plugins";
import { auth } from "./auth";

export const authClient = createAuthClient({
	baseURL: "http://192.168.178.126:3000",
	plugins: [apiKeyClient(), usernameClient(), inferAdditionalFields<typeof auth>()],
});
