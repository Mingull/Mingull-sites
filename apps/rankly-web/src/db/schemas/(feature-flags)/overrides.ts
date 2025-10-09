import { boolean, int, mysqlTable, timestamp, varchar } from "drizzle-orm/mysql-core";
import { featureFlags } from "./flags";

export const flagOverrides = mysqlTable("flag_overrides", {
	id: int("id").primaryKey().autoincrement(),
	featureFlagId: int("feature_flag_id")
		.notNull()
		.references(() => featureFlags.id, { onDelete: "cascade" }),
	targetType: varchar("target_type", { length: 32 }).notNull(), // "user" | "org"
	targetId: varchar("target_id", { length: 128 }).notNull(),
	value: boolean("value").notNull(),
	expiresAt: timestamp("expires_at"),
	createdBy: varchar("created_by", { length: 128 }),
	createdAt: timestamp("created_at").defaultNow(),
});

export type FlagOverride = typeof flagOverrides.$inferSelect;
export type NewFlagOverride = typeof flagOverrides.$inferInsert;
