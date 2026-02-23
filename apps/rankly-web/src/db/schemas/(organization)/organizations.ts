import { mysqlTable, text, varchar } from "drizzle-orm/mysql-core";
import { timestamps } from "../helper";

export const organizations = mysqlTable("organizations", {
	id: varchar("id", { length: 36 }).primaryKey(),
	name: text("name").notNull(),
	slug: varchar("slug", { length: 255 }).unique().notNull(),
	logo: text("logo"),
	plan: varchar("plan", { length: 64 }).notNull().default("free").$type<OrganizationPlan>(), // e.g. "free" | "pro" | "enterprise"
	metadata: text("metadata"),
	...timestamps(),
});

export type OrganizationPlan = "free" | "pro" | "enterprise";

export type Organization = typeof organizations.$inferSelect;
export type NewOrganization = typeof organizations.$inferInsert;
