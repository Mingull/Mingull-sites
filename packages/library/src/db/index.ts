import { config } from "dotenv";
import { drizzle } from "drizzle-orm/mysql2";
import { createPool } from "mysql2/promise";
import * as schema from "./schemas/index.ts";

config({ path: "../../.env" });

const sql = createPool(process.env.DATABASE_URL!);

export const db = drizzle(sql, {
	mode: "planetscale",
	schema,
});

export { and, asc, count, desc, eq, inArray, like, notLike, or, sql, sum } from "drizzle-orm";

