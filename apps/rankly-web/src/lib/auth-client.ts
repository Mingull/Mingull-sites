"use client";
import { createAuthClient } from "@mingull/auth/client";

export const authClient = createAuthClient({
	baseURL: process.env.BETTER_AUTH_URL!,
});
