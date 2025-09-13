import { mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { pastelimencyPastes } from "./pastes.ts";
import { pastelimencyTags } from "./tags.ts";

export const pastelimencyPasteTags = mysqlTable("pastelimency_paste_tags", {
	pasteId: varchar("paste_id", { length: 36 }).references(() => pastelimencyPastes.id, { onDelete: "cascade" }),
	tagId: varchar("tag_id", { length: 36 }).references(() => pastelimencyTags.id, { onDelete: "cascade" }),
});
