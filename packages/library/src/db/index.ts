import { config } from "dotenv";
import { drizzle } from "drizzle-orm/mysql2";
import { createPool } from "mysql2/promise";
import * as schema from "./schemas/index.js";
import * as authSchema from "./schemas/auth.js";
config({ path: "../../.env" });

const sql = createPool(process.env.DATABASE_URL!);

export const db = drizzle(sql, {
	mode: "planetscale",
});

export { eq, or, and, sum, count, sql, asc, desc, like, notLike } from "drizzle-orm";
