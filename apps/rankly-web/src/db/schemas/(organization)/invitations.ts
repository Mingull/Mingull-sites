import { mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";
import { timestamps } from "../helper";
import { users } from "../(auth)/users";
import { organizations } from "./organizations";

export const invitations = mysqlTable("invitations", {
	id: varchar("id", { length: 36 }).primaryKey(),
	organizationId: varchar("organization_id", { length: 36 })
		.notNull()
		.references(() => organizations.id, { onDelete: "cascade" }),
	inviterId: varchar("inviter_id", { length: 36 })
		.notNull()
		.references(() => users.id, { onDelete: "cascade" }),
	email: text("email").notNull(),
	role: text("role").notNull(),
	status: text("status").default("pending").notNull(),
	...timestamps({
		expiresAt: timestamp("expires_at").notNull(),
	}),
});

export type Invitation = typeof invitations.$inferSelect;
export type NewInvitation = typeof invitations.$inferInsert;
