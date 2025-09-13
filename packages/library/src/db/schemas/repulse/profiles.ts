import { decimal, int, mysqlEnum, mysqlTable, text, varchar } from "drizzle-orm/mysql-core";
import { timestamps } from "../helper.ts";
import { users } from "../users.ts";

export const repulseProfiles = mysqlTable("repulse_profiles", {
	id: varchar("id", { length: 36 }).primaryKey(),
	userId: varchar("user_id", { length: 36 })
		.notNull()
		.references(() => users.id, { onDelete: "cascade" }),
	weight: decimal("weight", { precision: 5, scale: 2 }).notNull(),
	height: decimal("height", { precision: 5, scale: 2 }).notNull(),
	age: int("age").notNull(),
	gender: mysqlEnum("gender", ["male", "female", "other"]).notNull(),
	goal: mysqlEnum("goal", ["gain", "lose", "maintain"]).notNull(),
	activityLevel: mysqlEnum("activity_level", ["none", "very_low", "low", "medium", "high", "very_high"]).notNull(),
	bio: text("bio"),
	...timestamps(),
});

export type RepulseProfiles = typeof repulseProfiles.$inferSelect;
export type NewRepulseProfiles = typeof repulseProfiles.$inferInsert;
