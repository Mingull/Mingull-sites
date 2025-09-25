import { mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { users } from "../(auth)/users";

export const players = mysqlTable("players", {
	uuid: varchar("uuid", { length: 36 }).primaryKey(), // Minecraft UUID
	username: varchar("username", { length: 32 }).unique().notNull(),
	linkedUserId: varchar("linked_user_id", { length: 36 }).references(() => users.id, { onDelete: "set null" }), // optional
});

export type Player = typeof players.$inferSelect;
export type NewPlayer = typeof players.$inferInsert;
