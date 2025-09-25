import { boolean, datetime, index, int, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";
import { timestamps } from "../helper";
import { users } from "./users";

export const apikeys = mysqlTable(
	"api_keys",
	{
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
		enabled: boolean("enabled").notNull(),
		rateLimitEnabled: boolean("rate_limit_enabled").notNull(),
		rateLimitTimeWindow: int("rate_limit_time_window"),
		rateLimitMax: int("rate_limit_max"),
		requestCount: int("request_count").notNull(),
		remaining: int("remaining"),
		permissions: text("permissions"),
		metadata: text("metadata"),
		...timestamps({
			lastRequest: datetime("last_request"),
			expiresAt: datetime("expires_at"),
			deletedAt: false,
		}),
	},
	(table) => [index("userId_prefix_idx").on(table.userId, table.prefix)],
);

export type ApiKey = typeof apikeys.$inferSelect;
export type NewApiKey = typeof apikeys.$inferInsert;
