"use server";
import { auth } from "@mingull/lib/auth/server";
import { User } from "@mingull/lib/db/schemas/auth";
import { headers } from "next/headers";

export const getUser = async (): Promise<User | null> => {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (!session || !session.user) {
		return null;
	}

	return {
		...session.user,
		username: session.user.username ?? null,
		displayUsername: session.user.displayUsername ?? null,
		createdAt: session.user.createdAt ?? null,
		updatedAt: session.user.updatedAt ?? null,
		image: session.user.image ?? null,
		bio: session.user.bio ?? null,
		role: session.user.role ?? null,
		banned: session.user.banned ?? null,
		banExpires: session.user.banExpires ?? null,
		banReason: session.user.banReason ?? null,
		birthday: session.user.birthday ?? null,
	};
};

export const serverLog = async (message?: any, ...optionalParams: any[]) => {
	console.log(message, ...optionalParams);
};
