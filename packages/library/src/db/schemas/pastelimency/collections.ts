import { mysqlTable, text, varchar } from "drizzle-orm/mysql-core";
import { timestamps } from "../helper.ts";
import { users } from "../users.ts";

export const pastelimencyCollections = mysqlTable("pastelimency_collections", {
	id: varchar("id", { length: 36 }).primaryKey(),
	userId: varchar("user_id", { length: 36 }).references(() => users.id, { onDelete: "cascade" }),
	name: varchar("name", { length: 255 }).notNull(),
	description: text("description"),
	...timestamps(),
});

export type PastelimencyCollection = typeof pastelimencyCollections.$inferSelect;
export type NewPastelimencyCollection = typeof pastelimencyCollections.$inferInsert;
