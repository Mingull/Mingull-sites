import { mysqlTable, text, timestamp, varchar, int, boolean } from "drizzle-orm/mysql-core";
import { flagCategories } from "./categories";

export const featureFlags = mysqlTable("feature_flags", {
	id: int("id").primaryKey().autoincrement(),
	key: varchar("key", { length: 128 }).notNull().unique(), // e.g. "new_dashboard"
	name: varchar("name", { length: 255 }).notNull(),
	description: text("description"),
	categoryId: int("category_id").references(() => flagCategories.id, { onDelete: "set null" }),
	enabled: boolean("enabled").notNull().default(true),
	defaultValue: boolean("default_value").notNull().default(false),
	isPermanent: boolean("is_permanent").default(false),
	rolloutPercentage: int("rollout_percentage").default(100),
	createdBy: varchar("created_by", { length: 128 }),
	updatedBy: varchar("updated_by", { length: 128 }),
	createdAt: timestamp("created_at").defaultNow(),
	updatedAt: timestamp("updated_at").onUpdateNow().defaultNow(),
});

export type FeatureFlag = typeof featureFlags.$inferSelect;
export type NewFeatureFlag = typeof featureFlags.$inferInsert;
