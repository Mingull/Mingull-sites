import { json, mysqlEnum, mysqlTable, text, varchar } from "drizzle-orm/mysql-core";
import { sites } from "./sites.ts";

export const preferences = mysqlTable("preferences", {
	id: varchar("id", { length: 36 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull().unique(),
	description: text("description"),
	type: mysqlEnum("type", ["string", "boolean", "number", "list"]).notNull(),
	site: varchar("site", { length: 36 }).references(() => sites.id, { onDelete: "cascade", onUpdate: "cascade" }),
	defaultValue: text("default_value").notNull(),
	options: json("options").$type<string[]>(),
});

export type Preference = typeof preferences.$inferSelect;
export type NewPreference = typeof preferences.$inferInsert;
