import { int, json, mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { featureFlags } from "./flags";
import { flagVariants } from "./variants";

export const flagRules = mysqlTable("flag_rules", {
	id: int("id").primaryKey().autoincrement(),
	featureFlagId: int("feature_flag_id")
		.notNull()
		.references(() => featureFlags.id, { onDelete: "cascade" }),
	variantId: int("variant_id").references(() => flagVariants.id, { onDelete: "set null" }), // nullable, if null means just enable flag
	targetType: varchar("target_type", { length: 32, enum: ["role", "organization", "user", "plan"] }).notNull(), // "role" | "organization" | "user" | "plan"
	allowedRoles: json("allowed_roles").$type<string[]>().notNull().default([]), // example ("admin" | "member" | "owner" | "user")[]
	plan: varchar("plan", { length: 64, enum: ["free", "pro", "enterprise"] })
		.notNull()
		.default("free"), // "free" | "pro" | "enterprise"
	rolloutPercentage: int("rollout_percentage").default(100),
	description: varchar("description", { length: 255 }),
});

export type FlagRule = typeof flagRules.$inferSelect;
export type NewFlagRule = typeof flagRules.$inferInsert;
