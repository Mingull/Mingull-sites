import { boolean, int, mysqlEnum, mysqlTable, timestamp, varchar } from "drizzle-orm/mysql-core";
import { featureFlags } from "./flags";

export const tenantFlags = mysqlTable("tenant_flags", {
	id: int("id").primaryKey().autoincrement(),
	featureFlagId: int("feature_flag_id")
		.notNull()
		.references(() => featureFlags.id, { onDelete: "cascade" }),
	tenantId: varchar("tenant_id", { length: 36 }).notNull(), // can be user ID or organization ID
	type: mysqlEnum("type", ["user", "organization"]).notNull(),
	overrideValue: varchar("override_value", { length: 255 }).default("true"), // can be 'true' or 'false' or null (null means no override, use rules) or variant key
	createdAt: timestamp("created_at").defaultNow(),
	updatedAt: timestamp("updated_at").defaultNow().onUpdateNow(),
});

export type TenantFlag = typeof tenantFlags.$inferSelect;
export type NewTenantFlag = typeof tenantFlags.$inferInsert;
