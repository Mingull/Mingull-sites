import { datetime, mysqlTable, text, varchar } from "drizzle-orm/mysql-core";
import { timestamps } from "../helper";
import { users } from "./users";

export const accounts = mysqlTable("accounts", {
	id: varchar("id", { length: 36 }).primaryKey(),
	userId: varchar("user_id", { length: 36 })
		.notNull()
		.references(() => users.id, { onDelete: "cascade" }),
	accountId: text("account_id").notNull(),
	providerId: text("provider_id").notNull(),
	accessToken: text("access_token"),
	refreshToken: text("refresh_token"),
	idToken: text("id_token"),
	accessTokenExpiresAt: datetime("access_token_expires_at"),
	refreshTokenExpiresAt: datetime("refresh_token_expires_at"),
	scope: text("scope"),
	password: text("password"),
	metadata: text("metadata"),
	...timestamps(),
});
export type Account = typeof accounts.$inferSelect;
export type NewAccount = typeof accounts.$inferInsert;
