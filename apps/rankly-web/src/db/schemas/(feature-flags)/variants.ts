import { decimal, int, mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { featureFlags } from "./flags";

export const flagVariants = mysqlTable("flag_variants", {
	id: int("id").primaryKey().autoincrement(),
	featureFlagId: int("feature_flag_id")
		.notNull()
		.references(() => featureFlags.id, { onDelete: "cascade" }),
	key: varchar("key", { length: 64 }).notNull(), // e.g. "control", "variant_a", "variant_b"
	description: varchar("description", { length: 255 }),
	weight: decimal("weight", { mode: "number", precision: 3, scale: 2 }).default(0.5), // 0 to 1, e.g. 0.5 = 50%
});

export type FlagVariant = typeof flagVariants.$inferSelect;
export type NewFlagVariant = typeof flagVariants.$inferInsert;
