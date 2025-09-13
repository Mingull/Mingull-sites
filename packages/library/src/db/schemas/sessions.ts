import { mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";
import { timestamps } from "./helper.ts";
import { users } from "./users.ts";
import { organizations } from "./organizations.ts";

export const sessions = mysqlTable("sessions", {
	id: varchar("id", { length: 36 }).primaryKey(),
	userId: varchar("user_id", { length: 36 })
		.notNull()
		.references(() => users.id, { onDelete: "cascade" }),
	expiresAt: timestamp("expires_at").notNull(),
	token: varchar("token", { length: 255 }).notNull().unique(),
	ipAddress: text("ip_address"),
	userAgent: text("user_agent"),
	impersonatedBy: text("impersonated_by"),
	activeOrganizationId: varchar("active_organization_id", { length: 36 }).references(() => organizations.id, { onDelete: "set null" }),
	...timestamps(),
});

export type Session = typeof sessions.$inferSelect;
export type NewSession = typeof sessions.$inferInsert;
