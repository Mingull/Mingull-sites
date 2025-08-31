import { sql } from "drizzle-orm";
import { boolean, datetime, int, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";
import { timestamps } from "./helper.ts";
import { users } from "./users.ts";

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

export type ApiKey = typeof apikeys.$inferSelect;
export type NewApiKey = typeof apikeys.$inferInsert;
