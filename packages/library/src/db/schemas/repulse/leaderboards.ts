import { mysqlEnum, mysqlTable, primaryKey, int, varchar } from "drizzle-orm/mysql-core";
import { timestamps } from "../helper.ts";
import { users } from "../users.ts";

export const repulseLeaderboards = mysqlTable("repulse_leaderboards", {
	userId: varchar("user_id", { length: 36 }).references(() => users.id, { onDelete: "cascade" }),
	type: mysqlEnum("type", ["global", "friends"]).notNull(),
	score: int("score").notNull(),
	rank: int("rank").notNull(),
	...timestamps(),
});

export type RepulseLeaderboard = typeof repulseLeaderboards.$inferSelect;
export type NewRepulseLeaderboard = typeof repulseLeaderboards.$inferInsert;
