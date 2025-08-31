import { mysqlEnum, mysqlTable, text, varchar } from "drizzle-orm/mysql-core";
import { timestamps } from "../helper.ts";
import { repulseMuscleGroups } from "./muscle-groups.ts";

export const repulseExercises = mysqlTable("repulse_exercises", {
	id: varchar("id", { length: 36 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	description: text("description").notNull(),
	type: mysqlEnum("type", ["strength", "cardio", "flexibility"]).notNull(),
	muscleGroupId: varchar("muscle_group_id", { length: 36 })
		.notNull()
		.references(() => repulseMuscleGroups.id, { onDelete: "cascade" }),
	...timestamps(),
});

export type RepulseExercises = typeof repulseExercises.$inferSelect;
export type NewRepulseExercises = typeof repulseExercises.$inferInsert;
