import { sql } from "drizzle-orm";
import { timestamp } from "drizzle-orm/mysql-core";

export type Timestamps<T extends Record<string, unknown>> = {
	createdAt?: boolean;
	updatedAt?: boolean;
	deletedAt?: boolean;
} & {
	[K in keyof T]: T[K];
};

export const timestamps = <T extends Record<string, unknown>>(timestamps?: Timestamps<T>) => {
	const { createdAt = true, deletedAt = true, updatedAt = true, ...custom } = timestamps ?? {};
	return {
		...custom,
		...(createdAt ?
			{
				createdAt: timestamp("created_at")
					.default(sql`CURRENT_TIMESTAMP`)
					.notNull(),
			}
		:	{}),
		...(updatedAt ?
			{
				updatedAt: timestamp("updated_at").$onUpdate(() => new Date()),
			}
		:	{}),
		...(deletedAt ? { deletedAt: timestamp("deleted_at") } : {}),
	};
};
