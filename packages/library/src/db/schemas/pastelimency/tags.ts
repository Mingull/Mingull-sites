import { mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { timestamps } from "../helper.ts";

export const pastelimencyTags = mysqlTable("pastelimency_tags", {
	id: varchar("id", { length: 36 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	...timestamps(),
});

export type PastelimencyTag = typeof pastelimencyTags.$inferSelect;
export type NewPastelimencyTag = typeof pastelimencyTags.$inferInsert;
