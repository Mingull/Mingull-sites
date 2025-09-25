import { mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";
import { timestamps } from "../helper";
import { users } from "./users";
import { organizations } from "../(organization)/organizations";

export const sessions = mysqlTable("sessions", {
	id: varchar("id", { length: 36 }).primaryKey(),
	userId: varchar("user_id", { length: 36 })
		.notNull()
		.references(() => users.id, { onDelete: "cascade" }),
	activeOrganizationId: varchar("active_organization_id", { length: 36 }).references(() => organizations.id, { onDelete: "set null" }),
	token: varchar("token", { length: 255 }).notNull().unique(),
	ipAddress: text("ip_address"),
	userAgent: text("user_agent"),
	...timestamps({
		expiresAt: timestamp("expires_at").notNull(),
	}),
});

export type Session = typeof sessions.$inferSelect;
export type NewSession = typeof sessions.$inferInsert;
