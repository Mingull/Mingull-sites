import { randomUUID } from "crypto";
import { boolean, int, json, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";
import { timestamps } from "../helper";
import { users } from "../(auth)/users";
import { serverStatus } from "./server-status";

export const servers = mysqlTable("servers", {
	// --- Core identifiers ---
	id: varchar("id", { length: 36 })
		.$defaultFn(() => randomUUID())
		.primaryKey(),

	serverUuid: varchar("server_uuid", { length: 64 }).notNull().unique(), // REQUIRED, unique per Minecraft server
	setupToken: varchar("setup_token", { length: 64 }).notNull().unique(), // REQUIRED, used for initial setup

	// --- Ownership / access ---
	ownerId: varchar("owner_id", { length: 36 })
		.references(() => users.id, { onDelete: "cascade" })
		.notNull(), // REQUIRED, links server to account
	activated: boolean("activated").notNull().default(false), // REQUIRED, setup completion

	// --- Server metadata (general info) ---
	name: varchar("name", { length: 255 }).notNull(), // REQUIRED, display name
	hostname: varchar("hostname", { length: 255 }), // OPTIONAL, DNS host
	ip: varchar("ip", { length: 45 }), // OPTIONAL, IP address
	port: int("port").default(25565), // OPTIONAL, default Minecraft port
	version: varchar("version", { length: 50 }), // OPTIONAL, Minecraft version
	plugins: json("plugins"), // OPTIONAL, JSON/text list of plugins

	// --- Visuals (for listings) ---
	bannerUrl: varchar("banner_url", { length: 2048 }), // OPTIONAL, wide banner image
	iconUrl: varchar("icon_url", { length: 2048 }), // OPTIONAL, square icon (favicon-style)
	motd: text("motd"), // OPTIONAL, server MOTD (rich text)

	// --- Dynamic status ---
	status: int("status")
		.references(() => serverStatus.id)
		.notNull(), // REQUIRED, FK to server_status table
	playerCount: int("player_count").default(0), // OPTIONAL, live player count
	maxPlayers: int("max_players").default(0), // OPTIONAL, max slots

	// --- Tracking ---
	...timestamps({
		lastHeartbeat: timestamp("last_heartbeat"), // REQUIRED, heartbeat for "is online?"
	}),
});

export type Server = typeof servers.$inferSelect;
export type NewServer = typeof servers.$inferInsert;
