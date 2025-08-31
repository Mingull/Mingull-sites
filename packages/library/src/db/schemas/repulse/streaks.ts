import { date, int, mysqlEnum, mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { timestamps } from "../helper.ts";
import { users } from "../users.ts";

export const repulseStreaks = mysqlTable("repulse_streaks", {
	id: varchar("id", { length: 36 }).primaryKey(),
	userId: varchar("user_id", { length: 36 }).references(() => users.id, { onDelete: "cascade" }),
	type: mysqlEnum("type", ["daily", "weekly", "monthly"]).notNull(),
	currentStreak: int("current_streak").notNull(),
	longestStreak: int("longest_streak").notNull(),
	lastWorkoutDate: date("last_workout_date").notNull(),
	...timestamps(),
});

export type RepulseStreak = typeof repulseStreaks.$inferSelect;
export type NewRepulseStreak = typeof repulseStreaks.$inferInsert;
