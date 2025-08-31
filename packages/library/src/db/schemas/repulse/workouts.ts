import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";
import { timestamps } from "../helper.ts";
import { users } from "../users.ts";

export const repulseWorkouts = mysqlTable("repulse_workouts", {
	id: varchar("id", { length: 36 }).primaryKey(),
	userId: varchar("user_id", { length: 36 }).references(() => users.id, { onDelete: "cascade" }),
	title: varchar("title", { length: 255 }).notNull(),
	description: text("description"),
	date: timestamp("date").notNull(),
	duration: int("duration").notNull(),
	mood: mysqlEnum("mood", ["great", "good", "okay", "bad"]).notNull(),
	...timestamps(),
});

export type RepulseWorkouts = typeof repulseWorkouts.$inferSelect;
export type NewRepulseWorkouts = typeof repulseWorkouts.$inferInsert;
