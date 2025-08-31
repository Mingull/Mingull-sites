import { decimal, int, mysqlEnum, mysqlTable, text, varchar } from "drizzle-orm/mysql-core";
import { timestamps } from "../helper.ts";
import { users } from "../users.ts";
import { repulseWorkouts } from "./workouts.ts";

export const repulseWorkoutSets = mysqlTable("repulse_workout_sets", {
	id: varchar("id", { length: 36 }).primaryKey(),
	workoutId: varchar("workout_id", { length: 36 })
		.notNull()
		.references(() => repulseWorkouts.id, { onDelete: "cascade" }),
	exerciseId: varchar("exercise_id", { length: 36 }).notNull(),
	set: int("set").notNull(),
	reps: int("reps").notNull(),
	weightKg: decimal("weight_kg", { precision: 5, scale: 2 }).notNull(),
	durationSeconds: int("duration_seconds").notNull(),
	notes: text("notes"),
	...timestamps(),
});

export type RepulseWorkoutSet = typeof repulseWorkoutSets.$inferSelect;
export type NewRepulseWorkoutSet = typeof repulseWorkoutSets.$inferInsert;
