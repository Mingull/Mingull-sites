import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const flagCategories = mysqlTable("flag_categories", {
	id: int("id").primaryKey().autoincrement(),
	key: varchar("key", { length: 64 }).notNull().unique(), // e.g. "ui", "pro_plan"
	name: varchar("name", { length: 128 }).notNull(),
	description: varchar("description", { length: 255 }),
});

export type FlagCategory = typeof flagCategories.$inferSelect;
export type NewFlagCategory = typeof flagCategories.$inferInsert;
