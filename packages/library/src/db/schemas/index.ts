import { boolean, datetime, json, mysqlEnum, mysqlTable, primaryKey, text, varchar } from "drizzle-orm/mysql-core";
import { users } from "@mingull/lib/db/schemas/auth";
import { timestamps } from "@mingull/lib/db/schemas/helpers";

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

export const preferences = mysqlTable("preferences", {
	id: varchar("id", { length: 36 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull().unique(),
	description: text("description"),
	type: mysqlEnum("type", ["string", "boolean", "number", "list"]).notNull(),
	site: varchar("site", { length: 36 }).references(() => sites.id, { onDelete: "cascade", onUpdate: "cascade" }),
	defaultValue: text("default_value").notNull(),
	options: json("options").$type<string[]>(),
});

export const userPreferences = mysqlTable(
	"user_preferences",
	{
		userId: varchar("user_id", { length: 36 })
			.notNull()
			.references(() => users.id, { onDelete: "cascade" }),
		preferenceId: varchar("preference_id", { length: 36 })
			.notNull()
			.references(() => preferences.id, { onDelete: "cascade" }),
		value: text("value").notNull(),
	},
	(table) => [primaryKey({ columns: [table.userId, table.preferenceId] })],
);

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

export type Paste = typeof pastes.$inferSelect;
export type NewPaste = typeof pastes.$inferInsert;

export type Collection = typeof collections.$inferSelect;
export type NewCollection = typeof collections.$inferInsert;

export type Tag = typeof tags.$inferSelect;
export type NewTag = typeof tags.$inferInsert;

export type Preference = typeof preferences.$inferSelect;
export type NewPreference = typeof preferences.$inferInsert;

export type Site = typeof sites.$inferSelect;
export type NewSite = typeof sites.$inferInsert;
