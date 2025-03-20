"use server";
import { headers } from "next/headers";
import { auth } from "./auth";
import { User } from "./db/schemas/auth";

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
	};
};
