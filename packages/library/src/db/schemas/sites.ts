import { json, mysqlTable, text, varchar } from "drizzle-orm/mysql-core";
import { timestamps } from "./helper.ts";

export const sites = mysqlTable("sites", {
	id: varchar("id", { length: 36 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull().unique(),
	domain: varchar("domain", { length: 255 }).notNull().unique(),
	description: text("description"),
	summary: text("summary"),
	themes: json("themes"),
	keywords: json("keywords"),
	logo: varchar("logo", { length: 255 }),
	favicon: varchar("favicon", { length: 255 }),
	...timestamps(),
});

export type Site = typeof sites.$inferSelect;
export type NewSite = typeof sites.$inferInsert;
