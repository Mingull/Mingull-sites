import { boolean, datetime, json, mysqlEnum, mysqlTable, primaryKey, text, varchar } from "drizzle-orm/mysql-core";
import { preferences } from "./preferences.ts";
import { users } from "./users.ts";

export const userPreferences = mysqlTable(
	"user_preferences",
	{
		userId: varchar("user_id", { length: 36 })
			.notNull()
			.references(() => users.id, { onDelete: "cascade" }),
		preferenceId: varchar("preference_id", { length: 36 })
			.notNull()
			.references(() => preferences.id, { onDelete: "cascade" }),
		value: text("value").notNull(),
	},
	(table) => [primaryKey({ columns: [table.userId, table.preferenceId] })],
);
