import { members, organizations } from "@mingull/lib";
import { getUser } from "./users";
import { db, eq, inArray } from "@mingull/lib/db";

export const getOrganizations = async () => {
	const { user } = await getUser();

	const orgMembers = await db.query.members.findMany({
		where: eq(members.userId, user.id),
	});

	const orgs = await db.query.organizations.findMany({
		where: inArray(
			organizations.id,
			orgMembers.map((member) => member.organizationId),
		),
	});

	return orgs;
};

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
