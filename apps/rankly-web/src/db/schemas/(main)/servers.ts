import { randomUUID } from "crypto";
import { boolean, check, int, json, mysqlTable, text, timestamp, unique, varchar } from "drizzle-orm/mysql-core";
import { timestamps } from "../helper";
import { users } from "../(auth)/users";
import { serverStatus } from "./server-status";
import { sql } from "drizzle-orm";
import { organizations } from "../(organization)/organizations";

export const servers = mysqlTable(
	"servers",
	{
		// --- Core identifiers ---
		id: varchar("id", { length: 36 })
			.$defaultFn(() => randomUUID())
			.primaryKey(),

		serverUuid: varchar("server_uuid", { length: 64 }), // OPTIONAL, unique per Minecraft server, only when used through plugin setup
		setupToken: varchar("setup_token", { length: 64 }), // OPTIONAL, used for initial setup, only when used through plugin setup

		// --- Ownership / access ---
		ownerId: varchar("owner_id", { length: 36 }).references(() => users.id, { onDelete: "cascade" }), // OPTIONAL, links server to account if user-managed
		organizationId: varchar("organization_id", { length: 36 }).references(() => organizations.id, { onDelete: "cascade" }), // OPTIONAL, links server to organization if org-managed

		// --- Server metadata (general info) ---
		name: varchar("name", { length: 255 }).notNull(), // REQUIRED, display name
		hostname: varchar("hostname", { length: 255 }), // OPTIONAL, DNS host
		ip: varchar("ip", { length: 45 }), // OPTIONAL, IP address
		port: int("port").default(25565), // OPTIONAL, default Minecraft port
		version: varchar("version", { length: 50 }), // OPTIONAL, Minecraft version
		plugins: json("plugins"), // OPTIONAL, JSON/text list of plugins
		playerCount: int("player_count").default(0), // OPTIONAL, live player count
		maxPlayers: int("max_players").default(0), // OPTIONAL, max slots

		// --- Visuals (for listings) ---
		bannerUrl: varchar("banner_url", { length: 2048 }), // OPTIONAL, wide banner image
		iconUrl: varchar("icon_url", { length: 2048 }), // OPTIONAL, square icon (favicon-style)
		motd: text("motd"), // OPTIONAL, server MOTD (rich text)

		// --- Dynamic status ---
		lifecycleStatus: int("lifecycle_status").references(() => serverStatus.id), // OPTIONAL, FK to server_status table (lifecycle type)
		runtimeStatus: int("runtime_status").references(() => serverStatus.id), // OPTIONAL, FK to server_status table (runtime type)
		// --- Tracking ---
		...timestamps({
			lastHeartbeat: timestamp("last_heartbeat").defaultNow().notNull(), // REQUIRED, heartbeat for "is online?"
		}),
	},
	(table) => [
		check(
			"ownership",
			sql`(${table.ownerId} IS NOT NULL AND ${table.organizationId} IS NULL) OR
    			(${table.ownerId} IS NULL AND ${table.organizationId} IS NOT NULL) OR
				(${table.ownerId} IS NULL AND ${table.organizationId} IS NULL)`,
		), // Ensures a server is either user-owned, org-owned, or unowned (for initial setup)
		unique("serverUuid_setupToken").on(table.serverUuid, table.setupToken), // UNIQUE when both serverUuid and setupToken are set (plugin setup)
	],
);

export type Server = typeof servers.$inferSelect;
export type NewServer = typeof servers.$inferInsert;
