import { mysqlTable, timestamp, varchar } from "drizzle-orm/mysql-core";
import { players } from "./players";
import { servers } from "./servers";
import { timestamps } from "../helper";

export const playerStats = mysqlTable("player_stats", {
	id: varchar("id", { length: 36 }).primaryKey(),
	playerId: varchar("player_id", { length: 36 })
		.references(() => players.uuid, { onDelete: "cascade" })
		.notNull(),
	serverId: varchar("server_id", { length: 36 })
		.references(() => servers.id, { onDelete: "cascade" })
		.notNull(),
	type: varchar("type", { length: 36 }).notNull(),
	value: varchar("value", { length: 36 }).notNull(),
	...timestamps(),
});

export type PlayerStats = typeof playerStats.$inferSelect;
export type NewPlayerStats = typeof playerStats.$inferInsert;
