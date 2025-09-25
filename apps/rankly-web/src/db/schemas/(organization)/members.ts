import { sql } from "drizzle-orm";
import { boolean, datetime, int, json, mysqlEnum, mysqlTable, primaryKey, text, timestamp, varchar } from "drizzle-orm/mysql-core";
import { timestamps } from "../helper";
import { users } from "../(auth)/users";
import { organizations } from "./organizations";

export const members = mysqlTable("members", {
	id: varchar("id", { length: 36 }).primaryKey(),
	organizationId: varchar("organization_id", { length: 36 })
		.notNull()
		.references(() => organizations.id, { onDelete: "cascade" }),
	userId: varchar("user_id", { length: 36 })
		.notNull()
		.references(() => users.id, { onDelete: "cascade" }),
	role: text("role").default("member").notNull(),
	...timestamps(),
});

export type Member = typeof members.$inferSelect;
export type NewMember = typeof members.$inferInsert;
