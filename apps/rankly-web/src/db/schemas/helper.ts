import { timestamp } from "drizzle-orm/mysql-core";

export type Timestamps<T extends Record<string, unknown>> = {
	[K in keyof T]: T[K];
};

export const timestamps = <T extends Record<string, unknown>>(timestamps?: Timestamps<T>) => {
	return {
		...timestamps,
		createdAt: timestamp("created_at").defaultNow().notNull(),
		updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
		deletedAt: timestamp("deleted_at"),
	};
};
