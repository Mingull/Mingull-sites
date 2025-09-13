import { mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";
import { timestamps } from "./helper.ts";

export const verifications = mysqlTable("verifications", {
	id: varchar("id", { length: 36 }).primaryKey(),
	identifier: text("identifier").notNull(),
	value: text("value").notNull(),
	...timestamps({ expiresAt: timestamp("expires_at").notNull() }),
});

export type Verification = typeof verifications.$inferSelect;
export type NewVerification = typeof verifications.$inferInsert;
