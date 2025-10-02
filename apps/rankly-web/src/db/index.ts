import { config } from "dotenv";
import { drizzle } from "drizzle-orm/mysql2";
import { createPool } from "mysql2/promise";
import {
	accounts,
	apikeys,
	invitations,
	leaderboards,
	members,
	organizationRoles,
	organizations,
	players,
	playerServer,
	playerStats,
	servers,
	serverStatus,
	sessions,
	users,
	verifications,
} from "./schemas";

const schema = { accounts, apikeys, sessions, users, verifications, leaderboards, playerServer, playerStats, players, serverStatus, servers, invitations, members, organizationRoles, organizations };

config({ path: "../../.env" });

const sql = createPool(process.env.RANKLY_DB_URL!);

export const db = drizzle(sql, {
	mode: "planetscale",
	schema,
});
