export declare const authClient: {
    admin: {
        listUsers: <FetchOptions extends {
            mode?: RequestMode | undefined;
            cache?: RequestCache | undefined;
            method?: string | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            credentials?: RequestCredentials | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: import("better-auth/client").RequestContext<T>) => Promise<import("better-auth/client").RequestContext | void> | import("better-auth/client").RequestContext | void) | undefined;
            onResponse?: ((context: import("better-auth/client").ResponseContext) => Promise<Response | void | import("better-auth/client").ResponseContext> | Response | import("better-auth/client").ResponseContext | void) | undefined;
            onSuccess?: ((context: import("better-auth/client").SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: import("better-auth/client").ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: import("better-auth/client").ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: import("better-auth/client").FetchEsque | undefined;
            plugins?: import("better-auth/client").BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: undefined;
            query?: (Partial<{
                searchValue?: string | undefined;
                searchField?: "name" | "email" | undefined;
                searchOperator?: "contains" | "starts_with" | "ends_with" | undefined;
                limit?: string | number | undefined;
                offset?: string | number | undefined;
                sortBy?: string | undefined;
                sortDirection?: "asc" | "desc" | undefined;
                filterField?: string | undefined;
                filterValue?: string | number | boolean | undefined;
                filterOperator?: "eq" | "ne" | "lt" | "lte" | "gt" | "gte" | undefined;
            }> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: import("better-auth/client").RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (import("better-auth/client").StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: import("better-auth/client").StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: import("better-auth").Prettify<{
            query: {
                searchValue?: string | undefined;
                searchField?: "name" | "email" | undefined;
                searchOperator?: "contains" | "starts_with" | "ends_with" | undefined;
                limit?: string | number | undefined;
                offset?: string | number | undefined;
                sortBy?: string | undefined;
                sortDirection?: "asc" | "desc" | undefined;
                filterField?: string | undefined;
                filterValue?: string | number | boolean | undefined;
                filterOperator?: "eq" | "ne" | "lt" | "lte" | "gt" | "gte" | undefined;
            };
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<import("better-auth/client").BetterFetchResponse<NonNullable<{
            users: import("better-auth/plugins").UserWithRole[];
            total: number;
            limit: number | undefined;
            offset: number | undefined;
        } | {
            users: never[];
            total: number;
        }>, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    admin: {
        listUserSessions: <FetchOptions extends {
            mode?: RequestMode | undefined;
            cache?: RequestCache | undefined;
            method?: string | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            credentials?: RequestCredentials | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: import("better-auth/client").RequestContext<T>) => Promise<import("better-auth/client").RequestContext | void> | import("better-auth/client").RequestContext | void) | undefined;
            onResponse?: ((context: import("better-auth/client").ResponseContext) => Promise<Response | void | import("better-auth/client").ResponseContext> | Response | import("better-auth/client").ResponseContext | void) | undefined;
            onSuccess?: ((context: import("better-auth/client").SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: import("better-auth/client").ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: import("better-auth/client").ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: import("better-auth/client").FetchEsque | undefined;
            plugins?: import("better-auth/client").BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                userId: string;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: import("better-auth/client").RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (import("better-auth/client").StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: import("better-auth/client").StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: import("better-auth").Prettify<{
            userId: string;
        } & {
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<import("better-auth/client").BetterFetchResponse<{
            sessions: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                expiresAt: Date;
                token: string;
                ipAddress?: string | null | undefined;
                userAgent?: string | null | undefined;
            }[];
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    admin: {
        unbanUser: <FetchOptions extends {
            mode?: RequestMode | undefined;
            cache?: RequestCache | undefined;
            method?: string | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            credentials?: RequestCredentials | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: import("better-auth/client").RequestContext<T>) => Promise<import("better-auth/client").RequestContext | void> | import("better-auth/client").RequestContext | void) | undefined;
            onResponse?: ((context: import("better-auth/client").ResponseContext) => Promise<Response | void | import("better-auth/client").ResponseContext> | Response | import("better-auth/client").ResponseContext | void) | undefined;
            onSuccess?: ((context: import("better-auth/client").SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: import("better-auth/client").ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: import("better-auth/client").ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: import("better-auth/client").FetchEsque | undefined;
            plugins?: import("better-auth/client").BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                userId: string;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: import("better-auth/client").RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (import("better-auth/client").StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: import("better-auth/client").StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: import("better-auth").Prettify<{
            userId: string;
        } & {
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<import("better-auth/client").BetterFetchResponse<{
            user: any;
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    admin: {
        banUser: <FetchOptions extends {
            mode?: RequestMode | undefined;
            cache?: RequestCache | undefined;
            method?: string | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            credentials?: RequestCredentials | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: import("better-auth/client").RequestContext<T>) => Promise<import("better-auth/client").RequestContext | void> | import("better-auth/client").RequestContext | void) | undefined;
            onResponse?: ((context: import("better-auth/client").ResponseContext) => Promise<Response | void | import("better-auth/client").ResponseContext> | Response | import("better-auth/client").ResponseContext | void) | undefined;
            onSuccess?: ((context: import("better-auth/client").SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: import("better-auth/client").ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: import("better-auth/client").ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: import("better-auth/client").FetchEsque | undefined;
            plugins?: import("better-auth/client").BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                userId: string;
                banReason?: string | undefined;
                banExpiresIn?: number | undefined;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: import("better-auth/client").RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (import("better-auth/client").StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: import("better-auth/client").StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: import("better-auth").Prettify<{
            userId: string;
            banReason?: string | undefined;
            banExpiresIn?: number | undefined;
        } & {
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<import("better-auth/client").BetterFetchResponse<{
            user: any;
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    admin: {
        impersonateUser: <FetchOptions extends {
            mode?: RequestMode | undefined;
            cache?: RequestCache | undefined;
            method?: string | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            credentials?: RequestCredentials | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: import("better-auth/client").RequestContext<T>) => Promise<import("better-auth/client").RequestContext | void> | import("better-auth/client").RequestContext | void) | undefined;
            onResponse?: ((context: import("better-auth/client").ResponseContext) => Promise<Response | void | import("better-auth/client").ResponseContext> | Response | import("better-auth/client").ResponseContext | void) | undefined;
            onSuccess?: ((context: import("better-auth/client").SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: import("better-auth/client").ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: import("better-auth/client").ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: import("better-auth/client").FetchEsque | undefined;
            plugins?: import("better-auth/client").BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                userId: string;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: import("better-auth/client").RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (import("better-auth/client").StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: import("better-auth/client").StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: import("better-auth").Prettify<{
            userId: string;
        } & {
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<import("better-auth/client").BetterFetchResponse<{
            session: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                expiresAt: Date;
                token: string;
                ipAddress?: string | null | undefined;
                userAgent?: string | null | undefined;
            };
            user: {
                id: string;
                name: string;
                email: string;
                emailVerified: boolean;
                createdAt: Date;
                updatedAt: Date;
                image?: string | null | undefined;
            };
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    admin: {
        stopImpersonating: <FetchOptions extends {
            mode?: RequestMode | undefined;
            cache?: RequestCache | undefined;
            method?: string | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            credentials?: RequestCredentials | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: import("better-auth/client").RequestContext<T>) => Promise<import("better-auth/client").RequestContext | void> | import("better-auth/client").RequestContext | void) | undefined;
            onResponse?: ((context: import("better-auth/client").ResponseContext) => Promise<Response | void | import("better-auth/client").ResponseContext> | Response | import("better-auth/client").ResponseContext | void) | undefined;
            onSuccess?: ((context: import("better-auth/client").SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: import("better-auth/client").ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: import("better-auth/client").ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: import("better-auth/client").FetchEsque | undefined;
            plugins?: import("better-auth/client").BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: import("better-auth/client").RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (import("better-auth/client").StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: import("better-auth/client").StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0?: import("better-auth").Prettify<{
            query?: Record<string, any> | undefined;
            fetchOptions?: FetchOptions | undefined;
        }> | undefined, data_1?: FetchOptions | undefined) => Promise<import("better-auth/client").BetterFetchResponse<{
            session: import("better-auth").Session & Record<string, any>;
            user: import("better-auth").User & Record<string, any>;
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    admin: {
        revokeUserSession: <FetchOptions extends {
            mode?: RequestMode | undefined;
            cache?: RequestCache | undefined;
            method?: string | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            credentials?: RequestCredentials | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: import("better-auth/client").RequestContext<T>) => Promise<import("better-auth/client").RequestContext | void> | import("better-auth/client").RequestContext | void) | undefined;
            onResponse?: ((context: import("better-auth/client").ResponseContext) => Promise<Response | void | import("better-auth/client").ResponseContext> | Response | import("better-auth/client").ResponseContext | void) | undefined;
            onSuccess?: ((context: import("better-auth/client").SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: import("better-auth/client").ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: import("better-auth/client").ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: import("better-auth/client").FetchEsque | undefined;
            plugins?: import("better-auth/client").BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                sessionToken: string;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: import("better-auth/client").RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (import("better-auth/client").StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: import("better-auth/client").StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: import("better-auth").Prettify<{
            sessionToken: string;
        } & {
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<import("better-auth/client").BetterFetchResponse<{
            success: boolean;
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    admin: {
        revokeUserSessions: <FetchOptions extends {
            mode?: RequestMode | undefined;
            cache?: RequestCache | undefined;
            method?: string | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            credentials?: RequestCredentials | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: import("better-auth/client").RequestContext<T>) => Promise<import("better-auth/client").RequestContext | void> | import("better-auth/client").RequestContext | void) | undefined;
            onResponse?: ((context: import("better-auth/client").ResponseContext) => Promise<Response | void | import("better-auth/client").ResponseContext> | Response | import("better-auth/client").ResponseContext | void) | undefined;
            onSuccess?: ((context: import("better-auth/client").SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: import("better-auth/client").ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: import("better-auth/client").ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: import("better-auth/client").FetchEsque | undefined;
            plugins?: import("better-auth/client").BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                userId: string;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: import("better-auth/client").RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (import("better-auth/client").StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: import("better-auth/client").StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: import("better-auth").Prettify<{
            userId: string;
        } & {
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<import("better-auth/client").BetterFetchResponse<{
            success: boolean;
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    admin: {
        removeUser: <FetchOptions extends {
            mode?: RequestMode | undefined;
            cache?: RequestCache | undefined;
            method?: string | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            credentials?: RequestCredentials | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: import("better-auth/client").RequestContext<T>) => Promise<import("better-auth/client").RequestContext | void> | import("better-auth/client").RequestContext | void) | undefined;
            onResponse?: ((context: import("better-auth/client").ResponseContext) => Promise<Response | void | import("better-auth/client").ResponseContext> | Response | import("better-auth/client").ResponseContext | void) | undefined;
            onSuccess?: ((context: import("better-auth/client").SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: import("better-auth/client").ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: import("better-auth/client").ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: import("better-auth/client").FetchEsque | undefined;
            plugins?: import("better-auth/client").BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                userId: string;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: import("better-auth/client").RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (import("better-auth/client").StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: import("better-auth/client").StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: import("better-auth").Prettify<{
            userId: string;
        } & {
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<import("better-auth/client").BetterFetchResponse<{
            success: boolean;
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    admin: {
        setUserPassword: <FetchOptions extends {
            mode?: RequestMode | undefined;
            cache?: RequestCache | undefined;
            method?: string | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            credentials?: RequestCredentials | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: import("better-auth/client").RequestContext<T>) => Promise<import("better-auth/client").RequestContext | void> | import("better-auth/client").RequestContext | void) | undefined;
            onResponse?: ((context: import("better-auth/client").ResponseContext) => Promise<Response | void | import("better-auth/client").ResponseContext> | Response | import("better-auth/client").ResponseContext | void) | undefined;
            onSuccess?: ((context: import("better-auth/client").SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: import("better-auth/client").ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: import("better-auth/client").ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: import("better-auth/client").FetchEsque | undefined;
            plugins?: import("better-auth/client").BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                userId: string;
                newPassword: string;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: import("better-auth/client").RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (import("better-auth/client").StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: import("better-auth/client").StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: import("better-auth").Prettify<{
            userId: string;
            newPassword: string;
        } & {
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<import("better-auth/client").BetterFetchResponse<{
            status: boolean;
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    apiKey: {
        create: <FetchOptions extends {
            mode?: RequestMode | undefined;
            cache?: RequestCache | undefined;
            method?: string | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            credentials?: RequestCredentials | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: import("better-auth/client").RequestContext<T>) => Promise<import("better-auth/client").RequestContext | void> | import("better-auth/client").RequestContext | void) | undefined;
            onResponse?: ((context: import("better-auth/client").ResponseContext) => Promise<Response | void | import("better-auth/client").ResponseContext> | Response | import("better-auth/client").ResponseContext | void) | undefined;
            onSuccess?: ((context: import("better-auth/client").SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: import("better-auth/client").ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: import("better-auth/client").ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: import("better-auth/client").FetchEsque | undefined;
            plugins?: import("better-auth/client").BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                metadata?: any;
                name?: string | undefined;
                userId?: string | undefined;
                prefix?: string | undefined;
                expiresIn?: number | null | undefined;
                permissions?: Record<string, string[]> | undefined;
                rateLimitMax?: number | undefined;
                refillInterval?: number | undefined;
                refillAmount?: number | undefined;
                rateLimitEnabled?: boolean | undefined;
                rateLimitTimeWindow?: number | undefined;
                remaining?: number | null | undefined;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: import("better-auth/client").RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (import("better-auth/client").StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: import("better-auth/client").StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0?: import("better-auth").Prettify<{
            metadata?: any;
            name?: string | undefined;
            userId?: string | undefined;
            prefix?: string | undefined;
            expiresIn?: number | null | undefined;
            permissions?: Record<string, string[]> | undefined;
            rateLimitMax?: number | undefined;
            refillInterval?: number | undefined;
            refillAmount?: number | undefined;
            rateLimitEnabled?: boolean | undefined;
            rateLimitTimeWindow?: number | undefined;
            remaining?: number | null | undefined;
        } & {
            fetchOptions?: FetchOptions | undefined;
        }> | undefined, data_1?: FetchOptions | undefined) => Promise<import("better-auth/client").BetterFetchResponse<{
            key: string;
            metadata: any;
            permissions: any;
            id: string;
            name: string | null;
            start: string | null;
            prefix: string | null;
            userId: string;
            refillInterval: number | null;
            refillAmount: number | null;
            lastRefillAt: Date | null;
            enabled: boolean;
            rateLimitEnabled: boolean;
            rateLimitTimeWindow: number | null;
            rateLimitMax: number | null;
            requestCount: number;
            remaining: number | null;
            lastRequest: Date | null;
            expiresAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    apiKey: {
        get: <FetchOptions extends {
            mode?: RequestMode | undefined;
            cache?: RequestCache | undefined;
            method?: string | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            credentials?: RequestCredentials | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: import("better-auth/client").RequestContext<T>) => Promise<import("better-auth/client").RequestContext | void> | import("better-auth/client").RequestContext | void) | undefined;
            onResponse?: ((context: import("better-auth/client").ResponseContext) => Promise<Response | void | import("better-auth/client").ResponseContext> | Response | import("better-auth/client").ResponseContext | void) | undefined;
            onSuccess?: ((context: import("better-auth/client").SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: import("better-auth/client").ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: import("better-auth/client").ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: import("better-auth/client").FetchEsque | undefined;
            plugins?: import("better-auth/client").BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: undefined;
            query?: (Partial<{
                id: string;
            }> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: import("better-auth/client").RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (import("better-auth/client").StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: import("better-auth/client").StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: import("better-auth").Prettify<{
            query: {
                id: string;
            };
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<import("better-auth/client").BetterFetchResponse<{
            permissions: {
                [key: string]: string[];
            } | null;
            id: string;
            name: string | null;
            start: string | null;
            prefix: string | null;
            userId: string;
            refillInterval: number | null;
            refillAmount: number | null;
            lastRefillAt: Date | null;
            enabled: boolean;
            rateLimitEnabled: boolean;
            rateLimitTimeWindow: number | null;
            rateLimitMax: number | null;
            requestCount: number;
            remaining: number | null;
            lastRequest: Date | null;
            expiresAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            metadata: Record<string, any> | null;
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    apiKey: {
        update: <FetchOptions extends {
            mode?: RequestMode | undefined;
            cache?: RequestCache | undefined;
            method?: string | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            credentials?: RequestCredentials | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: import("better-auth/client").RequestContext<T>) => Promise<import("better-auth/client").RequestContext | void> | import("better-auth/client").RequestContext | void) | undefined;
            onResponse?: ((context: import("better-auth/client").ResponseContext) => Promise<Response | void | import("better-auth/client").ResponseContext> | Response | import("better-auth/client").ResponseContext | void) | undefined;
            onSuccess?: ((context: import("better-auth/client").SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: import("better-auth/client").ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: import("better-auth/client").ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: import("better-auth/client").FetchEsque | undefined;
            plugins?: import("better-auth/client").BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                keyId: string;
                metadata?: any;
                name?: string | undefined;
                userId?: string | undefined;
                enabled?: boolean | undefined;
                expiresIn?: number | null | undefined;
                permissions?: Record<string, string[]> | null | undefined;
                rateLimitMax?: number | undefined;
                refillInterval?: number | undefined;
                refillAmount?: number | undefined;
                rateLimitEnabled?: boolean | undefined;
                rateLimitTimeWindow?: number | undefined;
                remaining?: number | undefined;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: import("better-auth/client").RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (import("better-auth/client").StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: import("better-auth/client").StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: import("better-auth").Prettify<{
            keyId: string;
            metadata?: any;
            name?: string | undefined;
            userId?: string | undefined;
            enabled?: boolean | undefined;
            expiresIn?: number | null | undefined;
            permissions?: Record<string, string[]> | null | undefined;
            rateLimitMax?: number | undefined;
            refillInterval?: number | undefined;
            refillAmount?: number | undefined;
            rateLimitEnabled?: boolean | undefined;
            rateLimitTimeWindow?: number | undefined;
            remaining?: number | undefined;
        } & {
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<import("better-auth/client").BetterFetchResponse<{
            permissions: {
                [key: string]: string[];
            } | null;
            id: string;
            name: string | null;
            start: string | null;
            prefix: string | null;
            userId: string;
            refillInterval: number | null;
            refillAmount: number | null;
            lastRefillAt: Date | null;
            enabled: boolean;
            rateLimitEnabled: boolean;
            rateLimitTimeWindow: number | null;
            rateLimitMax: number | null;
            requestCount: number;
            remaining: number | null;
            lastRequest: Date | null;
            expiresAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            metadata: Record<string, any> | null;
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    apiKey: {
        delete: <FetchOptions extends {
            mode?: RequestMode | undefined;
            cache?: RequestCache | undefined;
            method?: string | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            credentials?: RequestCredentials | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: import("better-auth/client").RequestContext<T>) => Promise<import("better-auth/client").RequestContext | void> | import("better-auth/client").RequestContext | void) | undefined;
            onResponse?: ((context: import("better-auth/client").ResponseContext) => Promise<Response | void | import("better-auth/client").ResponseContext> | Response | import("better-auth/client").ResponseContext | void) | undefined;
            onSuccess?: ((context: import("better-auth/client").SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: import("better-auth/client").ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: import("better-auth/client").ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: import("better-auth/client").FetchEsque | undefined;
            plugins?: import("better-auth/client").BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                keyId: string;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: import("better-auth/client").RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (import("better-auth/client").StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: import("better-auth/client").StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: import("better-auth").Prettify<{
            keyId: string;
        } & {
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<import("better-auth/client").BetterFetchResponse<{
            success: boolean;
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    apiKey: {
        list: <FetchOptions extends {
            mode?: RequestMode | undefined;
            cache?: RequestCache | undefined;
            method?: string | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            credentials?: RequestCredentials | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: import("better-auth/client").RequestContext<T>) => Promise<import("better-auth/client").RequestContext | void> | import("better-auth/client").RequestContext | void) | undefined;
            onResponse?: ((context: import("better-auth/client").ResponseContext) => Promise<Response | void | import("better-auth/client").ResponseContext> | Response | import("better-auth/client").ResponseContext | void) | undefined;
            onSuccess?: ((context: import("better-auth/client").SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: import("better-auth/client").ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: import("better-auth/client").ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: import("better-auth/client").FetchEsque | undefined;
            plugins?: import("better-auth/client").BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: import("better-auth/client").RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (import("better-auth/client").StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: import("better-auth/client").StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0?: import("better-auth").Prettify<{
            query?: Record<string, any> | undefined;
            fetchOptions?: FetchOptions | undefined;
        }> | undefined, data_1?: FetchOptions | undefined) => Promise<import("better-auth/client").BetterFetchResponse<{
            permissions: {
                [key: string]: string[];
            } | null;
            id: string;
            name: string | null;
            start: string | null;
            prefix: string | null;
            userId: string;
            refillInterval: number | null;
            refillAmount: number | null;
            lastRefillAt: Date | null;
            enabled: boolean;
            rateLimitEnabled: boolean;
            rateLimitTimeWindow: number | null;
            rateLimitMax: number | null;
            requestCount: number;
            remaining: number | null;
            lastRequest: Date | null;
            expiresAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            metadata: Record<string, any> | null;
        }[], {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    signIn: {
        username: <FetchOptions extends {
            mode?: RequestMode | undefined;
            cache?: RequestCache | undefined;
            method?: string | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            credentials?: RequestCredentials | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: import("better-auth/client").RequestContext<T>) => Promise<import("better-auth/client").RequestContext | void> | import("better-auth/client").RequestContext | void) | undefined;
            onResponse?: ((context: import("better-auth/client").ResponseContext) => Promise<Response | void | import("better-auth/client").ResponseContext> | Response | import("better-auth/client").ResponseContext | void) | undefined;
            onSuccess?: ((context: import("better-auth/client").SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: import("better-auth/client").ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: import("better-auth/client").ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: import("better-auth/client").FetchEsque | undefined;
            plugins?: import("better-auth/client").BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                password: string;
                username: string;
                rememberMe?: boolean | undefined;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: import("better-auth/client").RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (import("better-auth/client").StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: import("better-auth/client").StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: import("better-auth").Prettify<{
            password: string;
            username: string;
            rememberMe?: boolean | undefined;
        } & {
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<import("better-auth/client").BetterFetchResponse<{
            token: string;
            user: {
                id: string;
                email: string;
                emailVerified: boolean;
                username: string;
                name: string;
                image: string | null | undefined;
                createdAt: Date;
                updatedAt: Date;
            };
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    admin: {
        setRole: <FetchOptions extends {
            mode?: RequestMode | undefined;
            cache?: RequestCache | undefined;
            method?: string | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            credentials?: RequestCredentials | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: import("better-auth/client").RequestContext<T>) => Promise<import("better-auth/client").RequestContext | void> | import("better-auth/client").RequestContext | void) | undefined;
            onResponse?: ((context: import("better-auth/client").ResponseContext) => Promise<Response | void | import("better-auth/client").ResponseContext> | Response | import("better-auth/client").ResponseContext | void) | undefined;
            onSuccess?: ((context: import("better-auth/client").SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: import("better-auth/client").ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: import("better-auth/client").ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: import("better-auth/client").FetchEsque | undefined;
            plugins?: import("better-auth/client").BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                userId: string;
                role: "user" | "admin" | ("user" | "admin")[];
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: import("better-auth/client").RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (import("better-auth/client").StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: import("better-auth/client").StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: import("better-auth").Prettify<{
            userId: string;
            role: "user" | "admin" | ("user" | "admin")[];
        } & {
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<import("better-auth/client").BetterFetchResponse<{
            user: import("better-auth/plugins").UserWithRole;
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    admin: {
        createUser: <FetchOptions extends {
            mode?: RequestMode | undefined;
            cache?: RequestCache | undefined;
            method?: string | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            credentials?: RequestCredentials | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: import("better-auth/client").RequestContext<T>) => Promise<import("better-auth/client").RequestContext | void> | import("better-auth/client").RequestContext | void) | undefined;
            onResponse?: ((context: import("better-auth/client").ResponseContext) => Promise<Response | void | import("better-auth/client").ResponseContext> | Response | import("better-auth/client").ResponseContext | void) | undefined;
            onSuccess?: ((context: import("better-auth/client").SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: import("better-auth/client").ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: import("better-auth/client").ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: import("better-auth/client").FetchEsque | undefined;
            plugins?: import("better-auth/client").BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                email: string;
                password: string;
                name: string;
                role?: "user" | "admin" | ("user" | "admin")[] | undefined;
                data?: Record<string, any>;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: import("better-auth/client").RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (import("better-auth/client").StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: import("better-auth/client").StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: import("better-auth").Prettify<{
            email: string;
            password: string;
            name: string;
            role?: "user" | "admin" | ("user" | "admin")[] | undefined;
            data?: Record<string, any>;
        } & {
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<import("better-auth/client").BetterFetchResponse<{
            user: import("better-auth/plugins").UserWithRole;
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    admin: {
        hasPermission: <FetchOptions extends {
            mode?: RequestMode | undefined;
            cache?: RequestCache | undefined;
            method?: string | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            credentials?: RequestCredentials | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: import("better-auth/client").RequestContext<T>) => Promise<import("better-auth/client").RequestContext | void> | import("better-auth/client").RequestContext | void) | undefined;
            onResponse?: ((context: import("better-auth/client").ResponseContext) => Promise<Response | void | import("better-auth/client").ResponseContext> | Response | import("better-auth/client").ResponseContext | void) | undefined;
            onSuccess?: ((context: import("better-auth/client").SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: import("better-auth/client").ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: import("better-auth/client").ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: import("better-auth/client").FetchEsque | undefined;
            plugins?: import("better-auth/client").BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<({
                permission: {
                    readonly user?: ("list" | "create" | "set-role" | "ban" | "impersonate" | "delete" | "set-password")[] | undefined;
                    readonly session?: ("list" | "delete" | "revoke")[] | undefined;
                };
                permissions?: never;
            } | {
                permissions: {
                    readonly user?: ("list" | "create" | "set-role" | "ban" | "impersonate" | "delete" | "set-password")[] | undefined;
                    readonly session?: ("list" | "delete" | "revoke")[] | undefined;
                };
                permission?: never;
            }) & {
                userId?: string;
                role?: "user" | "admin" | undefined;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: import("better-auth/client").RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (import("better-auth/client").StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: import("better-auth/client").StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: import("better-auth").Prettify<(({
            permission: {
                readonly user?: ("list" | "create" | "set-role" | "ban" | "impersonate" | "delete" | "set-password")[] | undefined;
                readonly session?: ("list" | "delete" | "revoke")[] | undefined;
            };
            permissions?: never;
        } | {
            permissions: {
                readonly user?: ("list" | "create" | "set-role" | "ban" | "impersonate" | "delete" | "set-password")[] | undefined;
                readonly session?: ("list" | "delete" | "revoke")[] | undefined;
            };
            permission?: never;
        }) & {
            userId?: string;
            role?: "user" | "admin" | undefined;
        }) & {
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<import("better-auth/client").BetterFetchResponse<{
            error: null;
            success: boolean;
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    signIn: {
        social: <FetchOptions extends {
            mode?: RequestMode | undefined;
            cache?: RequestCache | undefined;
            method?: string | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            credentials?: RequestCredentials | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: import("better-auth/client").RequestContext<T>) => Promise<import("better-auth/client").RequestContext | void> | import("better-auth/client").RequestContext | void) | undefined;
            onResponse?: ((context: import("better-auth/client").ResponseContext) => Promise<Response | void | import("better-auth/client").ResponseContext> | Response | import("better-auth/client").ResponseContext | void) | undefined;
            onSuccess?: ((context: import("better-auth/client").SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: import("better-auth/client").ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: import("better-auth/client").ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: import("better-auth/client").FetchEsque | undefined;
            plugins?: import("better-auth/client").BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                provider: "apple" | "discord" | "facebook" | "github" | "google" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "kick" | "zoom";
                scopes?: string[] | undefined;
                loginHint?: string | undefined;
                idToken?: {
                    token: string;
                    refreshToken?: string | undefined;
                    accessToken?: string | undefined;
                    expiresAt?: number | undefined;
                    nonce?: string | undefined;
                } | undefined;
                callbackURL?: string | undefined;
                requestSignUp?: boolean | undefined;
                errorCallbackURL?: string | undefined;
                newUserCallbackURL?: string | undefined;
                disableRedirect?: boolean | undefined;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: import("better-auth/client").RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (import("better-auth/client").StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: import("better-auth/client").StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: import("better-auth").Prettify<{
            provider: "apple" | "discord" | "facebook" | "github" | "google" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "kick" | "zoom";
            scopes?: string[] | undefined;
            loginHint?: string | undefined;
            idToken?: {
                token: string;
                refreshToken?: string | undefined;
                accessToken?: string | undefined;
                expiresAt?: number | undefined;
                nonce?: string | undefined;
            } | undefined;
            callbackURL?: string | undefined;
            requestSignUp?: boolean | undefined;
            errorCallbackURL?: string | undefined;
            newUserCallbackURL?: string | undefined;
            disableRedirect?: boolean | undefined;
        } & {
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<import("better-auth/client").BetterFetchResponse<NonNullable<{
            redirect: boolean;
            token: string;
            url: undefined;
            user: {
                id: string;
                email: string;
                name: string;
                image: string | null | undefined;
                emailVerified: boolean;
                createdAt: Date;
                updatedAt: Date;
            };
        } | {
            url: string;
            redirect: boolean;
        }>, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    getSession: <FetchOptions extends {
        mode?: RequestMode | undefined;
        cache?: RequestCache | undefined;
        method?: string | undefined;
        headers?: (HeadersInit & (HeadersInit | {
            accept: "application/json" | "text/plain" | "application/octet-stream";
            "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
            authorization: "Bearer" | "Basic";
        })) | undefined;
        credentials?: RequestCredentials | undefined;
        integrity?: string | undefined;
        keepalive?: boolean | undefined;
        priority?: RequestPriority | undefined;
        redirect?: RequestRedirect | undefined;
        referrer?: string | undefined;
        referrerPolicy?: ReferrerPolicy | undefined;
        signal?: (AbortSignal | null) | undefined;
        window?: null | undefined;
        onRequest?: (<T extends Record<string, any>>(context: import("better-auth/client").RequestContext<T>) => Promise<import("better-auth/client").RequestContext | void> | import("better-auth/client").RequestContext | void) | undefined;
        onResponse?: ((context: import("better-auth/client").ResponseContext) => Promise<Response | void | import("better-auth/client").ResponseContext> | Response | import("better-auth/client").ResponseContext | void) | undefined;
        onSuccess?: ((context: import("better-auth/client").SuccessContext<any>) => Promise<void> | void) | undefined;
        onError?: ((context: import("better-auth/client").ErrorContext) => Promise<void> | void) | undefined;
        onRetry?: ((response: import("better-auth/client").ResponseContext) => Promise<void> | void) | undefined;
        hookOptions?: {
            cloneResponse?: boolean;
        } | undefined;
        timeout?: number | undefined;
        customFetchImpl?: import("better-auth/client").FetchEsque | undefined;
        plugins?: import("better-auth/client").BetterFetchPlugin[] | undefined;
        baseURL?: string | undefined;
        throw?: boolean | undefined;
        auth?: ({
            type: "Bearer";
            token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
        } | {
            type: "Basic";
            username: string | (() => string | undefined) | undefined;
            password: string | (() => string | undefined) | undefined;
        } | {
            type: "Custom";
            prefix: string | (() => string | undefined) | undefined;
            value: string | (() => string | undefined) | undefined;
        }) | undefined;
        body?: undefined;
        query?: (Partial<{
            disableCookieCache?: string | boolean | undefined;
            disableRefresh?: string | boolean | undefined;
        }> & Record<string, any>) | undefined;
        params?: Record<string, any> | undefined;
        duplex?: "full" | "half" | undefined;
        jsonParser?: ((text: string) => Promise<any> | any) | undefined;
        retry?: import("better-auth/client").RetryOptions | undefined;
        retryAttempt?: number | undefined;
        output?: (import("better-auth/client").StandardSchemaV1 | typeof Blob | typeof File) | undefined;
        errorSchema?: import("better-auth/client").StandardSchemaV1 | undefined;
        disableValidation?: boolean | undefined;
    }>(data_0?: import("better-auth").Prettify<{
        query?: {
            disableCookieCache?: string | boolean | undefined;
            disableRefresh?: string | boolean | undefined;
        } | undefined;
        fetchOptions?: FetchOptions | undefined;
    }> | undefined, data_1?: FetchOptions | undefined) => Promise<import("better-auth/client").BetterFetchResponse<{
        user: {
            id: string;
            name: string;
            email: string;
            emailVerified: boolean;
            createdAt: Date;
            updatedAt: Date;
            image?: string | null | undefined | undefined;
            birthday: Date;
            banned: boolean | null | undefined;
            role?: string | null | undefined;
            banReason?: string | null | undefined;
            banExpires?: Date | null | undefined;
            username?: string | null | undefined;
            displayUsername?: string | null | undefined;
            bio?: string | null | undefined;
        };
        session: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            expiresAt: Date;
            token: string;
            ipAddress?: string | null | undefined | undefined;
            userAgent?: string | null | undefined | undefined;
            impersonatedBy?: string | null | undefined;
        };
    }, {
        code?: string;
        message?: string;
    }, FetchOptions["throw"] extends true ? true : false>>;
} & {
    signOut: <FetchOptions extends {
        mode?: RequestMode | undefined;
        cache?: RequestCache | undefined;
        method?: string | undefined;
        headers?: (HeadersInit & (HeadersInit | {
            accept: "application/json" | "text/plain" | "application/octet-stream";
            "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
            authorization: "Bearer" | "Basic";
        })) | undefined;
        credentials?: RequestCredentials | undefined;
        integrity?: string | undefined;
        keepalive?: boolean | undefined;
        priority?: RequestPriority | undefined;
        redirect?: RequestRedirect | undefined;
        referrer?: string | undefined;
        referrerPolicy?: ReferrerPolicy | undefined;
        signal?: (AbortSignal | null) | undefined;
        window?: null | undefined;
        onRequest?: (<T extends Record<string, any>>(context: import("better-auth/client").RequestContext<T>) => Promise<import("better-auth/client").RequestContext | void> | import("better-auth/client").RequestContext | void) | undefined;
        onResponse?: ((context: import("better-auth/client").ResponseContext) => Promise<Response | void | import("better-auth/client").ResponseContext> | Response | import("better-auth/client").ResponseContext | void) | undefined;
        onSuccess?: ((context: import("better-auth/client").SuccessContext<any>) => Promise<void> | void) | undefined;
        onError?: ((context: import("better-auth/client").ErrorContext) => Promise<void> | void) | undefined;
        onRetry?: ((response: import("better-auth/client").ResponseContext) => Promise<void> | void) | undefined;
        hookOptions?: {
            cloneResponse?: boolean;
        } | undefined;
        timeout?: number | undefined;
        customFetchImpl?: import("better-auth/client").FetchEsque | undefined;
        plugins?: import("better-auth/client").BetterFetchPlugin[] | undefined;
        baseURL?: string | undefined;
        throw?: boolean | undefined;
        auth?: ({
            type: "Bearer";
            token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
        } | {
            type: "Basic";
            username: string | (() => string | undefined) | undefined;
            password: string | (() => string | undefined) | undefined;
        } | {
            type: "Custom";
            prefix: string | (() => string | undefined) | undefined;
            value: string | (() => string | undefined) | undefined;
        }) | undefined;
        body?: undefined;
        query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
        params?: Record<string, any> | undefined;
        duplex?: "full" | "half" | undefined;
        jsonParser?: ((text: string) => Promise<any> | any) | undefined;
        retry?: import("better-auth/client").RetryOptions | undefined;
        retryAttempt?: number | undefined;
        output?: (import("better-auth/client").StandardSchemaV1 | typeof Blob | typeof File) | undefined;
        errorSchema?: import("better-auth/client").StandardSchemaV1 | undefined;
        disableValidation?: boolean | undefined;
    }>(data_0?: import("better-auth").Prettify<{
        query?: Record<string, any> | undefined;
        fetchOptions?: FetchOptions | undefined;
    }> | undefined, data_1?: FetchOptions | undefined) => Promise<import("better-auth/client").BetterFetchResponse<{
        success: boolean;
    }, {
        code?: string;
        message?: string;
    }, FetchOptions["throw"] extends true ? true : false>>;
} & {
    signIn: {
        email: <FetchOptions extends {
            mode?: RequestMode | undefined;
            cache?: RequestCache | undefined;
            method?: string | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            credentials?: RequestCredentials | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: import("better-auth/client").RequestContext<T>) => Promise<import("better-auth/client").RequestContext | void> | import("better-auth/client").RequestContext | void) | undefined;
            onResponse?: ((context: import("better-auth/client").ResponseContext) => Promise<Response | void | import("better-auth/client").ResponseContext> | Response | import("better-auth/client").ResponseContext | void) | undefined;
            onSuccess?: ((context: import("better-auth/client").SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: import("better-auth/client").ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: import("better-auth/client").ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: import("better-auth/client").FetchEsque | undefined;
            plugins?: import("better-auth/client").BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                password: string;
                email: string;
                callbackURL?: string | undefined;
                rememberMe?: boolean | undefined;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: import("better-auth/client").RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (import("better-auth/client").StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: import("better-auth/client").StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: import("better-auth").Prettify<{
            password: string;
            email: string;
            callbackURL?: string | undefined;
            rememberMe?: boolean | undefined;
        } & {
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<import("better-auth/client").BetterFetchResponse<{
            redirect: boolean;
            token: string;
            url: string | undefined;
            user: {
                id: string;
                email: string;
                name: string;
                image: string | null | undefined;
                emailVerified: boolean;
                createdAt: Date;
                updatedAt: Date;
            };
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    forgetPassword: <FetchOptions extends {
        mode?: RequestMode | undefined;
        cache?: RequestCache | undefined;
        method?: string | undefined;
        headers?: (HeadersInit & (HeadersInit | {
            accept: "application/json" | "text/plain" | "application/octet-stream";
            "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
            authorization: "Bearer" | "Basic";
        })) | undefined;
        credentials?: RequestCredentials | undefined;
        integrity?: string | undefined;
        keepalive?: boolean | undefined;
        priority?: RequestPriority | undefined;
        redirect?: RequestRedirect | undefined;
        referrer?: string | undefined;
        referrerPolicy?: ReferrerPolicy | undefined;
        signal?: (AbortSignal | null) | undefined;
        window?: null | undefined;
        onRequest?: (<T extends Record<string, any>>(context: import("better-auth/client").RequestContext<T>) => Promise<import("better-auth/client").RequestContext | void> | import("better-auth/client").RequestContext | void) | undefined;
        onResponse?: ((context: import("better-auth/client").ResponseContext) => Promise<Response | void | import("better-auth/client").ResponseContext> | Response | import("better-auth/client").ResponseContext | void) | undefined;
        onSuccess?: ((context: import("better-auth/client").SuccessContext<any>) => Promise<void> | void) | undefined;
        onError?: ((context: import("better-auth/client").ErrorContext) => Promise<void> | void) | undefined;
        onRetry?: ((response: import("better-auth/client").ResponseContext) => Promise<void> | void) | undefined;
        hookOptions?: {
            cloneResponse?: boolean;
        } | undefined;
        timeout?: number | undefined;
        customFetchImpl?: import("better-auth/client").FetchEsque | undefined;
        plugins?: import("better-auth/client").BetterFetchPlugin[] | undefined;
        baseURL?: string | undefined;
        throw?: boolean | undefined;
        auth?: ({
            type: "Bearer";
            token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
        } | {
            type: "Basic";
            username: string | (() => string | undefined) | undefined;
            password: string | (() => string | undefined) | undefined;
        } | {
            type: "Custom";
            prefix: string | (() => string | undefined) | undefined;
            value: string | (() => string | undefined) | undefined;
        }) | undefined;
        body?: (Partial<{
            email: string;
            redirectTo?: string | undefined;
        }> & Record<string, any>) | undefined;
        query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
        params?: Record<string, any> | undefined;
        duplex?: "full" | "half" | undefined;
        jsonParser?: ((text: string) => Promise<any> | any) | undefined;
        retry?: import("better-auth/client").RetryOptions | undefined;
        retryAttempt?: number | undefined;
        output?: (import("better-auth/client").StandardSchemaV1 | typeof Blob | typeof File) | undefined;
        errorSchema?: import("better-auth/client").StandardSchemaV1 | undefined;
        disableValidation?: boolean | undefined;
    }>(data_0: import("better-auth").Prettify<{
        email: string;
        redirectTo?: string | undefined;
    } & {
        fetchOptions?: FetchOptions | undefined;
    }>, data_1?: FetchOptions | undefined) => Promise<import("better-auth/client").BetterFetchResponse<{
        status: boolean;
    }, {
        code?: string;
        message?: string;
    }, FetchOptions["throw"] extends true ? true : false>>;
} & {
    resetPassword: <FetchOptions extends {
        mode?: RequestMode | undefined;
        cache?: RequestCache | undefined;
        method?: string | undefined;
        headers?: (HeadersInit & (HeadersInit | {
            accept: "application/json" | "text/plain" | "application/octet-stream";
            "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
            authorization: "Bearer" | "Basic";
        })) | undefined;
        credentials?: RequestCredentials | undefined;
        integrity?: string | undefined;
        keepalive?: boolean | undefined;
        priority?: RequestPriority | undefined;
        redirect?: RequestRedirect | undefined;
        referrer?: string | undefined;
        referrerPolicy?: ReferrerPolicy | undefined;
        signal?: (AbortSignal | null) | undefined;
        window?: null | undefined;
        onRequest?: (<T extends Record<string, any>>(context: import("better-auth/client").RequestContext<T>) => Promise<import("better-auth/client").RequestContext | void> | import("better-auth/client").RequestContext | void) | undefined;
        onResponse?: ((context: import("better-auth/client").ResponseContext) => Promise<Response | void | import("better-auth/client").ResponseContext> | Response | import("better-auth/client").ResponseContext | void) | undefined;
        onSuccess?: ((context: import("better-auth/client").SuccessContext<any>) => Promise<void> | void) | undefined;
        onError?: ((context: import("better-auth/client").ErrorContext) => Promise<void> | void) | undefined;
        onRetry?: ((response: import("better-auth/client").ResponseContext) => Promise<void> | void) | undefined;
        hookOptions?: {
            cloneResponse?: boolean;
        } | undefined;
        timeout?: number | undefined;
        customFetchImpl?: import("better-auth/client").FetchEsque | undefined;
        plugins?: import("better-auth/client").BetterFetchPlugin[] | undefined;
        baseURL?: string | undefined;
        throw?: boolean | undefined;
        auth?: ({
            type: "Bearer";
            token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
        } | {
            type: "Basic";
            username: string | (() => string | undefined) | undefined;
            password: string | (() => string | undefined) | undefined;
        } | {
            type: "Custom";
            prefix: string | (() => string | undefined) | undefined;
            value: string | (() => string | undefined) | undefined;
        }) | undefined;
        body?: (Partial<{
            newPassword: string;
            token?: string | undefined;
        }> & Record<string, any>) | undefined;
        query?: (Partial<{
            token?: string | undefined;
        }> & Record<string, any>) | undefined;
        params?: Record<string, any> | undefined;
        duplex?: "full" | "half" | undefined;
        jsonParser?: ((text: string) => Promise<any> | any) | undefined;
        retry?: import("better-auth/client").RetryOptions | undefined;
        retryAttempt?: number | undefined;
        output?: (import("better-auth/client").StandardSchemaV1 | typeof Blob | typeof File) | undefined;
        errorSchema?: import("better-auth/client").StandardSchemaV1 | undefined;
        disableValidation?: boolean | undefined;
    }>(data_0: import("better-auth").Prettify<{
        newPassword: string;
        token?: string | undefined;
    } & {
        fetchOptions?: FetchOptions | undefined;
    }>, data_1?: FetchOptions | undefined) => Promise<import("better-auth/client").BetterFetchResponse<{
        status: boolean;
    }, {
        code?: string;
        message?: string;
    }, FetchOptions["throw"] extends true ? true : false>>;
} & {
    verifyEmail: <FetchOptions extends {
        mode?: RequestMode | undefined;
        cache?: RequestCache | undefined;
        method?: string | undefined;
        headers?: (HeadersInit & (HeadersInit | {
            accept: "application/json" | "text/plain" | "application/octet-stream";
            "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
            authorization: "Bearer" | "Basic";
        })) | undefined;
        credentials?: RequestCredentials | undefined;
        integrity?: string | undefined;
        keepalive?: boolean | undefined;
        priority?: RequestPriority | undefined;
        redirect?: RequestRedirect | undefined;
        referrer?: string | undefined;
        referrerPolicy?: ReferrerPolicy | undefined;
        signal?: (AbortSignal | null) | undefined;
        window?: null | undefined;
        onRequest?: (<T extends Record<string, any>>(context: import("better-auth/client").RequestContext<T>) => Promise<import("better-auth/client").RequestContext | void> | import("better-auth/client").RequestContext | void) | undefined;
        onResponse?: ((context: import("better-auth/client").ResponseContext) => Promise<Response | void | import("better-auth/client").ResponseContext> | Response | import("better-auth/client").ResponseContext | void) | undefined;
        onSuccess?: ((context: import("better-auth/client").SuccessContext<any>) => Promise<void> | void) | undefined;
        onError?: ((context: import("better-auth/client").ErrorContext) => Promise<void> | void) | undefined;
        onRetry?: ((response: import("better-auth/client").ResponseContext) => Promise<void> | void) | undefined;
        hookOptions?: {
            cloneResponse?: boolean;
        } | undefined;
        timeout?: number | undefined;
        customFetchImpl?: import("better-auth/client").FetchEsque | undefined;
        plugins?: import("better-auth/client").BetterFetchPlugin[] | undefined;
        baseURL?: string | undefined;
        throw?: boolean | undefined;
        auth?: ({
            type: "Bearer";
            token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
        } | {
            type: "Basic";
            username: string | (() => string | undefined) | undefined;
            password: string | (() => string | undefined) | undefined;
        } | {
            type: "Custom";
            prefix: string | (() => string | undefined) | undefined;
            value: string | (() => string | undefined) | undefined;
        }) | undefined;
        body?: undefined;
        query?: (Partial<{
            token: string;
            callbackURL?: string | undefined;
        }> & Record<string, any>) | undefined;
        params?: Record<string, any> | undefined;
        duplex?: "full" | "half" | undefined;
        jsonParser?: ((text: string) => Promise<any> | any) | undefined;
        retry?: import("better-auth/client").RetryOptions | undefined;
        retryAttempt?: number | undefined;
        output?: (import("better-auth/client").StandardSchemaV1 | typeof Blob | typeof File) | undefined;
        errorSchema?: import("better-auth/client").StandardSchemaV1 | undefined;
        disableValidation?: boolean | undefined;
    }>(data_0: import("better-auth").Prettify<{
        query: {
            token: string;
            callbackURL?: string | undefined;
        };
        fetchOptions?: FetchOptions | undefined;
    }>, data_1?: FetchOptions | undefined) => Promise<import("better-auth/client").BetterFetchResponse<NonNullable<void | {
        status: boolean;
        user: {
            id: any;
            email: any;
            name: any;
            image: any;
            emailVerified: any;
            createdAt: any;
            updatedAt: any;
        };
    } | {
        status: boolean;
        user: null;
    }>, {
        code?: string;
        message?: string;
    }, FetchOptions["throw"] extends true ? true : false>>;
} & {
    sendVerificationEmail: <FetchOptions extends {
        mode?: RequestMode | undefined;
        cache?: RequestCache | undefined;
        method?: string | undefined;
        headers?: (HeadersInit & (HeadersInit | {
            accept: "application/json" | "text/plain" | "application/octet-stream";
            "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
            authorization: "Bearer" | "Basic";
        })) | undefined;
        credentials?: RequestCredentials | undefined;
        integrity?: string | undefined;
        keepalive?: boolean | undefined;
        priority?: RequestPriority | undefined;
        redirect?: RequestRedirect | undefined;
        referrer?: string | undefined;
        referrerPolicy?: ReferrerPolicy | undefined;
        signal?: (AbortSignal | null) | undefined;
        window?: null | undefined;
        onRequest?: (<T extends Record<string, any>>(context: import("better-auth/client").RequestContext<T>) => Promise<import("better-auth/client").RequestContext | void> | import("better-auth/client").RequestContext | void) | undefined;
        onResponse?: ((context: import("better-auth/client").ResponseContext) => Promise<Response | void | import("better-auth/client").ResponseContext> | Response | import("better-auth/client").ResponseContext | void) | undefined;
        onSuccess?: ((context: import("better-auth/client").SuccessContext<any>) => Promise<void> | void) | undefined;
        onError?: ((context: import("better-auth/client").ErrorContext) => Promise<void> | void) | undefined;
        onRetry?: ((response: import("better-auth/client").ResponseContext) => Promise<void> | void) | undefined;
        hookOptions?: {
            cloneResponse?: boolean;
        } | undefined;
        timeout?: number | undefined;
        customFetchImpl?: import("better-auth/client").FetchEsque | undefined;
        plugins?: import("better-auth/client").BetterFetchPlugin[] | undefined;
        baseURL?: string | undefined;
        throw?: boolean | undefined;
        auth?: ({
            type: "Bearer";
            token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
        } | {
            type: "Basic";
            username: string | (() => string | undefined) | undefined;
            password: string | (() => string | undefined) | undefined;
        } | {
            type: "Custom";
            prefix: string | (() => string | undefined) | undefined;
            value: string | (() => string | undefined) | undefined;
        }) | undefined;
        body?: (Partial<{
            email: string;
            callbackURL?: string | undefined;
        }> & Record<string, any>) | undefined;
        query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
        params?: Record<string, any> | undefined;
        duplex?: "full" | "half" | undefined;
        jsonParser?: ((text: string) => Promise<any> | any) | undefined;
        retry?: import("better-auth/client").RetryOptions | undefined;
        retryAttempt?: number | undefined;
        output?: (import("better-auth/client").StandardSchemaV1 | typeof Blob | typeof File) | undefined;
        errorSchema?: import("better-auth/client").StandardSchemaV1 | undefined;
        disableValidation?: boolean | undefined;
    }>(data_0: import("better-auth").Prettify<{
        email: string;
        callbackURL?: string | undefined;
    } & {
        fetchOptions?: FetchOptions | undefined;
    }>, data_1?: FetchOptions | undefined) => Promise<import("better-auth/client").BetterFetchResponse<{
        status: boolean;
    }, {
        code?: string;
        message?: string;
    }, FetchOptions["throw"] extends true ? true : false>>;
} & {
    changeEmail: <FetchOptions extends {
        mode?: RequestMode | undefined;
        cache?: RequestCache | undefined;
        method?: string | undefined;
        headers?: (HeadersInit & (HeadersInit | {
            accept: "application/json" | "text/plain" | "application/octet-stream";
            "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
            authorization: "Bearer" | "Basic";
        })) | undefined;
        credentials?: RequestCredentials | undefined;
        integrity?: string | undefined;
        keepalive?: boolean | undefined;
        priority?: RequestPriority | undefined;
        redirect?: RequestRedirect | undefined;
        referrer?: string | undefined;
        referrerPolicy?: ReferrerPolicy | undefined;
        signal?: (AbortSignal | null) | undefined;
        window?: null | undefined;
        onRequest?: (<T extends Record<string, any>>(context: import("better-auth/client").RequestContext<T>) => Promise<import("better-auth/client").RequestContext | void> | import("better-auth/client").RequestContext | void) | undefined;
        onResponse?: ((context: import("better-auth/client").ResponseContext) => Promise<Response | void | import("better-auth/client").ResponseContext> | Response | import("better-auth/client").ResponseContext | void) | undefined;
        onSuccess?: ((context: import("better-auth/client").SuccessContext<any>) => Promise<void> | void) | undefined;
        onError?: ((context: import("better-auth/client").ErrorContext) => Promise<void> | void) | undefined;
        onRetry?: ((response: import("better-auth/client").ResponseContext) => Promise<void> | void) | undefined;
        hookOptions?: {
            cloneResponse?: boolean;
        } | undefined;
        timeout?: number | undefined;
        customFetchImpl?: import("better-auth/client").FetchEsque | undefined;
        plugins?: import("better-auth/client").BetterFetchPlugin[] | undefined;
        baseURL?: string | undefined;
        throw?: boolean | undefined;
        auth?: ({
            type: "Bearer";
            token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
        } | {
            type: "Basic";
            username: string | (() => string | undefined) | undefined;
            password: string | (() => string | undefined) | undefined;
        } | {
            type: "Custom";
            prefix: string | (() => string | undefined) | undefined;
            value: string | (() => string | undefined) | undefined;
        }) | undefined;
        body?: (Partial<{
            newEmail: string;
            callbackURL?: string | undefined;
        }> & Record<string, any>) | undefined;
        query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
        params?: Record<string, any> | undefined;
        duplex?: "full" | "half" | undefined;
        jsonParser?: ((text: string) => Promise<any> | any) | undefined;
        retry?: import("better-auth/client").RetryOptions | undefined;
        retryAttempt?: number | undefined;
        output?: (import("better-auth/client").StandardSchemaV1 | typeof Blob | typeof File) | undefined;
        errorSchema?: import("better-auth/client").StandardSchemaV1 | undefined;
        disableValidation?: boolean | undefined;
    }>(data_0: import("better-auth").Prettify<{
        newEmail: string;
        callbackURL?: string | undefined;
    } & {
        fetchOptions?: FetchOptions | undefined;
    }>, data_1?: FetchOptions | undefined) => Promise<import("better-auth/client").BetterFetchResponse<{
        status: boolean;
    }, {
        code?: string;
        message?: string;
    }, FetchOptions["throw"] extends true ? true : false>>;
} & {
    changePassword: <FetchOptions extends {
        mode?: RequestMode | undefined;
        cache?: RequestCache | undefined;
        method?: string | undefined;
        headers?: (HeadersInit & (HeadersInit | {
            accept: "application/json" | "text/plain" | "application/octet-stream";
            "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
            authorization: "Bearer" | "Basic";
        })) | undefined;
        credentials?: RequestCredentials | undefined;
        integrity?: string | undefined;
        keepalive?: boolean | undefined;
        priority?: RequestPriority | undefined;
        redirect?: RequestRedirect | undefined;
        referrer?: string | undefined;
        referrerPolicy?: ReferrerPolicy | undefined;
        signal?: (AbortSignal | null) | undefined;
        window?: null | undefined;
        onRequest?: (<T extends Record<string, any>>(context: import("better-auth/client").RequestContext<T>) => Promise<import("better-auth/client").RequestContext | void> | import("better-auth/client").RequestContext | void) | undefined;
        onResponse?: ((context: import("better-auth/client").ResponseContext) => Promise<Response | void | import("better-auth/client").ResponseContext> | Response | import("better-auth/client").ResponseContext | void) | undefined;
        onSuccess?: ((context: import("better-auth/client").SuccessContext<any>) => Promise<void> | void) | undefined;
        onError?: ((context: import("better-auth/client").ErrorContext) => Promise<void> | void) | undefined;
        onRetry?: ((response: import("better-auth/client").ResponseContext) => Promise<void> | void) | undefined;
        hookOptions?: {
            cloneResponse?: boolean;
        } | undefined;
        timeout?: number | undefined;
        customFetchImpl?: import("better-auth/client").FetchEsque | undefined;
        plugins?: import("better-auth/client").BetterFetchPlugin[] | undefined;
        baseURL?: string | undefined;
        throw?: boolean | undefined;
        auth?: ({
            type: "Bearer";
            token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
        } | {
            type: "Basic";
            username: string | (() => string | undefined) | undefined;
            password: string | (() => string | undefined) | undefined;
        } | {
            type: "Custom";
            prefix: string | (() => string | undefined) | undefined;
            value: string | (() => string | undefined) | undefined;
        }) | undefined;
        body?: (Partial<{
            newPassword: string;
            currentPassword: string;
            revokeOtherSessions?: boolean | undefined;
        }> & Record<string, any>) | undefined;
        query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
        params?: Record<string, any> | undefined;
        duplex?: "full" | "half" | undefined;
        jsonParser?: ((text: string) => Promise<any> | any) | undefined;
        retry?: import("better-auth/client").RetryOptions | undefined;
        retryAttempt?: number | undefined;
        output?: (import("better-auth/client").StandardSchemaV1 | typeof Blob | typeof File) | undefined;
        errorSchema?: import("better-auth/client").StandardSchemaV1 | undefined;
        disableValidation?: boolean | undefined;
    }>(data_0: import("better-auth").Prettify<{
        newPassword: string;
        currentPassword: string;
        revokeOtherSessions?: boolean | undefined;
    } & {
        fetchOptions?: FetchOptions | undefined;
    }>, data_1?: FetchOptions | undefined) => Promise<import("better-auth/client").BetterFetchResponse<{
        token: string | null;
        user: {
            id: string;
            email: string;
            name: string;
            image: string | null | undefined;
            emailVerified: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
    }, {
        code?: string;
        message?: string;
    }, FetchOptions["throw"] extends true ? true : false>>;
} & {
    deleteUser: <FetchOptions extends {
        mode?: RequestMode | undefined;
        cache?: RequestCache | undefined;
        method?: string | undefined;
        headers?: (HeadersInit & (HeadersInit | {
            accept: "application/json" | "text/plain" | "application/octet-stream";
            "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
            authorization: "Bearer" | "Basic";
        })) | undefined;
        credentials?: RequestCredentials | undefined;
        integrity?: string | undefined;
        keepalive?: boolean | undefined;
        priority?: RequestPriority | undefined;
        redirect?: RequestRedirect | undefined;
        referrer?: string | undefined;
        referrerPolicy?: ReferrerPolicy | undefined;
        signal?: (AbortSignal | null) | undefined;
        window?: null | undefined;
        onRequest?: (<T extends Record<string, any>>(context: import("better-auth/client").RequestContext<T>) => Promise<import("better-auth/client").RequestContext | void> | import("better-auth/client").RequestContext | void) | undefined;
        onResponse?: ((context: import("better-auth/client").ResponseContext) => Promise<Response | void | import("better-auth/client").ResponseContext> | Response | import("better-auth/client").ResponseContext | void) | undefined;
        onSuccess?: ((context: import("better-auth/client").SuccessContext<any>) => Promise<void> | void) | undefined;
        onError?: ((context: import("better-auth/client").ErrorContext) => Promise<void> | void) | undefined;
        onRetry?: ((response: import("better-auth/client").ResponseContext) => Promise<void> | void) | undefined;
        hookOptions?: {
            cloneResponse?: boolean;
        } | undefined;
        timeout?: number | undefined;
        customFetchImpl?: import("better-auth/client").FetchEsque | undefined;
        plugins?: import("better-auth/client").BetterFetchPlugin[] | undefined;
        baseURL?: string | undefined;
        throw?: boolean | undefined;
        auth?: ({
            type: "Bearer";
            token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
        } | {
            type: "Basic";
            username: string | (() => string | undefined) | undefined;
            password: string | (() => string | undefined) | undefined;
        } | {
            type: "Custom";
            prefix: string | (() => string | undefined) | undefined;
            value: string | (() => string | undefined) | undefined;
        }) | undefined;
        body?: (Partial<{
            password?: string | undefined;
            token?: string | undefined;
            callbackURL?: string | undefined;
        }> & Record<string, any>) | undefined;
        query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
        params?: Record<string, any> | undefined;
        duplex?: "full" | "half" | undefined;
        jsonParser?: ((text: string) => Promise<any> | any) | undefined;
        retry?: import("better-auth/client").RetryOptions | undefined;
        retryAttempt?: number | undefined;
        output?: (import("better-auth/client").StandardSchemaV1 | typeof Blob | typeof File) | undefined;
        errorSchema?: import("better-auth/client").StandardSchemaV1 | undefined;
        disableValidation?: boolean | undefined;
    }>(data_0?: import("better-auth").Prettify<{
        password?: string | undefined;
        token?: string | undefined;
        callbackURL?: string | undefined;
    } & {
        fetchOptions?: FetchOptions | undefined;
    }> | undefined, data_1?: FetchOptions | undefined) => Promise<import("better-auth/client").BetterFetchResponse<{
        success: boolean;
        message: string;
    }, {
        code?: string;
        message?: string;
    }, FetchOptions["throw"] extends true ? true : false>>;
} & {
    resetPassword: {
        ":token": <FetchOptions extends {
            mode?: RequestMode | undefined;
            cache?: RequestCache | undefined;
            method?: string | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            credentials?: RequestCredentials | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: import("better-auth/client").RequestContext<T>) => Promise<import("better-auth/client").RequestContext | void> | import("better-auth/client").RequestContext | void) | undefined;
            onResponse?: ((context: import("better-auth/client").ResponseContext) => Promise<Response | void | import("better-auth/client").ResponseContext> | Response | import("better-auth/client").ResponseContext | void) | undefined;
            onSuccess?: ((context: import("better-auth/client").SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: import("better-auth/client").ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: import("better-auth/client").ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: import("better-auth/client").FetchEsque | undefined;
            plugins?: import("better-auth/client").BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: undefined;
            query?: (Partial<{
                callbackURL: string;
            }> & Record<string, any>) | undefined;
            params?: {
                token: string;
            } | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: import("better-auth/client").RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (import("better-auth/client").StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: import("better-auth/client").StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: import("better-auth").Prettify<{
            query: {
                callbackURL: string;
            };
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<import("better-auth/client").BetterFetchResponse<never, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    revokeSession: <FetchOptions extends {
        mode?: RequestMode | undefined;
        cache?: RequestCache | undefined;
        method?: string | undefined;
        headers?: (HeadersInit & (HeadersInit | {
            accept: "application/json" | "text/plain" | "application/octet-stream";
            "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
            authorization: "Bearer" | "Basic";
        })) | undefined;
        credentials?: RequestCredentials | undefined;
        integrity?: string | undefined;
        keepalive?: boolean | undefined;
        priority?: RequestPriority | undefined;
        redirect?: RequestRedirect | undefined;
        referrer?: string | undefined;
        referrerPolicy?: ReferrerPolicy | undefined;
        signal?: (AbortSignal | null) | undefined;
        window?: null | undefined;
        onRequest?: (<T extends Record<string, any>>(context: import("better-auth/client").RequestContext<T>) => Promise<import("better-auth/client").RequestContext | void> | import("better-auth/client").RequestContext | void) | undefined;
        onResponse?: ((context: import("better-auth/client").ResponseContext) => Promise<Response | void | import("better-auth/client").ResponseContext> | Response | import("better-auth/client").ResponseContext | void) | undefined;
        onSuccess?: ((context: import("better-auth/client").SuccessContext<any>) => Promise<void> | void) | undefined;
        onError?: ((context: import("better-auth/client").ErrorContext) => Promise<void> | void) | undefined;
        onRetry?: ((response: import("better-auth/client").ResponseContext) => Promise<void> | void) | undefined;
        hookOptions?: {
            cloneResponse?: boolean;
        } | undefined;
        timeout?: number | undefined;
        customFetchImpl?: import("better-auth/client").FetchEsque | undefined;
        plugins?: import("better-auth/client").BetterFetchPlugin[] | undefined;
        baseURL?: string | undefined;
        throw?: boolean | undefined;
        auth?: ({
            type: "Bearer";
            token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
        } | {
            type: "Basic";
            username: string | (() => string | undefined) | undefined;
            password: string | (() => string | undefined) | undefined;
        } | {
            type: "Custom";
            prefix: string | (() => string | undefined) | undefined;
            value: string | (() => string | undefined) | undefined;
        }) | undefined;
        body?: (Partial<{
            token: string;
        }> & Record<string, any>) | undefined;
        query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
        params?: Record<string, any> | undefined;
        duplex?: "full" | "half" | undefined;
        jsonParser?: ((text: string) => Promise<any> | any) | undefined;
        retry?: import("better-auth/client").RetryOptions | undefined;
        retryAttempt?: number | undefined;
        output?: (import("better-auth/client").StandardSchemaV1 | typeof Blob | typeof File) | undefined;
        errorSchema?: import("better-auth/client").StandardSchemaV1 | undefined;
        disableValidation?: boolean | undefined;
    }>(data_0: import("better-auth").Prettify<{
        token: string;
    } & {
        fetchOptions?: FetchOptions | undefined;
    }>, data_1?: FetchOptions | undefined) => Promise<import("better-auth/client").BetterFetchResponse<{
        status: boolean;
    }, {
        code?: string;
        message?: string;
    }, FetchOptions["throw"] extends true ? true : false>>;
} & {
    revokeSessions: <FetchOptions extends {
        mode?: RequestMode | undefined;
        cache?: RequestCache | undefined;
        method?: string | undefined;
        headers?: (HeadersInit & (HeadersInit | {
            accept: "application/json" | "text/plain" | "application/octet-stream";
            "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
            authorization: "Bearer" | "Basic";
        })) | undefined;
        credentials?: RequestCredentials | undefined;
        integrity?: string | undefined;
        keepalive?: boolean | undefined;
        priority?: RequestPriority | undefined;
        redirect?: RequestRedirect | undefined;
        referrer?: string | undefined;
        referrerPolicy?: ReferrerPolicy | undefined;
        signal?: (AbortSignal | null) | undefined;
        window?: null | undefined;
        onRequest?: (<T extends Record<string, any>>(context: import("better-auth/client").RequestContext<T>) => Promise<import("better-auth/client").RequestContext | void> | import("better-auth/client").RequestContext | void) | undefined;
        onResponse?: ((context: import("better-auth/client").ResponseContext) => Promise<Response | void | import("better-auth/client").ResponseContext> | Response | import("better-auth/client").ResponseContext | void) | undefined;
        onSuccess?: ((context: import("better-auth/client").SuccessContext<any>) => Promise<void> | void) | undefined;
        onError?: ((context: import("better-auth/client").ErrorContext) => Promise<void> | void) | undefined;
        onRetry?: ((response: import("better-auth/client").ResponseContext) => Promise<void> | void) | undefined;
        hookOptions?: {
            cloneResponse?: boolean;
        } | undefined;
        timeout?: number | undefined;
        customFetchImpl?: import("better-auth/client").FetchEsque | undefined;
        plugins?: import("better-auth/client").BetterFetchPlugin[] | undefined;
        baseURL?: string | undefined;
        throw?: boolean | undefined;
        auth?: ({
            type: "Bearer";
            token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
        } | {
            type: "Basic";
            username: string | (() => string | undefined) | undefined;
            password: string | (() => string | undefined) | undefined;
        } | {
            type: "Custom";
            prefix: string | (() => string | undefined) | undefined;
            value: string | (() => string | undefined) | undefined;
        }) | undefined;
        body?: undefined;
        query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
        params?: Record<string, any> | undefined;
        duplex?: "full" | "half" | undefined;
        jsonParser?: ((text: string) => Promise<any> | any) | undefined;
        retry?: import("better-auth/client").RetryOptions | undefined;
        retryAttempt?: number | undefined;
        output?: (import("better-auth/client").StandardSchemaV1 | typeof Blob | typeof File) | undefined;
        errorSchema?: import("better-auth/client").StandardSchemaV1 | undefined;
        disableValidation?: boolean | undefined;
    }>(data_0?: import("better-auth").Prettify<{
        query?: Record<string, any> | undefined;
        fetchOptions?: FetchOptions | undefined;
    }> | undefined, data_1?: FetchOptions | undefined) => Promise<import("better-auth/client").BetterFetchResponse<{
        status: boolean;
    }, {
        code?: string;
        message?: string;
    }, FetchOptions["throw"] extends true ? true : false>>;
} & {
    revokeOtherSessions: <FetchOptions extends {
        mode?: RequestMode | undefined;
        cache?: RequestCache | undefined;
        method?: string | undefined;
        headers?: (HeadersInit & (HeadersInit | {
            accept: "application/json" | "text/plain" | "application/octet-stream";
            "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
            authorization: "Bearer" | "Basic";
        })) | undefined;
        credentials?: RequestCredentials | undefined;
        integrity?: string | undefined;
        keepalive?: boolean | undefined;
        priority?: RequestPriority | undefined;
        redirect?: RequestRedirect | undefined;
        referrer?: string | undefined;
        referrerPolicy?: ReferrerPolicy | undefined;
        signal?: (AbortSignal | null) | undefined;
        window?: null | undefined;
        onRequest?: (<T extends Record<string, any>>(context: import("better-auth/client").RequestContext<T>) => Promise<import("better-auth/client").RequestContext | void> | import("better-auth/client").RequestContext | void) | undefined;
        onResponse?: ((context: import("better-auth/client").ResponseContext) => Promise<Response | void | import("better-auth/client").ResponseContext> | Response | import("better-auth/client").ResponseContext | void) | undefined;
        onSuccess?: ((context: import("better-auth/client").SuccessContext<any>) => Promise<void> | void) | undefined;
        onError?: ((context: import("better-auth/client").ErrorContext) => Promise<void> | void) | undefined;
        onRetry?: ((response: import("better-auth/client").ResponseContext) => Promise<void> | void) | undefined;
        hookOptions?: {
            cloneResponse?: boolean;
        } | undefined;
        timeout?: number | undefined;
        customFetchImpl?: import("better-auth/client").FetchEsque | undefined;
        plugins?: import("better-auth/client").BetterFetchPlugin[] | undefined;
        baseURL?: string | undefined;
        throw?: boolean | undefined;
        auth?: ({
            type: "Bearer";
            token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
        } | {
            type: "Basic";
            username: string | (() => string | undefined) | undefined;
            password: string | (() => string | undefined) | undefined;
        } | {
            type: "Custom";
            prefix: string | (() => string | undefined) | undefined;
            value: string | (() => string | undefined) | undefined;
        }) | undefined;
        body?: undefined;
        query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
        params?: Record<string, any> | undefined;
        duplex?: "full" | "half" | undefined;
        jsonParser?: ((text: string) => Promise<any> | any) | undefined;
        retry?: import("better-auth/client").RetryOptions | undefined;
        retryAttempt?: number | undefined;
        output?: (import("better-auth/client").StandardSchemaV1 | typeof Blob | typeof File) | undefined;
        errorSchema?: import("better-auth/client").StandardSchemaV1 | undefined;
        disableValidation?: boolean | undefined;
    }>(data_0?: import("better-auth").Prettify<{
        query?: Record<string, any> | undefined;
        fetchOptions?: FetchOptions | undefined;
    }> | undefined, data_1?: FetchOptions | undefined) => Promise<import("better-auth/client").BetterFetchResponse<{
        status: boolean;
    }, {
        code?: string;
        message?: string;
    }, FetchOptions["throw"] extends true ? true : false>>;
} & {
    linkSocial: <FetchOptions extends {
        mode?: RequestMode | undefined;
        cache?: RequestCache | undefined;
        method?: string | undefined;
        headers?: (HeadersInit & (HeadersInit | {
            accept: "application/json" | "text/plain" | "application/octet-stream";
            "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
            authorization: "Bearer" | "Basic";
        })) | undefined;
        credentials?: RequestCredentials | undefined;
        integrity?: string | undefined;
        keepalive?: boolean | undefined;
        priority?: RequestPriority | undefined;
        redirect?: RequestRedirect | undefined;
        referrer?: string | undefined;
        referrerPolicy?: ReferrerPolicy | undefined;
        signal?: (AbortSignal | null) | undefined;
        window?: null | undefined;
        onRequest?: (<T extends Record<string, any>>(context: import("better-auth/client").RequestContext<T>) => Promise<import("better-auth/client").RequestContext | void> | import("better-auth/client").RequestContext | void) | undefined;
        onResponse?: ((context: import("better-auth/client").ResponseContext) => Promise<Response | void | import("better-auth/client").ResponseContext> | Response | import("better-auth/client").ResponseContext | void) | undefined;
        onSuccess?: ((context: import("better-auth/client").SuccessContext<any>) => Promise<void> | void) | undefined;
        onError?: ((context: import("better-auth/client").ErrorContext) => Promise<void> | void) | undefined;
        onRetry?: ((response: import("better-auth/client").ResponseContext) => Promise<void> | void) | undefined;
        hookOptions?: {
            cloneResponse?: boolean;
        } | undefined;
        timeout?: number | undefined;
        customFetchImpl?: import("better-auth/client").FetchEsque | undefined;
        plugins?: import("better-auth/client").BetterFetchPlugin[] | undefined;
        baseURL?: string | undefined;
        throw?: boolean | undefined;
        auth?: ({
            type: "Bearer";
            token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
        } | {
            type: "Basic";
            username: string | (() => string | undefined) | undefined;
            password: string | (() => string | undefined) | undefined;
        } | {
            type: "Custom";
            prefix: string | (() => string | undefined) | undefined;
            value: string | (() => string | undefined) | undefined;
        }) | undefined;
        body?: (Partial<{
            provider: "apple" | "discord" | "facebook" | "github" | "google" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "kick" | "zoom";
            scopes?: string[] | undefined;
            callbackURL?: string | undefined;
        }> & Record<string, any>) | undefined;
        query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
        params?: Record<string, any> | undefined;
        duplex?: "full" | "half" | undefined;
        jsonParser?: ((text: string) => Promise<any> | any) | undefined;
        retry?: import("better-auth/client").RetryOptions | undefined;
        retryAttempt?: number | undefined;
        output?: (import("better-auth/client").StandardSchemaV1 | typeof Blob | typeof File) | undefined;
        errorSchema?: import("better-auth/client").StandardSchemaV1 | undefined;
        disableValidation?: boolean | undefined;
    }>(data_0: import("better-auth").Prettify<{
        provider: "apple" | "discord" | "facebook" | "github" | "google" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "kick" | "zoom";
        scopes?: string[] | undefined;
        callbackURL?: string | undefined;
    } & {
        fetchOptions?: FetchOptions | undefined;
    }>, data_1?: FetchOptions | undefined) => Promise<import("better-auth/client").BetterFetchResponse<{
        url: string;
        redirect: boolean;
    }, {
        code?: string;
        message?: string;
    }, FetchOptions["throw"] extends true ? true : false>>;
} & {
    listAccounts: <FetchOptions extends {
        mode?: RequestMode | undefined;
        cache?: RequestCache | undefined;
        method?: string | undefined;
        headers?: (HeadersInit & (HeadersInit | {
            accept: "application/json" | "text/plain" | "application/octet-stream";
            "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
            authorization: "Bearer" | "Basic";
        })) | undefined;
        credentials?: RequestCredentials | undefined;
        integrity?: string | undefined;
        keepalive?: boolean | undefined;
        priority?: RequestPriority | undefined;
        redirect?: RequestRedirect | undefined;
        referrer?: string | undefined;
        referrerPolicy?: ReferrerPolicy | undefined;
        signal?: (AbortSignal | null) | undefined;
        window?: null | undefined;
        onRequest?: (<T extends Record<string, any>>(context: import("better-auth/client").RequestContext<T>) => Promise<import("better-auth/client").RequestContext | void> | import("better-auth/client").RequestContext | void) | undefined;
        onResponse?: ((context: import("better-auth/client").ResponseContext) => Promise<Response | void | import("better-auth/client").ResponseContext> | Response | import("better-auth/client").ResponseContext | void) | undefined;
        onSuccess?: ((context: import("better-auth/client").SuccessContext<any>) => Promise<void> | void) | undefined;
        onError?: ((context: import("better-auth/client").ErrorContext) => Promise<void> | void) | undefined;
        onRetry?: ((response: import("better-auth/client").ResponseContext) => Promise<void> | void) | undefined;
        hookOptions?: {
            cloneResponse?: boolean;
        } | undefined;
        timeout?: number | undefined;
        customFetchImpl?: import("better-auth/client").FetchEsque | undefined;
        plugins?: import("better-auth/client").BetterFetchPlugin[] | undefined;
        baseURL?: string | undefined;
        throw?: boolean | undefined;
        auth?: ({
            type: "Bearer";
            token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
        } | {
            type: "Basic";
            username: string | (() => string | undefined) | undefined;
            password: string | (() => string | undefined) | undefined;
        } | {
            type: "Custom";
            prefix: string | (() => string | undefined) | undefined;
            value: string | (() => string | undefined) | undefined;
        }) | undefined;
        body?: undefined;
        query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
        params?: Record<string, any> | undefined;
        duplex?: "full" | "half" | undefined;
        jsonParser?: ((text: string) => Promise<any> | any) | undefined;
        retry?: import("better-auth/client").RetryOptions | undefined;
        retryAttempt?: number | undefined;
        output?: (import("better-auth/client").StandardSchemaV1 | typeof Blob | typeof File) | undefined;
        errorSchema?: import("better-auth/client").StandardSchemaV1 | undefined;
        disableValidation?: boolean | undefined;
    }>(data_0?: import("better-auth").Prettify<{
        query?: Record<string, any> | undefined;
        fetchOptions?: FetchOptions | undefined;
    }> | undefined, data_1?: FetchOptions | undefined) => Promise<import("better-auth/client").BetterFetchResponse<{
        id: string;
        provider: string;
        createdAt: Date;
        updatedAt: Date;
        accountId: string;
        scopes: string[];
    }[], {
        code?: string;
        message?: string;
    }, FetchOptions["throw"] extends true ? true : false>>;
} & {
    deleteUser: {
        callback: <FetchOptions extends {
            mode?: RequestMode | undefined;
            cache?: RequestCache | undefined;
            method?: string | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            credentials?: RequestCredentials | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: import("better-auth/client").RequestContext<T>) => Promise<import("better-auth/client").RequestContext | void> | import("better-auth/client").RequestContext | void) | undefined;
            onResponse?: ((context: import("better-auth/client").ResponseContext) => Promise<Response | void | import("better-auth/client").ResponseContext> | Response | import("better-auth/client").ResponseContext | void) | undefined;
            onSuccess?: ((context: import("better-auth/client").SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: import("better-auth/client").ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: import("better-auth/client").ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: import("better-auth/client").FetchEsque | undefined;
            plugins?: import("better-auth/client").BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: undefined;
            query?: (Partial<{
                token: string;
                callbackURL?: string | undefined;
            }> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: import("better-auth/client").RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (import("better-auth/client").StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: import("better-auth/client").StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: import("better-auth").Prettify<{
            query: {
                token: string;
                callbackURL?: string | undefined;
            };
            fetchOptions?: FetchOptions | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<import("better-auth/client").BetterFetchResponse<{
            success: boolean;
            message: string;
        }, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    unlinkAccount: <FetchOptions extends {
        mode?: RequestMode | undefined;
        cache?: RequestCache | undefined;
        method?: string | undefined;
        headers?: (HeadersInit & (HeadersInit | {
            accept: "application/json" | "text/plain" | "application/octet-stream";
            "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
            authorization: "Bearer" | "Basic";
        })) | undefined;
        credentials?: RequestCredentials | undefined;
        integrity?: string | undefined;
        keepalive?: boolean | undefined;
        priority?: RequestPriority | undefined;
        redirect?: RequestRedirect | undefined;
        referrer?: string | undefined;
        referrerPolicy?: ReferrerPolicy | undefined;
        signal?: (AbortSignal | null) | undefined;
        window?: null | undefined;
        onRequest?: (<T extends Record<string, any>>(context: import("better-auth/client").RequestContext<T>) => Promise<import("better-auth/client").RequestContext | void> | import("better-auth/client").RequestContext | void) | undefined;
        onResponse?: ((context: import("better-auth/client").ResponseContext) => Promise<Response | void | import("better-auth/client").ResponseContext> | Response | import("better-auth/client").ResponseContext | void) | undefined;
        onSuccess?: ((context: import("better-auth/client").SuccessContext<any>) => Promise<void> | void) | undefined;
        onError?: ((context: import("better-auth/client").ErrorContext) => Promise<void> | void) | undefined;
        onRetry?: ((response: import("better-auth/client").ResponseContext) => Promise<void> | void) | undefined;
        hookOptions?: {
            cloneResponse?: boolean;
        } | undefined;
        timeout?: number | undefined;
        customFetchImpl?: import("better-auth/client").FetchEsque | undefined;
        plugins?: import("better-auth/client").BetterFetchPlugin[] | undefined;
        baseURL?: string | undefined;
        throw?: boolean | undefined;
        auth?: ({
            type: "Bearer";
            token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
        } | {
            type: "Basic";
            username: string | (() => string | undefined) | undefined;
            password: string | (() => string | undefined) | undefined;
        } | {
            type: "Custom";
            prefix: string | (() => string | undefined) | undefined;
            value: string | (() => string | undefined) | undefined;
        }) | undefined;
        body?: (Partial<{
            providerId: string;
            accountId?: string | undefined;
        }> & Record<string, any>) | undefined;
        query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
        params?: Record<string, any> | undefined;
        duplex?: "full" | "half" | undefined;
        jsonParser?: ((text: string) => Promise<any> | any) | undefined;
        retry?: import("better-auth/client").RetryOptions | undefined;
        retryAttempt?: number | undefined;
        output?: (import("better-auth/client").StandardSchemaV1 | typeof Blob | typeof File) | undefined;
        errorSchema?: import("better-auth/client").StandardSchemaV1 | undefined;
        disableValidation?: boolean | undefined;
    }>(data_0: import("better-auth").Prettify<{
        providerId: string;
        accountId?: string | undefined;
    } & {
        fetchOptions?: FetchOptions | undefined;
    }>, data_1?: FetchOptions | undefined) => Promise<import("better-auth/client").BetterFetchResponse<{
        status: boolean;
    }, {
        code?: string;
        message?: string;
    }, FetchOptions["throw"] extends true ? true : false>>;
} & {
    refreshToken: <FetchOptions extends {
        mode?: RequestMode | undefined;
        cache?: RequestCache | undefined;
        method?: string | undefined;
        headers?: (HeadersInit & (HeadersInit | {
            accept: "application/json" | "text/plain" | "application/octet-stream";
            "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
            authorization: "Bearer" | "Basic";
        })) | undefined;
        credentials?: RequestCredentials | undefined;
        integrity?: string | undefined;
        keepalive?: boolean | undefined;
        priority?: RequestPriority | undefined;
        redirect?: RequestRedirect | undefined;
        referrer?: string | undefined;
        referrerPolicy?: ReferrerPolicy | undefined;
        signal?: (AbortSignal | null) | undefined;
        window?: null | undefined;
        onRequest?: (<T extends Record<string, any>>(context: import("better-auth/client").RequestContext<T>) => Promise<import("better-auth/client").RequestContext | void> | import("better-auth/client").RequestContext | void) | undefined;
        onResponse?: ((context: import("better-auth/client").ResponseContext) => Promise<Response | void | import("better-auth/client").ResponseContext> | Response | import("better-auth/client").ResponseContext | void) | undefined;
        onSuccess?: ((context: import("better-auth/client").SuccessContext<any>) => Promise<void> | void) | undefined;
        onError?: ((context: import("better-auth/client").ErrorContext) => Promise<void> | void) | undefined;
        onRetry?: ((response: import("better-auth/client").ResponseContext) => Promise<void> | void) | undefined;
        hookOptions?: {
            cloneResponse?: boolean;
        } | undefined;
        timeout?: number | undefined;
        customFetchImpl?: import("better-auth/client").FetchEsque | undefined;
        plugins?: import("better-auth/client").BetterFetchPlugin[] | undefined;
        baseURL?: string | undefined;
        throw?: boolean | undefined;
        auth?: ({
            type: "Bearer";
            token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
        } | {
            type: "Basic";
            username: string | (() => string | undefined) | undefined;
            password: string | (() => string | undefined) | undefined;
        } | {
            type: "Custom";
            prefix: string | (() => string | undefined) | undefined;
            value: string | (() => string | undefined) | undefined;
        }) | undefined;
        body?: (Partial<{
            providerId: string;
            accountId?: string | undefined;
            userId?: string | undefined;
        }> & Record<string, any>) | undefined;
        query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
        params?: Record<string, any> | undefined;
        duplex?: "full" | "half" | undefined;
        jsonParser?: ((text: string) => Promise<any> | any) | undefined;
        retry?: import("better-auth/client").RetryOptions | undefined;
        retryAttempt?: number | undefined;
        output?: (import("better-auth/client").StandardSchemaV1 | typeof Blob | typeof File) | undefined;
        errorSchema?: import("better-auth/client").StandardSchemaV1 | undefined;
        disableValidation?: boolean | undefined;
    }>(data_0: import("better-auth").Prettify<{
        providerId: string;
        accountId?: string | undefined;
        userId?: string | undefined;
    } & {
        fetchOptions?: FetchOptions | undefined;
    }>, data_1?: FetchOptions | undefined) => Promise<import("better-auth/client").BetterFetchResponse<import("better-auth").OAuth2Tokens, {
        code?: string;
        message?: string;
    }, FetchOptions["throw"] extends true ? true : false>>;
} & {
    getAccessToken: <FetchOptions extends {
        mode?: RequestMode | undefined;
        cache?: RequestCache | undefined;
        method?: string | undefined;
        headers?: (HeadersInit & (HeadersInit | {
            accept: "application/json" | "text/plain" | "application/octet-stream";
            "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
            authorization: "Bearer" | "Basic";
        })) | undefined;
        credentials?: RequestCredentials | undefined;
        integrity?: string | undefined;
        keepalive?: boolean | undefined;
        priority?: RequestPriority | undefined;
        redirect?: RequestRedirect | undefined;
        referrer?: string | undefined;
        referrerPolicy?: ReferrerPolicy | undefined;
        signal?: (AbortSignal | null) | undefined;
        window?: null | undefined;
        onRequest?: (<T extends Record<string, any>>(context: import("better-auth/client").RequestContext<T>) => Promise<import("better-auth/client").RequestContext | void> | import("better-auth/client").RequestContext | void) | undefined;
        onResponse?: ((context: import("better-auth/client").ResponseContext) => Promise<Response | void | import("better-auth/client").ResponseContext> | Response | import("better-auth/client").ResponseContext | void) | undefined;
        onSuccess?: ((context: import("better-auth/client").SuccessContext<any>) => Promise<void> | void) | undefined;
        onError?: ((context: import("better-auth/client").ErrorContext) => Promise<void> | void) | undefined;
        onRetry?: ((response: import("better-auth/client").ResponseContext) => Promise<void> | void) | undefined;
        hookOptions?: {
            cloneResponse?: boolean;
        } | undefined;
        timeout?: number | undefined;
        customFetchImpl?: import("better-auth/client").FetchEsque | undefined;
        plugins?: import("better-auth/client").BetterFetchPlugin[] | undefined;
        baseURL?: string | undefined;
        throw?: boolean | undefined;
        auth?: ({
            type: "Bearer";
            token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
        } | {
            type: "Basic";
            username: string | (() => string | undefined) | undefined;
            password: string | (() => string | undefined) | undefined;
        } | {
            type: "Custom";
            prefix: string | (() => string | undefined) | undefined;
            value: string | (() => string | undefined) | undefined;
        }) | undefined;
        body?: (Partial<{
            providerId: string;
            accountId?: string | undefined;
            userId?: string | undefined;
        }> & Record<string, any>) | undefined;
        query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
        params?: Record<string, any> | undefined;
        duplex?: "full" | "half" | undefined;
        jsonParser?: ((text: string) => Promise<any> | any) | undefined;
        retry?: import("better-auth/client").RetryOptions | undefined;
        retryAttempt?: number | undefined;
        output?: (import("better-auth/client").StandardSchemaV1 | typeof Blob | typeof File) | undefined;
        errorSchema?: import("better-auth/client").StandardSchemaV1 | undefined;
        disableValidation?: boolean | undefined;
    }>(data_0: import("better-auth").Prettify<{
        providerId: string;
        accountId?: string | undefined;
        userId?: string | undefined;
    } & {
        fetchOptions?: FetchOptions | undefined;
    }>, data_1?: FetchOptions | undefined) => Promise<import("better-auth/client").BetterFetchResponse<{
        accessToken: string | undefined;
        accessTokenExpiresAt: Date | undefined;
        scopes: string[];
        idToken: string | undefined;
    }, {
        code?: string;
        message?: string;
    }, FetchOptions["throw"] extends true ? true : false>>;
} & {
    signUp: {
        email: <FetchOptions extends {
            mode?: RequestMode | undefined;
            cache?: RequestCache | undefined;
            method?: string | undefined;
            headers?: (HeadersInit & (HeadersInit | {
                accept: "application/json" | "text/plain" | "application/octet-stream";
                "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
                authorization: "Bearer" | "Basic";
            })) | undefined;
            credentials?: RequestCredentials | undefined;
            integrity?: string | undefined;
            keepalive?: boolean | undefined;
            priority?: RequestPriority | undefined;
            redirect?: RequestRedirect | undefined;
            referrer?: string | undefined;
            referrerPolicy?: ReferrerPolicy | undefined;
            signal?: (AbortSignal | null) | undefined;
            window?: null | undefined;
            onRequest?: (<T extends Record<string, any>>(context: import("better-auth/client").RequestContext<T>) => Promise<import("better-auth/client").RequestContext | void> | import("better-auth/client").RequestContext | void) | undefined;
            onResponse?: ((context: import("better-auth/client").ResponseContext) => Promise<Response | void | import("better-auth/client").ResponseContext> | Response | import("better-auth/client").ResponseContext | void) | undefined;
            onSuccess?: ((context: import("better-auth/client").SuccessContext<any>) => Promise<void> | void) | undefined;
            onError?: ((context: import("better-auth/client").ErrorContext) => Promise<void> | void) | undefined;
            onRetry?: ((response: import("better-auth/client").ResponseContext) => Promise<void> | void) | undefined;
            hookOptions?: {
                cloneResponse?: boolean;
            } | undefined;
            timeout?: number | undefined;
            customFetchImpl?: import("better-auth/client").FetchEsque | undefined;
            plugins?: import("better-auth/client").BetterFetchPlugin[] | undefined;
            baseURL?: string | undefined;
            throw?: boolean | undefined;
            auth?: ({
                type: "Bearer";
                token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
            } | {
                type: "Basic";
                username: string | (() => string | undefined) | undefined;
                password: string | (() => string | undefined) | undefined;
            } | {
                type: "Custom";
                prefix: string | (() => string | undefined) | undefined;
                value: string | (() => string | undefined) | undefined;
            }) | undefined;
            body?: (Partial<{
                name: string;
                email: string;
                password: string;
                callbackURL?: string;
            }> & Record<string, any>) | undefined;
            query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
            params?: Record<string, any> | undefined;
            duplex?: "full" | "half" | undefined;
            jsonParser?: ((text: string) => Promise<any> | any) | undefined;
            retry?: import("better-auth/client").RetryOptions | undefined;
            retryAttempt?: number | undefined;
            output?: (import("better-auth/client").StandardSchemaV1 | typeof Blob | typeof File) | undefined;
            errorSchema?: import("better-auth/client").StandardSchemaV1 | undefined;
            disableValidation?: boolean | undefined;
        }>(data_0: import("better-auth").Prettify<{
            email: string;
            name: string;
            password: string;
            image?: string;
            callbackURL?: string;
            fetchOptions?: FetchOptions | undefined;
        } & {
            birthday: Date;
        } & {} & {} & {} & {} & {
            username?: string | null | undefined;
            displayUsername?: string | null | undefined;
        } & {} & {
            bio?: string | null | undefined;
        }>, data_1?: FetchOptions | undefined) => Promise<import("better-auth/client").BetterFetchResponse<NonNullable<{
            token: null;
            user: {
                id: string;
                email: string;
                name: string;
                image: string | null | undefined;
                emailVerified: boolean;
                createdAt: Date;
                updatedAt: Date;
            };
        } | {
            token: string;
            user: {
                id: string;
                email: string;
                name: string;
                image: string | null | undefined;
                emailVerified: boolean;
                createdAt: Date;
                updatedAt: Date;
            };
        }>, {
            code?: string;
            message?: string;
        }, FetchOptions["throw"] extends true ? true : false>>;
    };
} & {
    updateUser: <FetchOptions extends {
        mode?: RequestMode | undefined;
        cache?: RequestCache | undefined;
        method?: string | undefined;
        headers?: (HeadersInit & (HeadersInit | {
            accept: "application/json" | "text/plain" | "application/octet-stream";
            "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
            authorization: "Bearer" | "Basic";
        })) | undefined;
        credentials?: RequestCredentials | undefined;
        integrity?: string | undefined;
        keepalive?: boolean | undefined;
        priority?: RequestPriority | undefined;
        redirect?: RequestRedirect | undefined;
        referrer?: string | undefined;
        referrerPolicy?: ReferrerPolicy | undefined;
        signal?: (AbortSignal | null) | undefined;
        window?: null | undefined;
        onRequest?: (<T extends Record<string, any>>(context: import("better-auth/client").RequestContext<T>) => Promise<import("better-auth/client").RequestContext | void> | import("better-auth/client").RequestContext | void) | undefined;
        onResponse?: ((context: import("better-auth/client").ResponseContext) => Promise<Response | void | import("better-auth/client").ResponseContext> | Response | import("better-auth/client").ResponseContext | void) | undefined;
        onSuccess?: ((context: import("better-auth/client").SuccessContext<any>) => Promise<void> | void) | undefined;
        onError?: ((context: import("better-auth/client").ErrorContext) => Promise<void> | void) | undefined;
        onRetry?: ((response: import("better-auth/client").ResponseContext) => Promise<void> | void) | undefined;
        hookOptions?: {
            cloneResponse?: boolean;
        } | undefined;
        timeout?: number | undefined;
        customFetchImpl?: import("better-auth/client").FetchEsque | undefined;
        plugins?: import("better-auth/client").BetterFetchPlugin[] | undefined;
        baseURL?: string | undefined;
        throw?: boolean | undefined;
        auth?: ({
            type: "Bearer";
            token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
        } | {
            type: "Basic";
            username: string | (() => string | undefined) | undefined;
            password: string | (() => string | undefined) | undefined;
        } | {
            type: "Custom";
            prefix: string | (() => string | undefined) | undefined;
            value: string | (() => string | undefined) | undefined;
        }) | undefined;
        body?: (Partial<Partial<{}> & {
            name?: string;
            image?: string;
        }> & Record<string, any>) | undefined;
        query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
        params?: Record<string, any> | undefined;
        duplex?: "full" | "half" | undefined;
        jsonParser?: ((text: string) => Promise<any> | any) | undefined;
        retry?: import("better-auth/client").RetryOptions | undefined;
        retryAttempt?: number | undefined;
        output?: (import("better-auth/client").StandardSchemaV1 | typeof Blob | typeof File) | undefined;
        errorSchema?: import("better-auth/client").StandardSchemaV1 | undefined;
        disableValidation?: boolean | undefined;
    }>(data_0?: import("better-auth").Prettify<{
        image?: string | null;
        name?: string;
        fetchOptions?: FetchOptions | undefined;
    } & Partial<{
        birthday: Date;
    } & {} & {} & {} & {} & {
        username?: string | null | undefined;
        displayUsername?: string | null | undefined;
    } & {} & {
        bio?: string | null | undefined;
    }>> | undefined, data_1?: FetchOptions | undefined) => Promise<import("better-auth/client").BetterFetchResponse<{
        status: boolean;
    }, {
        code?: string;
        message?: string;
    }, FetchOptions["throw"] extends true ? true : false>>;
} & {
    listSessions: <FetchOptions extends {
        mode?: RequestMode | undefined;
        cache?: RequestCache | undefined;
        method?: string | undefined;
        headers?: (HeadersInit & (HeadersInit | {
            accept: "application/json" | "text/plain" | "application/octet-stream";
            "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
            authorization: "Bearer" | "Basic";
        })) | undefined;
        credentials?: RequestCredentials | undefined;
        integrity?: string | undefined;
        keepalive?: boolean | undefined;
        priority?: RequestPriority | undefined;
        redirect?: RequestRedirect | undefined;
        referrer?: string | undefined;
        referrerPolicy?: ReferrerPolicy | undefined;
        signal?: (AbortSignal | null) | undefined;
        window?: null | undefined;
        onRequest?: (<T extends Record<string, any>>(context: import("better-auth/client").RequestContext<T>) => Promise<import("better-auth/client").RequestContext | void> | import("better-auth/client").RequestContext | void) | undefined;
        onResponse?: ((context: import("better-auth/client").ResponseContext) => Promise<Response | void | import("better-auth/client").ResponseContext> | Response | import("better-auth/client").ResponseContext | void) | undefined;
        onSuccess?: ((context: import("better-auth/client").SuccessContext<any>) => Promise<void> | void) | undefined;
        onError?: ((context: import("better-auth/client").ErrorContext) => Promise<void> | void) | undefined;
        onRetry?: ((response: import("better-auth/client").ResponseContext) => Promise<void> | void) | undefined;
        hookOptions?: {
            cloneResponse?: boolean;
        } | undefined;
        timeout?: number | undefined;
        customFetchImpl?: import("better-auth/client").FetchEsque | undefined;
        plugins?: import("better-auth/client").BetterFetchPlugin[] | undefined;
        baseURL?: string | undefined;
        throw?: boolean | undefined;
        auth?: ({
            type: "Bearer";
            token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
        } | {
            type: "Basic";
            username: string | (() => string | undefined) | undefined;
            password: string | (() => string | undefined) | undefined;
        } | {
            type: "Custom";
            prefix: string | (() => string | undefined) | undefined;
            value: string | (() => string | undefined) | undefined;
        }) | undefined;
        body?: undefined;
        query?: (Partial<Record<string, any>> & Record<string, any>) | undefined;
        params?: Record<string, any> | undefined;
        duplex?: "full" | "half" | undefined;
        jsonParser?: ((text: string) => Promise<any> | any) | undefined;
        retry?: import("better-auth/client").RetryOptions | undefined;
        retryAttempt?: number | undefined;
        output?: (import("better-auth/client").StandardSchemaV1 | typeof Blob | typeof File) | undefined;
        errorSchema?: import("better-auth/client").StandardSchemaV1 | undefined;
        disableValidation?: boolean | undefined;
    }>(data_0?: import("better-auth").Prettify<{
        query?: Record<string, any> | undefined;
        fetchOptions?: FetchOptions | undefined;
    }> | undefined, data_1?: FetchOptions | undefined) => Promise<import("better-auth/client").BetterFetchResponse<import("better-auth").Prettify<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        expiresAt: Date;
        token: string;
        ipAddress?: string | null | undefined | undefined;
        userAgent?: string | null | undefined | undefined;
    }>[], {
        code?: string;
        message?: string;
    }, FetchOptions["throw"] extends true ? true : false>>;
} & {
    admin: {
        checkRolePermission: <R extends "user" | "admin">(data: ({
            permission: {
                readonly user?: ("list" | "create" | "set-role" | "ban" | "impersonate" | "delete" | "set-password")[] | undefined;
                readonly session?: ("list" | "delete" | "revoke")[] | undefined;
            };
            permissions?: never;
        } | {
            permissions: {
                readonly user?: ("list" | "create" | "set-role" | "ban" | "impersonate" | "delete" | "set-password")[] | undefined;
                readonly session?: ("list" | "delete" | "revoke")[] | undefined;
            };
            permission?: never;
        }) & {
            role: R;
        }) => boolean;
    };
} & {
    useSession: import("better-auth/client").Atom<{
        data: {
            user: {
                id: string;
                name: string;
                email: string;
                emailVerified: boolean;
                createdAt: Date;
                updatedAt: Date;
                image?: string | null | undefined | undefined;
                birthday: Date;
                banned: boolean | null | undefined;
                role?: string | null | undefined;
                banReason?: string | null | undefined;
                banExpires?: Date | null | undefined;
                username?: string | null | undefined;
                displayUsername?: string | null | undefined;
                bio?: string | null | undefined;
            };
            session: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                expiresAt: Date;
                token: string;
                ipAddress?: string | null | undefined | undefined;
                userAgent?: string | null | undefined | undefined;
                impersonatedBy?: string | null | undefined;
            };
        } | null;
        error: import("better-auth/client").BetterFetchError | null;
        isPending: boolean;
    }>;
    $fetch: import("better-auth/client").BetterFetch<{
        plugins: (import("better-auth/client").BetterFetchPlugin | {
            id: string;
            name: string;
            hooks: {
                onSuccess(context: import("better-auth/client").SuccessContext<any>): void;
            };
        })[];
        method: string;
        headers?: (HeadersInit & (HeadersInit | {
            accept: "application/json" | "text/plain" | "application/octet-stream";
            "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
            authorization: "Bearer" | "Basic";
        })) | undefined;
        cache?: RequestCache;
        credentials?: RequestCredentials;
        integrity?: string;
        keepalive?: boolean;
        mode?: RequestMode;
        priority?: RequestPriority;
        redirect?: RequestRedirect;
        referrer?: string;
        referrerPolicy?: ReferrerPolicy;
        signal?: AbortSignal | null;
        window?: null;
        onRequest?: <T extends Record<string, any>>(context: import("better-auth/client").RequestContext<T>) => Promise<import("better-auth/client").RequestContext | void> | import("better-auth/client").RequestContext | void;
        onResponse?: (context: import("better-auth/client").ResponseContext) => Promise<Response | void | import("better-auth/client").ResponseContext> | Response | import("better-auth/client").ResponseContext | void;
        onSuccess?: ((context: import("better-auth/client").SuccessContext<any>) => Promise<void> | void) | undefined;
        onError?: (context: import("better-auth/client").ErrorContext) => Promise<void> | void;
        onRetry?: (response: import("better-auth/client").ResponseContext) => Promise<void> | void;
        hookOptions?: {
            cloneResponse?: boolean;
        };
        timeout?: number;
        customFetchImpl: import("better-auth/client").FetchEsque;
        baseURL: string;
        throw?: boolean;
        auth?: {
            type: "Bearer";
            token: string | Promise<string | undefined> | (() => string | Promise<string | undefined> | undefined) | undefined;
        } | {
            type: "Basic";
            username: string | (() => string | undefined) | undefined;
            password: string | (() => string | undefined) | undefined;
        } | {
            type: "Custom";
            prefix: string | (() => string | undefined) | undefined;
            value: string | (() => string | undefined) | undefined;
        };
        body?: any;
        query?: any;
        params?: any;
        duplex?: "full" | "half";
        jsonParser: (text: string) => Promise<any> | any;
        retry?: import("better-auth/client").RetryOptions;
        retryAttempt?: number;
        output?: import("better-auth/client").StandardSchemaV1 | typeof Blob | typeof File;
        errorSchema?: import("better-auth/client").StandardSchemaV1;
        disableValidation?: boolean;
    }, unknown, unknown, {}>;
    $store: {
        notify: (signal?: Omit<string, "$sessionSignal"> | "$sessionSignal") => void;
        listen: (signal: Omit<string, "$sessionSignal"> | "$sessionSignal", listener: (value: boolean, oldValue?: boolean | undefined) => void) => void;
        atoms: Record<string, import("better-auth/client").WritableAtom<any>>;
    };
    $Infer: {
        Session: {
            user: {
                id: string;
                name: string;
                email: string;
                emailVerified: boolean;
                createdAt: Date;
                updatedAt: Date;
                image?: string | null | undefined | undefined;
                birthday: Date;
                banned: boolean | null | undefined;
                role?: string | null | undefined;
                banReason?: string | null | undefined;
                banExpires?: Date | null | undefined;
                username?: string | null | undefined;
                displayUsername?: string | null | undefined;
                bio?: string | null | undefined;
            };
            session: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                expiresAt: Date;
                token: string;
                ipAddress?: string | null | undefined | undefined;
                userAgent?: string | null | undefined | undefined;
                impersonatedBy?: string | null | undefined;
            };
        };
    };
    $ERROR_CODES: {
        USER_NOT_FOUND: string;
        FAILED_TO_CREATE_USER: string;
        FAILED_TO_CREATE_SESSION: string;
        FAILED_TO_UPDATE_USER: string;
        FAILED_TO_GET_SESSION: string;
        INVALID_PASSWORD: string;
        INVALID_EMAIL: string;
        INVALID_EMAIL_OR_PASSWORD: string;
        SOCIAL_ACCOUNT_ALREADY_LINKED: string;
        PROVIDER_NOT_FOUND: string;
        INVALID_TOKEN: string;
        ID_TOKEN_NOT_SUPPORTED: string;
        FAILED_TO_GET_USER_INFO: string;
        USER_EMAIL_NOT_FOUND: string;
        EMAIL_NOT_VERIFIED: string;
        PASSWORD_TOO_SHORT: string;
        PASSWORD_TOO_LONG: string;
        USER_ALREADY_EXISTS: string;
        EMAIL_CAN_NOT_BE_UPDATED: string;
        CREDENTIAL_ACCOUNT_NOT_FOUND: string;
        SESSION_EXPIRED: string;
        FAILED_TO_UNLINK_LAST_ACCOUNT: string;
        ACCOUNT_NOT_FOUND: string;
    };
};
//# sourceMappingURL=client.d.ts.map