import { mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";
import { timestamps } from "./helper.ts";
import { users } from "./users.ts";
import { organizations } from "./organizations.ts";

export const invitations = mysqlTable("invitations", {
	id: varchar("id", { length: 36 }).primaryKey(),
	organizationId: varchar("organization_id", { length: 36 })
		.notNull()
		.references(() => organizations.id, { onDelete: "cascade" }),
	email: text("email").notNull(),
	role: text("role"),
	status: text("status").default("pending").notNull(),
	inviterId: varchar("inviter_id", { length: 36 })
		.notNull()
		.references(() => users.id, { onDelete: "cascade" }),
	...timestamps({ expiresAt: timestamp("expires_at").notNull() }),
});

export type Invitation = typeof invitations.$inferSelect;
export type NewInvitation = typeof invitations.$inferInsert;
