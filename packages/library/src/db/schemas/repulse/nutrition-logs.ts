import { date, int, mysqlTable, text, varchar } from "drizzle-orm/mysql-core";
import { timestamps } from "../helper.ts";
import { users } from "../users.ts";

export const repulseNutritionLogs = mysqlTable("repulse_nutrition_logs", {
	userId: varchar("user_id", { length: 36 }).references(() => users.id, { onDelete: "cascade" }),
	date: date("date").notNull(),
	calories: int("calories").notNull(),
	proteinGrams: int("protein_grams").notNull(),
	carbsGrams: int("carbs_grams").notNull(),
	fatsGrams: int("fats_grams").notNull(),
	notes: text("notes"),
	...timestamps(),
});

export type RepulseNutritionLog = typeof repulseNutritionLogs.$inferSelect;
export type NewRepulseNutritionLog = typeof repulseNutritionLogs.$inferInsert;

// nutrition_logs [icon: apple, color: green] {
//   id varchar(36) pk
//   user_id varchar(36) fk
//   date date
//   calories int
//   protein_grams int
//   carbs_grams int
//   fats_grams int
//   notes text
//   created_at datetime
//   updated_at datetime
// }
