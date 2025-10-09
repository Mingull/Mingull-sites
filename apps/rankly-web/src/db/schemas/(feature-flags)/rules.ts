import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { featureFlags } from "./flags";

export const flagRules = mysqlTable("flag_rules", {
	id: int("id").primaryKey().autoincrement(),
	featureFlagId: int("feature_flag_id")
		.notNull()
		.references(() => featureFlags.id, { onDelete: "cascade" }),
	targetType: varchar("target_type", { length: 32 }).notNull(), // e.g. "role" | "org" | "user" | "plan"
	allowedRoles: varchar("allowed_roles", { length: 255 }).notNull(), // e.g. "admin" | "member" | "owner" | "user" | ("admin" | "member" | "owner" | "user")[] | null
	plan: varchar("plan", { length: 64 }), // e.g. "free" | "pro" | "enterprise" | null
	rolloutPercentage: int("rollout_percentage").default(100),
	description: varchar("description", { length: 255 }),
});

export type FlagRule = typeof flagRules.$inferSelect;
export type NewFlagRule = typeof flagRules.$inferInsert;
