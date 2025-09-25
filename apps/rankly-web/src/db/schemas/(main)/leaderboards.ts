import { int, mysqlTable, tinyint, varchar } from "drizzle-orm/mysql-core";
import { servers } from "./servers";
import { timestamps } from "../helper";

export const leaderboards = mysqlTable("leaderboards", {
	id: int("id").primaryKey(),
	serverId: varchar("server_id", { length: 36 })
		.references(() => servers.id, { onDelete: "cascade" })
		.notNull(),
	title: varchar("title", { length: 255 }).notNull(),
	type: varchar("type", { length: 50 }).notNull(),
	public: tinyint("public").notNull().default(1),
	...timestamps(),
});

export type Leaderboard = typeof leaderboards.$inferSelect;
export type NewLeaderboard = typeof leaderboards.$inferInsert;
