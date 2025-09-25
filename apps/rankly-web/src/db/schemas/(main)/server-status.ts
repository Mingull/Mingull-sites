import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const serverStatus = mysqlTable("server_status", {
	id: int("id").primaryKey(),
	name: varchar("name", { length: 128 }).notNull().unique(),
});

export type ServerStatus = typeof serverStatus.$inferSelect;
export type NewServerStatus = typeof serverStatus.$inferInsert;
