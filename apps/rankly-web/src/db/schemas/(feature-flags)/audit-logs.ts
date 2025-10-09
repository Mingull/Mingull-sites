import { int, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";
import { featureFlags } from "./flags";

export const flagAuditLog = mysqlTable("flag_audit_log", {
	id: int("id").primaryKey().autoincrement(),
	FlagId: int("feature_flag_id")
		.notNull()
		.references(() => featureFlags.id, { onDelete: "cascade" }),
	action: varchar("action", { length: 64 }).notNull(), // "created" | "updated" | "enabled" | "disabled"
	actor: varchar("actor", { length: 128 }).notNull(),
	reason: text("reason"),
	createdAt: timestamp("created_at").defaultNow(),
});

export type FlagAuditLog = typeof flagAuditLog.$inferSelect;
export type NewFlagAuditLog = typeof flagAuditLog.$inferInsert;
