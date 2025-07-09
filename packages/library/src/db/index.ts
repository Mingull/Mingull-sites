import { config } from "dotenv";
import { drizzle } from "drizzle-orm/mysql2";
import { createPool } from "mysql2/promise";
config({ path: "../../.env" });

const sql = createPool(process.env.DATABASE_URL!);

export const db = drizzle(sql, {
	mode: "planetscale",
});

export { eq, or, and, sum, count, sql, asc, desc, like, notLike } from "drizzle-orm";
