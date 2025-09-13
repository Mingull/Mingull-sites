import { redirect } from "@/i18n/navigation";
import { auth } from "@mingull/auth";
import { users } from "@mingull/lib";
import { db, eq } from "@mingull/lib/db";
import { getLocale } from "next-intl/server";
import { headers } from "next/headers";

export const getUser = async () => {
	const locale = await getLocale();
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (!session) {
		return redirect({ href: "/sign-in", locale });
	}

	const user = await db.query.users.findFirst({
		where: eq(users.id, session.user.id),
	});

	if (!user) {
		return redirect({ href: "/sign-in", locale });
	}

	return {
		...session,
		user,
	};
};
