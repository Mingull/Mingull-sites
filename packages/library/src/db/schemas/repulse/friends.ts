import { mysqlEnum, mysqlTable, primaryKey, text, varchar } from "drizzle-orm/mysql-core";
import { timestamps } from "../helper.ts";
import { users } from "../users.ts";

export const repulseFriends = mysqlTable(
	"repulse_friends",
	{
		userId: varchar("user_id", { length: 36 }).references(() => users.id, { onDelete: "cascade" }),
		friendId: varchar("friend_id", { length: 36 }).references(() => users.id, { onDelete: "cascade" }),
		status: mysqlEnum("status", ["pending", "accepted", "blocked"]).notNull(),
		...timestamps(),
	},
	(table) => [primaryKey({ columns: [table.userId, table.friendId] })],
);

export type RepulseFriend = typeof repulseFriends.$inferSelect;
export type NewRepulseFriend = typeof repulseFriends.$inferInsert;
