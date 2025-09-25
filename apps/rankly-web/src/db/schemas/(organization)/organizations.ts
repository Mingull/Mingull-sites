import { mysqlTable, text, varchar } from "drizzle-orm/mysql-core";
import { timestamps } from "../helper";

export const organizations = mysqlTable("organizations", {
	id: varchar("id", { length: 36 }).primaryKey(),
	name: text("name").notNull(),
	slug: varchar("slug", { length: 255 }).unique(),
	logo: text("logo"),
	metadata: text("metadata"),
	...timestamps(),
});

export type Organization = typeof organizations.$inferSelect;
export type NewOrganization = typeof organizations.$inferInsert;
