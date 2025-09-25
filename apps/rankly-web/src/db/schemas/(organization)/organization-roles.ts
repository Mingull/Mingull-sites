import { mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";
import { organizations } from "./organizations";
import { timestamps } from "../helper";

export const organizationRoles = mysqlTable("organization_roles", {
	id: varchar("id", { length: 36 }).primaryKey(),
	organizationId: varchar("organization_id", { length: 36 })
		.notNull()
		.references(() => organizations.id, { onDelete: "cascade" }),
	role: text("role").notNull(),
	permission: text("permission").notNull(),
	...timestamps(),
});
