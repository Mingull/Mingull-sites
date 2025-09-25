import { mysqlTable, timestamp, varchar } from "drizzle-orm/mysql-core";
import { players } from "./players";
import { servers } from "./servers";

export const playerServer = mysqlTable("player_server", {
	id: varchar("id", { length: 36 }).primaryKey(),
	playerUuid: varchar("player_id", { length: 36 })
		.references(() => players.uuid, { onDelete: "cascade" })
		.notNull(),
	serverId: varchar("server_id", { length: 36 })
		.references(() => servers.id, { onDelete: "cascade" })
		.notNull(),
	firstSeen: timestamp("first_seen").defaultNow(),
	lastSeen: timestamp("last_seen").defaultNow().onUpdateNow(),
});

export type PlayerServer = typeof playerServer.$inferSelect;
export type NewPlayerServer = typeof playerServer.$inferInsert;
