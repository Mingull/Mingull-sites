import { mysqlEnum, mysqlTable, text, varchar } from "drizzle-orm/mysql-core";
import { timestamps } from "../helper.ts";

export const repulseMuscleGroups = mysqlTable("repulse_muscle_groups", {
	id: varchar("id", { length: 36 }).primaryKey(),
	name: varchar("name", { length: 255 }).notNull(),
	description: text("description").notNull(),
	...timestamps(),
});

export type RepulseMuscleGroup = typeof repulseMuscleGroups.$inferSelect;
export type NewRepulseMuscleGroup = typeof repulseMuscleGroups.$inferInsert;
