import { sql } from "drizzle-orm";
import { mysqlTable, varchar, text, boolean, datetime } from "drizzle-orm/mysql-core";
import { users } from "./auth";

export const collections = mysqlTable("collections", {
	id: varchar("id", { length: 36 }).primaryKey(),
	userId: varchar("user_id", { length: 36 }).references(() => users.id, { onDelete: "cascade" }),
	name: varchar("name", { length: 255 }).notNull(),
	description: text("description"),
	createdAt: datetime("created_at").default(sql`CURRENT_TIMESTAMP`),
	updatedAt: datetime("updated_at")
		.default(sql`CURRENT_TIMESTAMP`)
		.$onUpdate(() => sql`CURRENT_TIMESTAMP`),
});

export const pastes = mysqlTable("pastes", {
	id: varchar("id", { length: 36 }).primaryKey(),
	userId: varchar("user_id", { length: 36 }).references(() => users.id, { onDelete: "cascade" }),
	collectionId: varchar("collection_id", { length: 36 }).references(() => collections.id, { onDelete: "set null" }),
	title: varchar("title", { length: 255 }).notNull(),
	content: text("content").notNull(),
	syntax: varchar("syntax", { length: 50 }).default("plaintext"),
	isPublic: boolean("is_public").default(false).notNull(),
	expiresAt: datetime("expires_at"),
	createdAt: datetime("created_at").default(sql`CURRENT_TIMESTAMP`),
	updatedAt: datetime("updated_at")
		.default(sql`CURRENT_TIMESTAMP`)
		.$onUpdate(() => sql`CURRENT_TIMESTAMP`),
});

export const tags = mysqlTable("tags", {
	id: varchar("id", { length: 36 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	createdAt: datetime("created_at").default(sql`CURRENT_TIMESTAMP`),
	updatedAt: datetime("updated_at")
		.default(sql`CURRENT_TIMESTAMP`)
		.$onUpdate(() => sql`CURRENT_TIMESTAMP`),
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
