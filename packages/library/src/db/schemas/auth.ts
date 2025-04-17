import { sql } from "drizzle-orm";
import { boolean, datetime, int, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";
import { timestamps } from "@mingull/lib/db/schemas/helpers";

export const users = mysqlTable("users", {
	id: varchar("id", { length: 36 }).primaryKey(),
	name: text("name").notNull(),
	username: varchar("username", { length: 255 }).unique(),
	displayUsername: text("display_username"),
	email: varchar("email", { length: 255 }).notNull().unique(),
	emailVerified: boolean("email_verified").notNull(),
	image: text("image"),
	bio: text("bio"),
	birthday: datetime("birthday")
		.notNull()
		.default(sql`CURRENT_TIMESTAMP`),
	role: text("role"),
	banned: boolean("banned"),
	banReason: text("ban_reason"),
	banExpires: timestamp("ban_expires").default(sql`NULL`),
	...timestamps(),
});

export const sessions = mysqlTable("sessions", {
	id: varchar("id", { length: 36 }).primaryKey(),
	userId: varchar("user_id", { length: 36 })
		.notNull()
		.references(() => users.id, { onDelete: "cascade" }),
	expiresAt: timestamp("expires_at").notNull(),
	token: varchar("token", { length: 255 }).notNull().unique(),
	ipAddress: text("ip_address"),
	userAgent: text("user_agent"),
	impersonatedBy: text("impersonated_by"),
	...timestamps(),
});

export const accounts = mysqlTable("accounts", {
	id: varchar("id", { length: 36 }).primaryKey(),
	accountId: text("account_id").notNull(),
	providerId: text("provider_id").notNull(),
	userId: varchar("user_id", { length: 36 })
		.notNull()
		.references(() => users.id, { onDelete: "cascade" }),
	accessToken: text("access_token"),
	refreshToken: text("refresh_token"),
	idToken: text("id_token"),
	accessTokenExpiresAt: datetime("access_token_expires_at"),
	refreshTokenExpiresAt: datetime("refresh_token_expires_at"),
	scope: text("scope"),
	password: text("password"),
	metadata: text("metadata"),
	...timestamps(),
});

export const verifications = mysqlTable("verifications", {
	id: varchar("id", { length: 36 }).primaryKey(),
	identifier: text("identifier").notNull(),
	value: text("value").notNull(),
	...timestamps({ expiresAt: timestamp("expires_at").notNull() }),
});

export const apikeys = mysqlTable("api_keys", {
	id: varchar("id", { length: 36 }).primaryKey(),
	userId: varchar("user_id", { length: 36 })
		.notNull()
		.references(() => users.id, { onDelete: "cascade" }),
	name: text("name"),
	start: text("start"),
	prefix: text("prefix"),
	key: text("key").notNull(),
	refillInterval: int("refill_interval"),
	refillAmount: int("refill_amount"),
	lastRefillAt: timestamp("last_refill_at"),
	enabled: boolean("enabled"),
	rateLimitEnabled: boolean("rate_limit_enabled"),
	rateLimitTimeWindow: int("rate_limit_time_window"),
	rateLimitMax: int("rate_limit_max"),
	requestCount: int("request_count"),
	remaining: int("remaining"),
	permissions: text("permissions"),
	metadata: text("metadata"),
	lastRequest: datetime("last_request").default(sql`CURRENT_TIMESTAMP`),
	...timestamps({ expiresAt: datetime("expires_at").default(sql`CURRENT_TIMESTAMP`) }),
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;

export type Session = typeof sessions.$inferSelect;
export type NewSession = typeof sessions.$inferInsert;

export type Account = typeof accounts.$inferSelect;
export type NewAccount = typeof accounts.$inferInsert;

export type Verification = typeof verifications.$inferSelect;
export type NewVerification = typeof verifications.$inferInsert;

export type ApiKey = typeof apikeys.$inferSelect;
export type NewApiKey = typeof apikeys.$inferInsert;
