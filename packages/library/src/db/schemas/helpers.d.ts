export declare const timestamps: (customTimestamps?: Record<string, any>) => {
    createdAt: import("drizzle-orm").HasDefault<import("drizzle-orm/mysql-core").MySqlDateTimeBuilderInitial<"created_at">>;
    updatedAt: import("drizzle-orm").HasDefault<import("drizzle-orm").HasDefault<import("drizzle-orm/mysql-core").MySqlDateTimeBuilderInitial<"updated_at">>>;
    deletedAt: import("drizzle-orm/mysql-core").MySqlDateTimeBuilderInitial<"deleted_at">;
};
//# sourceMappingURL=helpers.d.ts.map