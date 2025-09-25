import { sql } from "drizzle-orm";
import { boolean, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";
import { timestamps } from "../helper";

export const users = mysqlTable("users", {
	id: varchar("id", { length: 36 }).primaryKey(),
	name: text("name").notNull(),
	username: varchar("username", { length: 255 }).unique(),
	displayUsername: text("display_username"),
	email: varchar("email", { length: 255 }).notNull().unique(),
	emailVerified: boolean("email_verified").notNull(),
	image: text("image"),
	role: text("role"),
	banned: boolean("banned"),
	banReason: text("ban_reason"),
	banExpires: timestamp("ban_expires").default(sql`NULL`),
	...timestamps({ onboardedAt: timestamp("onboarded_at").default(sql`NULL`) }),
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
