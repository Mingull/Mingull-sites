import { relations } from "drizzle-orm";
import { users } from "./(auth)/users";
import { serverStatus } from "./(main)/server-status";
import { servers } from "./(main)/servers";

export const serverRelations = relations(servers, ({ one }) => ({
	owner: one(users, {
		fields: [servers.ownerId],
		references: [users.id],
	}),
	status: one(serverStatus, {
		fields: [servers.status],
		references: [serverStatus.id],
	}),
}));
