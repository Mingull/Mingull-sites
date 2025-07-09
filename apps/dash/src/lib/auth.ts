import { env } from "@mingull/env/next/client";
import { createAuthClient } from "@mingull/lib/auth/client";

export const { listSessions, useSession, signIn, signUp, signOut } = createAuthClient({
	baseURL: env.NEXT_PUBLIC_BETTER_AUTH_URL || "http://localhost:3000",
});
