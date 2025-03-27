import { boolean, datetime, mysqlTable, text, varchar } from "drizzle-orm/mysql-core";
import { users } from "./auth";
import { timestamps } from "./helpers";

export const collections = mysqlTable("collections", {
	id: varchar("id", { length: 36 }).primaryKey(),
	userId: varchar("user_id", { length: 36 }).references(() => users.id, { onDelete: "cascade" }),
	name: varchar("name", { length: 255 }).notNull(),
	description: text("description"),
	...timestamps(),
});

export const pastes = mysqlTable("pastes", {
	id: varchar("id", { length: 36 }).primaryKey(),
	userId: varchar("user_id", { length: 36 }).references(() => users.id, { onDelete: "cascade" }),
	collectionId: varchar("collection_id", { length: 36 }).references(() => collections.id, { onDelete: "set null" }),
	title: varchar("title", { length: 255 }).notNull(),
	content: text("content").notNull(),
	syntax: varchar("syntax", { length: 50 }).default("plaintext"),
	isPublic: boolean("is_public").default(false).notNull(),
	...timestamps({ expiresAt: datetime("expires_at") }),
});

export const tags = mysqlTable("tags", {
	id: varchar("id", { length: 36 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	...timestamps(),
});

export const pasteTags = mysqlTable("paste_tags", {
	pasteId: varchar("paste_id", { length: 36 }).references(() => pastes.id, { onDelete: "cascade" }),
	tagId: varchar("tag_id", { length: 36 }).references(() => tags.id, { onDelete: "cascade" }),
});

export type Paste = typeof pastes.$inferSelect;
export type NewPaste = typeof pastes.$inferInsert;

export type Collection = typeof collections.$inferSelect;
export type NewCollection = typeof collections.$inferInsert;

export type Tag = typeof tags.$inferSelect;
export type NewTag = typeof tags.$inferInsert;
