"use client";

import { authClient } from "@mingull/lib/auth/client";
import { User } from "@mingull/lib/db/schemas/auth";

export const getUser = async (): Promise<User | null> => {
	const { data, error } = await authClient.getSession();

	if (!data || !data.user) {
		return null;
	}
	if (error) {
		console.error("Error fetching user:", error);
		return null;
	}
	return {
		...data.user,
		username: data.user.username ?? null,
		displayUsername: data.user.displayUsername ?? null,
		createdAt: data.user.createdAt ?? null,
		updatedAt: data.user.updatedAt ?? null,
		image: data.user.image ?? null,
		bio: data.user.bio ?? null,
		role: data.user.role ?? null,
		banned: data.user.banned ?? null,
		banExpires: data.user.banExpires ?? null,
		banReason: data.user.banReason ?? null,
	};
};
