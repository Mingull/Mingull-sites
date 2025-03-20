import { createAuthClient } from "better-auth/client";
import { apiKeyClient, usernameClient } from "better-auth/client/plugins";

export const authClient = createAuthClient({
	baseURL: "http://localhost:3000",
	plugins: [apiKeyClient(), usernameClient()],
});
