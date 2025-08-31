import { members, organizations } from "@mingull/lib";
import { db, eq } from "@mingull/lib/db";

export async function getActiveOrganization(userId: string) {
	const memberUser = await db.query.members.findFirst({
		where: eq(members.userId, userId),
	});

	if (!memberUser) {
		return null;
	}

	const activeOrganization = await db.query.organizations.findFirst({
		where: eq(organizations.id, memberUser.organizationId),
	});

	return activeOrganization;
}
