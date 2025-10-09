import { int, mysqlEnum, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const serverStatus = mysqlTable("server_status", {
	id: int("id").primaryKey().autoincrement(),
	name: varchar("name", { length: 128 }).notNull().unique(),
	descriptor: varchar("descriptor", { length: 255 }), // OPTIONAL, short description or details about this status
	type: mysqlEnum("type", ["lifecycle", "runtime"]).notNull(),
});

export type ServerStatus = typeof serverStatus.$inferSelect;
export type NewServerStatus = typeof serverStatus.$inferInsert;
