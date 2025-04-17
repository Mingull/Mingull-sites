import { sql } from "drizzle-orm";
import { datetime } from "drizzle-orm/mysql-core";

export const timestamps = (customTimestamps: Record<string, any> = {}) => ({
	...customTimestamps,
	createdAt: datetime("created_at").default(sql`CURRENT_TIMESTAMP`),
	updatedAt: datetime("updated_at")
		.default(sql`CURRENT_TIMESTAMP`)
		.$onUpdate(() => new Date()),
	deletedAt: datetime("deleted_at"),
});
