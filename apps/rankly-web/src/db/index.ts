import { config } from "dotenv";
import { drizzle } from "drizzle-orm/mysql2";
import { createPool } from "mysql2/promise";
import * as schema from "./schemas";

config({ path: "../../.env" });

const sql = createPool(process.env.RANKLY_DB_URL!);

export const db = drizzle(sql, {
	mode: "planetscale",
	schema,
});
