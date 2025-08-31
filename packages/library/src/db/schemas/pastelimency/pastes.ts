import { boolean, datetime, mysqlTable, text, varchar } from "drizzle-orm/mysql-core";
import { timestamps } from "../helper.ts";
import { users } from "../users.ts";
import { pastelimencyCollections } from "./collections.ts";

export const pastelimencyPastes = mysqlTable("pastelimency_pastes", {
	id: varchar("id", { length: 36 }).primaryKey(),
	userId: varchar("user_id", { length: 36 }).references(() => users.id, { onDelete: "cascade" }),
	collectionId: varchar("collection_id", { length: 36 }).references(() => pastelimencyCollections.id, { onDelete: "set null" }),
	title: varchar("title", { length: 255 }).notNull(),
	content: text("content").notNull(),
	syntax: varchar("syntax", { length: 50 }).default("plaintext"),
	isPublic: boolean("is_public").default(false).notNull(),
	...timestamps({ expiresAt: datetime("expires_at") }),
});

export type PastelimencyPaste = typeof pastelimencyPastes.$inferSelect;
export type NewPastelimencyPaste = typeof pastelimencyPastes.$inferInsert;
