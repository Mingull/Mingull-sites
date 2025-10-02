import { relations } from "drizzle-orm";
import { users } from "./(auth)/users";
import { serverStatus } from "./(main)/server-status";
import { servers } from "./(main)/servers";
import { sessions } from "./(auth)/sessions";

export const userRelations = relations(users, ({ one, many }) => ({
	servers: many(servers),
	session: one(sessions, {
		fields: [users.id],
		references: [sessions.userId],
	}),
	impersonating: one(sessions,{
		fields: [users.id],
		references: [sessions.impersonatedBy],
	})
}));

export const sessionRelations = relations(sessions, ({ one }) => ({
	impersonatedBy: one(users, {
		fields: [sessions.impersonatedBy],
		references: [users.id],
	}),
}));

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
