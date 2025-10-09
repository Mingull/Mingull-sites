import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { featureFlags } from "./flags";

export const flagRules = mysqlTable("flag_rules", {
	id: int("id").primaryKey().autoincrement(),
	featureFlagId: int("feature_flag_id")
		.notNull()
		.references(() => featureFlags.id, { onDelete: "cascade" }),
	type: varchar("type", { length: 32 }).notNull(), // e.g. "role" | "org" | "user" | "plan"
	value: varchar("value", { length: 255 }).notNull(), // e.g. "admin", "pro", userId
	rolloutPercentage: int("rollout_percentage").default(100),
	description: varchar("description", { length: 255 }),
});

export type FlagRule = typeof flagRules.$inferSelect;
export type NewFlagRule = typeof flagRules.$inferInsert;
