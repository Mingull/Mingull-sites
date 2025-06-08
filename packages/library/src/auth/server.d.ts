export declare const auth: {
    handler: (request: Request) => Promise<Response>;
    api: import("better-auth").InferAPI<{
        ok: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0?: ({
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: import("better-auth").Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }) | undefined): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    ok: boolean;
                };
            } : {
                ok: boolean;
            }>;
            options: {
                method: "GET";
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                ok: {
                                                    type: string;
                                                    description: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                    isAction: false;
                };
            } & {
                use: any[];
            };
            path: "/ok";
        };
        error: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0?: ({
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: import("better-auth").Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }) | undefined): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: Response;
            } : Response>;
            options: {
                method: "GET";
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "text/html": {
                                        schema: {
                                            type: "string";
                                            description: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                    isAction: false;
                };
            } & {
                use: any[];
            };
            path: "/error";
        };
        signInSocial: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
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
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: import("better-auth").Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
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
                };
            } : {
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
            }>;
            options: {
                method: "POST";
                body: import("better-auth").ZodObject<{
                    callbackURL: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                    newUserCallbackURL: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                    errorCallbackURL: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                    provider: import("better-auth").ZodEnum<["github", ...("apple" | "discord" | "facebook" | "github" | "google" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "kick" | "zoom")[]]>;
                    disableRedirect: import("better-auth").ZodOptional<import("better-auth").ZodBoolean>;
                    idToken: import("better-auth").ZodOptional<import("better-auth").ZodObject<{
                        token: import("better-auth").ZodString;
                        nonce: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                        accessToken: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                        refreshToken: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                        expiresAt: import("better-auth").ZodOptional<import("better-auth").ZodNumber>;
                    }, "strip", import("better-auth").ZodTypeAny, {
                        token: string;
                        refreshToken?: string | undefined;
                        accessToken?: string | undefined;
                        expiresAt?: number | undefined;
                        nonce?: string | undefined;
                    }, {
                        token: string;
                        refreshToken?: string | undefined;
                        accessToken?: string | undefined;
                        expiresAt?: number | undefined;
                        nonce?: string | undefined;
                    }>>;
                    scopes: import("better-auth").ZodOptional<import("better-auth").ZodArray<import("better-auth").ZodString, "many">>;
                    requestSignUp: import("better-auth").ZodOptional<import("better-auth").ZodBoolean>;
                    loginHint: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                }, "strip", import("better-auth").ZodTypeAny, {
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
                }, {
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
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        operationId: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            description: string;
                                            properties: {
                                                redirect: {
                                                    type: string;
                                                    enum: boolean[];
                                                };
                                                token: {
                                                    type: string;
                                                    description: string;
                                                    url: {
                                                        type: string;
                                                        nullable: boolean;
                                                    };
                                                    user: {
                                                        type: string;
                                                        properties: {
                                                            id: {
                                                                type: string;
                                                            };
                                                            email: {
                                                                type: string;
                                                            };
                                                            name: {
                                                                type: string;
                                                                nullable: boolean;
                                                            };
                                                            image: {
                                                                type: string;
                                                                nullable: boolean;
                                                            };
                                                            emailVerified: {
                                                                type: string;
                                                            };
                                                            createdAt: {
                                                                type: string;
                                                                format: string;
                                                            };
                                                            updatedAt: {
                                                                type: string;
                                                                format: string;
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/sign-in/social";
        };
        callbackOAuth: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body?: {
                    state?: string | undefined;
                    code?: string | undefined;
                    device_id?: string | undefined;
                    error?: string | undefined;
                    user?: string | undefined;
                    error_description?: string | undefined;
                } | undefined;
            } & {
                method: "GET" | "POST";
            } & {
                query?: {
                    state?: string | undefined;
                    code?: string | undefined;
                    device_id?: string | undefined;
                    error?: string | undefined;
                    user?: string | undefined;
                    error_description?: string | undefined;
                } | undefined;
            } & {
                params: {
                    id: string;
                };
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: import("better-auth").Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: void;
            } : void>;
            options: {
                method: ("GET" | "POST")[];
                body: import("better-auth").ZodOptional<import("better-auth").ZodObject<{
                    code: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                    error: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                    device_id: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                    error_description: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                    state: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                    user: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                }, "strip", import("better-auth").ZodTypeAny, {
                    state?: string | undefined;
                    code?: string | undefined;
                    device_id?: string | undefined;
                    error?: string | undefined;
                    user?: string | undefined;
                    error_description?: string | undefined;
                }, {
                    state?: string | undefined;
                    code?: string | undefined;
                    device_id?: string | undefined;
                    error?: string | undefined;
                    user?: string | undefined;
                    error_description?: string | undefined;
                }>>;
                query: import("better-auth").ZodOptional<import("better-auth").ZodObject<{
                    code: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                    error: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                    device_id: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                    error_description: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                    state: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                    user: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                }, "strip", import("better-auth").ZodTypeAny, {
                    state?: string | undefined;
                    code?: string | undefined;
                    device_id?: string | undefined;
                    error?: string | undefined;
                    user?: string | undefined;
                    error_description?: string | undefined;
                }, {
                    state?: string | undefined;
                    code?: string | undefined;
                    device_id?: string | undefined;
                    error?: string | undefined;
                    user?: string | undefined;
                    error_description?: string | undefined;
                }>>;
                metadata: {
                    isAction: false;
                };
            } & {
                use: any[];
            };
            path: "/callback/:id";
        };
        getSession: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
                query?: {
                    disableCookieCache?: string | boolean | undefined;
                    disableRefresh?: string | boolean | undefined;
                } | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: import("better-auth").Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    session: {
                        id: string;
                        createdAt: Date;
                        updatedAt: Date;
                        userId: string;
                        expiresAt: Date;
                        token: string;
                        ipAddress?: string | null | undefined | undefined;
                        userAgent?: string | null | undefined | undefined;
                    } & {
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
                    user: {
                        id: string;
                        name: string;
                        email: string;
                        emailVerified: boolean;
                        createdAt: Date;
                        updatedAt: Date;
                        image?: string | null | undefined | undefined;
                        bio?: string | null | undefined;
                    } & {
                        id: string;
                        name: string;
                        email: string;
                        emailVerified: boolean;
                        createdAt: Date;
                        updatedAt: Date;
                        image?: string | null | undefined | undefined;
                        birthday: Date;
                        bio?: string | null | undefined;
                    } & {
                        id: string;
                        name: string;
                        email: string;
                        emailVerified: boolean;
                        createdAt: Date;
                        updatedAt: Date;
                        image?: string | null | undefined | undefined;
                        banned: boolean | null | undefined;
                        role?: string | null | undefined;
                        banReason?: string | null | undefined;
                        banExpires?: Date | null | undefined;
                        bio?: string | null | undefined;
                    } & {
                        id: string;
                        name: string;
                        email: string;
                        emailVerified: boolean;
                        createdAt: Date;
                        updatedAt: Date;
                        image?: string | null | undefined | undefined;
                        username?: string | null | undefined;
                        displayUsername?: string | null | undefined;
                        bio?: string | null | undefined;
                    };
                } | null;
            } : {
                session: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    userId: string;
                    expiresAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined | undefined;
                    userAgent?: string | null | undefined | undefined;
                } & {
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
                user: {
                    id: string;
                    name: string;
                    email: string;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                    image?: string | null | undefined | undefined;
                    bio?: string | null | undefined;
                } & {
                    id: string;
                    name: string;
                    email: string;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                    image?: string | null | undefined | undefined;
                    birthday: Date;
                    bio?: string | null | undefined;
                } & {
                    id: string;
                    name: string;
                    email: string;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                    image?: string | null | undefined | undefined;
                    banned: boolean | null | undefined;
                    role?: string | null | undefined;
                    banReason?: string | null | undefined;
                    banExpires?: Date | null | undefined;
                    bio?: string | null | undefined;
                } & {
                    id: string;
                    name: string;
                    email: string;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                    image?: string | null | undefined | undefined;
                    username?: string | null | undefined;
                    displayUsername?: string | null | undefined;
                    bio?: string | null | undefined;
                };
            } | null>;
            options: {
                method: "GET";
                query: import("better-auth").ZodOptional<import("better-auth").ZodObject<{
                    disableCookieCache: import("better-auth").ZodOptional<import("better-auth").ZodOptional<import("better-auth").ZodUnion<[import("better-auth").ZodBoolean, import("better-auth").ZodEffects<import("better-auth").ZodString, boolean, string>]>>>;
                    disableRefresh: import("better-auth").ZodOptional<import("better-auth").ZodUnion<[import("better-auth").ZodBoolean, import("better-auth").ZodEffects<import("better-auth").ZodString, boolean, string>]>>;
                }, "strip", import("better-auth").ZodTypeAny, {
                    disableCookieCache?: boolean | undefined;
                    disableRefresh?: boolean | undefined;
                }, {
                    disableCookieCache?: string | boolean | undefined;
                    disableRefresh?: string | boolean | undefined;
                }>>;
                requireHeaders: true;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                session: {
                                                    $ref: string;
                                                };
                                                user: {
                                                    $ref: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/get-session";
        };
        signOut: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body?: undefined;
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: import("better-auth").Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    success: boolean;
                };
            } : {
                success: boolean;
            }>;
            options: {
                method: "POST";
                requireHeaders: true;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                success: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/sign-out";
        };
        signUpEmail: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: ({
                    name: string;
                    email: string;
                    password: string;
                    callbackURL?: string;
                } & ({} | ({
                    birthday: Date;
                } & {
                    birthday?: Date | null | undefined;
                }) | ({} & {}) | ({} & {
                    username?: string | null | undefined;
                    displayUsername?: string | null | undefined;
                }))) & {} & {
                    bio?: string | null | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: import("better-auth").Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
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
                };
            } : {
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
            }>;
            options: {
                method: "POST";
                body: import("better-auth").ZodRecord<import("better-auth").ZodString, import("better-auth").ZodAny>;
                metadata: {
                    $Infer: {
                        body: ({
                            name: string;
                            email: string;
                            password: string;
                            callbackURL?: string;
                        } & ({} | ({
                            birthday: Date;
                        } & {
                            birthday?: Date | null | undefined;
                        }) | ({} & {}) | ({} & {
                            username?: string | null | undefined;
                            displayUsername?: string | null | undefined;
                        }))) & {} & {
                            bio?: string | null | undefined;
                        };
                    };
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            email: {
                                                type: string;
                                                description: string;
                                            };
                                            password: {
                                                type: string;
                                                description: string;
                                            };
                                            callbackURL: {
                                                type: string;
                                                description: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                            };
                        };
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                token: {
                                                    type: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                user: {
                                                    type: string;
                                                    properties: {
                                                        id: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        email: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                        name: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        image: {
                                                            type: string;
                                                            format: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        emailVerified: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        createdAt: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                        updatedAt: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                    };
                                                    required: string[];
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/sign-up/email";
        };
        signInEmail: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    password: string;
                    email: string;
                    callbackURL?: string | undefined;
                    rememberMe?: boolean | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: import("better-auth").Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
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
                };
            } : {
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
            }>;
            options: {
                method: "POST";
                body: import("better-auth").ZodObject<{
                    email: import("better-auth").ZodString;
                    password: import("better-auth").ZodString;
                    callbackURL: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                    rememberMe: import("better-auth").ZodOptional<import("better-auth").ZodDefault<import("better-auth").ZodBoolean>>;
                }, "strip", import("better-auth").ZodTypeAny, {
                    password: string;
                    email: string;
                    callbackURL?: string | undefined;
                    rememberMe?: boolean | undefined;
                }, {
                    password: string;
                    email: string;
                    callbackURL?: string | undefined;
                    rememberMe?: boolean | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            description: string;
                                            properties: {
                                                redirect: {
                                                    type: string;
                                                    enum: boolean[];
                                                };
                                                token: {
                                                    type: string;
                                                    description: string;
                                                };
                                                url: {
                                                    type: string;
                                                    nullable: boolean;
                                                };
                                                user: {
                                                    type: string;
                                                    properties: {
                                                        id: {
                                                            type: string;
                                                        };
                                                        email: {
                                                            type: string;
                                                        };
                                                        name: {
                                                            type: string;
                                                            nullable: boolean;
                                                        };
                                                        image: {
                                                            type: string;
                                                            nullable: boolean;
                                                        };
                                                        emailVerified: {
                                                            type: string;
                                                        };
                                                        createdAt: {
                                                            type: string;
                                                            format: string;
                                                        };
                                                        updatedAt: {
                                                            type: string;
                                                            format: string;
                                                        };
                                                    };
                                                    required: string[];
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/sign-in/email";
        };
        forgetPassword: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    email: string;
                    redirectTo?: string | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: import("better-auth").Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: import("better-auth").ZodObject<{
                    email: import("better-auth").ZodString;
                    redirectTo: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                }, "strip", import("better-auth").ZodTypeAny, {
                    email: string;
                    redirectTo?: string | undefined;
                }, {
                    email: string;
                    redirectTo?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/forget-password";
        };
        resetPassword: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    newPassword: string;
                    token?: string | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: {
                    token?: string | undefined;
                } | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: import("better-auth").Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                query: import("better-auth").ZodOptional<import("better-auth").ZodObject<{
                    token: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                }, "strip", import("better-auth").ZodTypeAny, {
                    token?: string | undefined;
                }, {
                    token?: string | undefined;
                }>>;
                body: import("better-auth").ZodObject<{
                    newPassword: import("better-auth").ZodString;
                    token: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                }, "strip", import("better-auth").ZodTypeAny, {
                    newPassword: string;
                    token?: string | undefined;
                }, {
                    newPassword: string;
                    token?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/reset-password";
        };
        verifyEmail: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
                query: {
                    token: string;
                    callbackURL?: string | undefined;
                };
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: import("better-auth").Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: void | {
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
                };
            } : void | {
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
            }>;
            options: {
                method: "GET";
                query: import("better-auth").ZodObject<{
                    token: import("better-auth").ZodString;
                    callbackURL: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                }, "strip", import("better-auth").ZodTypeAny, {
                    token: string;
                    callbackURL?: string | undefined;
                }, {
                    token: string;
                    callbackURL?: string | undefined;
                }>;
                use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<void>)[];
                metadata: {
                    openapi: {
                        description: string;
                        parameters: ({
                            name: string;
                            in: "query";
                            description: string;
                            required: true;
                            schema: {
                                type: "string";
                            };
                        } | {
                            name: string;
                            in: "query";
                            description: string;
                            required: false;
                            schema: {
                                type: "string";
                            };
                        })[];
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                user: {
                                                    type: string;
                                                    properties: {
                                                        id: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        email: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        name: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        image: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        emailVerified: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        createdAt: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        updatedAt: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                    };
                                                    required: string[];
                                                };
                                                status: {
                                                    type: string;
                                                    description: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/verify-email";
        };
        sendVerificationEmail: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    email: string;
                    callbackURL?: string | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: import("better-auth").Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: import("better-auth").ZodObject<{
                    email: import("better-auth").ZodString;
                    callbackURL: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                }, "strip", import("better-auth").ZodTypeAny, {
                    email: string;
                    callbackURL?: string | undefined;
                }, {
                    email: string;
                    callbackURL?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            email: {
                                                type: string;
                                                description: string;
                                                example: string;
                                            };
                                            callbackURL: {
                                                type: string;
                                                description: string;
                                                example: string;
                                                nullable: boolean;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                            };
                        };
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                    description: string;
                                                    example: boolean;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                            "400": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                message: {
                                                    type: string;
                                                    description: string;
                                                    example: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/send-verification-email";
        };
        changeEmail: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    newEmail: string;
                    callbackURL?: string | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: import("better-auth").Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: import("better-auth").ZodObject<{
                    newEmail: import("better-auth").ZodString;
                    callbackURL: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                }, "strip", import("better-auth").ZodTypeAny, {
                    newEmail: string;
                    callbackURL?: string | undefined;
                }, {
                    newEmail: string;
                    callbackURL?: string | undefined;
                }>;
                use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    openapi: {
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                    description: string;
                                                };
                                                message: {
                                                    type: string;
                                                    enum: string[];
                                                    description: string;
                                                    nullable: boolean;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/change-email";
        };
        changePassword: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    newPassword: string;
                    currentPassword: string;
                    revokeOtherSessions?: boolean | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: import("better-auth").Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
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
                };
            } : {
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
            }>;
            options: {
                method: "POST";
                body: import("better-auth").ZodObject<{
                    newPassword: import("better-auth").ZodString;
                    currentPassword: import("better-auth").ZodString;
                    revokeOtherSessions: import("better-auth").ZodOptional<import("better-auth").ZodBoolean>;
                }, "strip", import("better-auth").ZodTypeAny, {
                    newPassword: string;
                    currentPassword: string;
                    revokeOtherSessions?: boolean | undefined;
                }, {
                    newPassword: string;
                    currentPassword: string;
                    revokeOtherSessions?: boolean | undefined;
                }>;
                use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                token: {
                                                    type: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                user: {
                                                    type: string;
                                                    properties: {
                                                        id: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        email: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                        name: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        image: {
                                                            type: string;
                                                            format: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        emailVerified: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        createdAt: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                        updatedAt: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                    };
                                                    required: string[];
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/change-password";
        };
        setPassword: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    newPassword: string;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: import("better-auth").Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: import("better-auth").ZodObject<{
                    newPassword: import("better-auth").ZodString;
                }, "strip", import("better-auth").ZodTypeAny, {
                    newPassword: string;
                }, {
                    newPassword: string;
                }>;
                metadata: {
                    SERVER_ONLY: true;
                };
                use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
            } & {
                use: any[];
            };
            path: "/set-password";
        };
        updateUser: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: Partial<import("better-auth").AdditionalUserFieldsInput<{
                    database: (options: import("better-auth").BetterAuthOptions) => import("better-auth").Adapter;
                    basePath: string;
                    user: {
                        additionalFields: {
                            bio: {
                                type: "string";
                                nullable: boolean;
                                required: false;
                            };
                        };
                    };
                    account: {
                        accountLinking: {
                            enabled: true;
                            trustedProviders: ("github" | "discord" | "email-password")[];
                        };
                    };
                    advanced: {
                        crossSubDomainCookies: {
                            enabled: true;
                            domain: string | undefined;
                        };
                    };
                    trustedOrigins: string[];
                    onAPIError: {
                        onError(error: unknown): void;
                    };
                    emailAndPassword: {
                        enabled: true;
                    };
                    socialProviders: {
                        discord: {
                            clientId: string;
                            clientSecret: string;
                        };
                        github: {
                            clientId: string;
                            clientSecret: string;
                        };
                    };
                    plugins: ({
                        id: "account-details";
                        schema: {
                            account: {
                                fields: {
                                    metadata: {
                                        type: "string";
                                        required: false;
                                        transform: {
                                            input: (value: string | number | boolean | string[] | Date | number[] | null | undefined) => string | number | boolean | string[] | Date | number[] | null | undefined;
                                            output: (value: string | number | boolean | string[] | Date | number[] | null | undefined) => string | number | boolean | string[] | Date | number[] | null | undefined;
                                        };
                                    };
                                };
                            };
                        };
                        hooks: {
                            before: {
                                matcher: (ctx: import("better-auth").HookEndpointContext) => boolean;
                                handler: (inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                                    context: import("better-auth").MiddlewareContext<import("better-auth").MiddlewareOptions, import("better-auth").AuthContext & {
                                        returned?: unknown;
                                        responseHeaders?: Headers;
                                    }>;
                                }>;
                            }[];
                            after: {
                                matcher: (ctx: import("better-auth").HookEndpointContext) => boolean;
                                handler: (inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                                    context: import("better-auth").MiddlewareContext<import("better-auth").MiddlewareOptions, import("better-auth").AuthContext & {
                                        returned?: unknown;
                                        responseHeaders?: Headers;
                                    }>;
                                }>;
                            }[];
                        };
                    } | {
                        id: "birthdayPlugin";
                        schema: {
                            user: {
                                fields: {
                                    birthday: {
                                        type: "date";
                                        required: true;
                                        unique: false;
                                    };
                                };
                            };
                        };
                        hooks: {
                            before: {
                                matcher: (context: import("better-auth").HookEndpointContext) => boolean;
                                handler: (inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                                    context: import("better-auth").MiddlewareContext<import("better-auth").MiddlewareOptions, import("better-auth").AuthContext & {
                                        returned?: unknown;
                                        responseHeaders?: Headers;
                                    }>;
                                }>;
                            }[];
                        };
                    } | {
                        id: "admin";
                        init(): {
                            options: {
                                databaseHooks: {
                                    user: {
                                        create: {
                                            before(user: {
                                                id: string;
                                                name: string;
                                                email: string;
                                                emailVerified: boolean;
                                                createdAt: Date;
                                                updatedAt: Date;
                                                image?: string | null | undefined;
                                            }): Promise<{
                                                data: {
                                                    id: string;
                                                    name: string;
                                                    email: string;
                                                    emailVerified: boolean;
                                                    createdAt: Date;
                                                    updatedAt: Date;
                                                    image?: string | null | undefined;
                                                    role: string;
                                                };
                                            }>;
                                        };
                                    };
                                    session: {
                                        create: {
                                            before(session: {
                                                id: string;
                                                createdAt: Date;
                                                updatedAt: Date;
                                                userId: string;
                                                expiresAt: Date;
                                                token: string;
                                                ipAddress?: string | null | undefined;
                                                userAgent?: string | null | undefined;
                                            }, ctx: import("better-auth").GenericEndpointContext | undefined): Promise<void>;
                                        };
                                    };
                                };
                            };
                        };
                        hooks: {
                            after: {
                                matcher(context: import("better-auth").HookEndpointContext): boolean;
                                handler: (inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<import("better-auth/plugins").SessionWithImpersonatedBy[] | undefined>;
                            }[];
                        };
                        endpoints: {
                            setRole: {
                                <AsResponse_1 extends boolean = false, ReturnHeaders_1 extends boolean = false>(inputCtx_0: {
                                    body: {
                                        userId: string;
                                        role: "user" | "admin" | ("user" | "admin")[];
                                    };
                                } & {
                                    method?: "POST" | undefined;
                                } & {
                                    query?: Record<string, any> | undefined;
                                } & {
                                    params?: Record<string, any>;
                                } & {
                                    request?: Request;
                                } & {
                                    headers?: HeadersInit;
                                } & {
                                    asResponse?: boolean;
                                    returnHeaders?: boolean;
                                    use?: import("better-auth").Middleware[];
                                    path?: string;
                                } & {
                                    asResponse?: AsResponse_1 | undefined;
                                    returnHeaders?: ReturnHeaders_1 | undefined;
                                }): Promise<[AsResponse_1] extends [true] ? Response : [ReturnHeaders_1] extends [true] ? {
                                    headers: Headers;
                                    response: {
                                        user: import("better-auth/plugins").UserWithRole;
                                    };
                                } : {
                                    user: import("better-auth/plugins").UserWithRole;
                                }>;
                                options: {
                                    method: "POST";
                                    body: import("better-auth").ZodObject<{
                                        userId: import("better-auth").ZodString;
                                        role: import("better-auth").ZodUnion<[import("better-auth").ZodString, import("better-auth").ZodArray<import("better-auth").ZodString, "many">]>;
                                    }, "strip", import("better-auth").ZodTypeAny, {
                                        userId: string;
                                        role: string | string[];
                                    }, {
                                        userId: string;
                                        role: string | string[];
                                    }>;
                                    use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                                        session: {
                                            user: import("better-auth/plugins").UserWithRole;
                                            session: import("better-auth").Session;
                                        };
                                    }>)[];
                                    metadata: {
                                        openapi: {
                                            operationId: string;
                                            summary: string;
                                            description: string;
                                            responses: {
                                                200: {
                                                    description: string;
                                                    content: {
                                                        "application/json": {
                                                            schema: {
                                                                type: "object";
                                                                properties: {
                                                                    user: {
                                                                        $ref: string;
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                        $Infer: {
                                            body: {
                                                userId: string;
                                                role: "user" | "admin" | ("user" | "admin")[];
                                            };
                                        };
                                    };
                                } & {
                                    use: any[];
                                };
                                path: "/admin/set-role";
                            };
                            createUser: {
                                <AsResponse_1 extends boolean = false, ReturnHeaders_2 extends boolean = false>(inputCtx_0: {
                                    body: {
                                        email: string;
                                        password: string;
                                        name: string;
                                        role?: "user" | "admin" | ("user" | "admin")[] | undefined;
                                        data?: Record<string, any>;
                                    };
                                } & {
                                    method?: "POST" | undefined;
                                } & {
                                    query?: Record<string, any> | undefined;
                                } & {
                                    params?: Record<string, any>;
                                } & {
                                    request?: Request;
                                } & {
                                    headers?: HeadersInit;
                                } & {
                                    asResponse?: boolean;
                                    returnHeaders?: boolean;
                                    use?: import("better-auth").Middleware[];
                                    path?: string;
                                } & {
                                    asResponse?: AsResponse_1 | undefined;
                                    returnHeaders?: ReturnHeaders_2 | undefined;
                                }): Promise<[AsResponse_1] extends [true] ? Response : [ReturnHeaders_2] extends [true] ? {
                                    headers: Headers;
                                    response: {
                                        user: import("better-auth/plugins").UserWithRole;
                                    };
                                } : {
                                    user: import("better-auth/plugins").UserWithRole;
                                }>;
                                options: {
                                    method: "POST";
                                    body: import("better-auth").ZodObject<{
                                        email: import("better-auth").ZodString;
                                        password: import("better-auth").ZodString;
                                        name: import("better-auth").ZodString;
                                        role: import("better-auth").ZodOptional<import("better-auth").ZodUnion<[import("better-auth").ZodString, import("better-auth").ZodArray<import("better-auth").ZodString, "many">]>>;
                                        data: import("better-auth").ZodOptional<import("better-auth").ZodRecord<import("better-auth").ZodString, import("better-auth").ZodAny>>;
                                    }, "strip", import("better-auth").ZodTypeAny, {
                                        password: string;
                                        name: string;
                                        email: string;
                                        data?: Record<string, any> | undefined;
                                        role?: string | string[] | undefined;
                                    }, {
                                        password: string;
                                        name: string;
                                        email: string;
                                        data?: Record<string, any> | undefined;
                                        role?: string | string[] | undefined;
                                    }>;
                                    metadata: {
                                        openapi: {
                                            operationId: string;
                                            summary: string;
                                            description: string;
                                            responses: {
                                                200: {
                                                    description: string;
                                                    content: {
                                                        "application/json": {
                                                            schema: {
                                                                type: "object";
                                                                properties: {
                                                                    user: {
                                                                        $ref: string;
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                        $Infer: {
                                            body: {
                                                email: string;
                                                password: string;
                                                name: string;
                                                role?: "user" | "admin" | ("user" | "admin")[] | undefined;
                                                data?: Record<string, any>;
                                            };
                                        };
                                    };
                                } & {
                                    use: any[];
                                };
                                path: "/admin/create-user";
                            };
                            listUsers: {
                                <AsResponse_1 extends boolean = false, ReturnHeaders_3 extends boolean = false>(inputCtx_0: {
                                    body?: undefined;
                                } & {
                                    method?: "GET" | undefined;
                                } & {
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
                                } & {
                                    params?: Record<string, any>;
                                } & {
                                    request?: Request;
                                } & {
                                    headers?: HeadersInit;
                                } & {
                                    asResponse?: boolean;
                                    returnHeaders?: boolean;
                                    use?: import("better-auth").Middleware[];
                                    path?: string;
                                } & {
                                    asResponse?: AsResponse_1 | undefined;
                                    returnHeaders?: ReturnHeaders_3 | undefined;
                                }): Promise<[AsResponse_1] extends [true] ? Response : [ReturnHeaders_3] extends [true] ? {
                                    headers: Headers;
                                    response: {
                                        users: import("better-auth/plugins").UserWithRole[];
                                        total: number;
                                        limit: number | undefined;
                                        offset: number | undefined;
                                    } | {
                                        users: never[];
                                        total: number;
                                    };
                                } : {
                                    users: import("better-auth/plugins").UserWithRole[];
                                    total: number;
                                    limit: number | undefined;
                                    offset: number | undefined;
                                } | {
                                    users: never[];
                                    total: number;
                                }>;
                                options: {
                                    method: "GET";
                                    use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                                        session: {
                                            user: import("better-auth/plugins").UserWithRole;
                                            session: import("better-auth").Session;
                                        };
                                    }>)[];
                                    query: import("better-auth").ZodObject<{
                                        searchValue: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                                        searchField: import("better-auth").ZodOptional<import("better-auth").ZodEnum<["email", "name"]>>;
                                        searchOperator: import("better-auth").ZodOptional<import("better-auth").ZodEnum<["contains", "starts_with", "ends_with"]>>;
                                        limit: import("better-auth").ZodOptional<import("better-auth").ZodUnion<[import("better-auth").ZodString, import("better-auth").ZodNumber]>>;
                                        offset: import("better-auth").ZodOptional<import("better-auth").ZodUnion<[import("better-auth").ZodString, import("better-auth").ZodNumber]>>;
                                        sortBy: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                                        sortDirection: import("better-auth").ZodOptional<import("better-auth").ZodEnum<["asc", "desc"]>>;
                                        filterField: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                                        filterValue: import("better-auth").ZodOptional<import("better-auth").ZodUnion<[import("better-auth").ZodUnion<[import("better-auth").ZodString, import("better-auth").ZodNumber]>, import("better-auth").ZodBoolean]>>;
                                        filterOperator: import("better-auth").ZodOptional<import("better-auth").ZodEnum<["eq", "ne", "lt", "lte", "gt", "gte"]>>;
                                    }, "strip", import("better-auth").ZodTypeAny, {
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
                                    }, {
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
                                    }>;
                                    metadata: {
                                        openapi: {
                                            operationId: string;
                                            summary: string;
                                            description: string;
                                            responses: {
                                                200: {
                                                    description: string;
                                                    content: {
                                                        "application/json": {
                                                            schema: {
                                                                type: "object";
                                                                properties: {
                                                                    users: {
                                                                        type: string;
                                                                        items: {
                                                                            $ref: string;
                                                                        };
                                                                    };
                                                                    total: {
                                                                        type: string;
                                                                    };
                                                                    limit: {
                                                                        type: string;
                                                                    };
                                                                    offset: {
                                                                        type: string;
                                                                    };
                                                                };
                                                                required: string[];
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                } & {
                                    use: any[];
                                };
                                path: "/admin/list-users";
                            };
                            listUserSessions: {
                                <AsResponse_1 extends boolean = false, ReturnHeaders_4 extends boolean = false>(inputCtx_0: {
                                    body: {
                                        userId: string;
                                    };
                                } & {
                                    method?: "POST" | undefined;
                                } & {
                                    query?: Record<string, any> | undefined;
                                } & {
                                    params?: Record<string, any>;
                                } & {
                                    request?: Request;
                                } & {
                                    headers?: HeadersInit;
                                } & {
                                    asResponse?: boolean;
                                    returnHeaders?: boolean;
                                    use?: import("better-auth").Middleware[];
                                    path?: string;
                                } & {
                                    asResponse?: AsResponse_1 | undefined;
                                    returnHeaders?: ReturnHeaders_4 | undefined;
                                }): Promise<[AsResponse_1] extends [true] ? Response : [ReturnHeaders_4] extends [true] ? {
                                    headers: Headers;
                                    response: {
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
                                    };
                                } : {
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
                                }>;
                                options: {
                                    method: "POST";
                                    use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                                        session: {
                                            user: import("better-auth/plugins").UserWithRole;
                                            session: import("better-auth").Session;
                                        };
                                    }>)[];
                                    body: import("better-auth").ZodObject<{
                                        userId: import("better-auth").ZodString;
                                    }, "strip", import("better-auth").ZodTypeAny, {
                                        userId: string;
                                    }, {
                                        userId: string;
                                    }>;
                                    metadata: {
                                        openapi: {
                                            operationId: string;
                                            summary: string;
                                            description: string;
                                            responses: {
                                                200: {
                                                    description: string;
                                                    content: {
                                                        "application/json": {
                                                            schema: {
                                                                type: "object";
                                                                properties: {
                                                                    sessions: {
                                                                        type: string;
                                                                        items: {
                                                                            $ref: string;
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                } & {
                                    use: any[];
                                };
                                path: "/admin/list-user-sessions";
                            };
                            unbanUser: {
                                <AsResponse_1 extends boolean = false, ReturnHeaders_5 extends boolean = false>(inputCtx_0: {
                                    body: {
                                        userId: string;
                                    };
                                } & {
                                    method?: "POST" | undefined;
                                } & {
                                    query?: Record<string, any> | undefined;
                                } & {
                                    params?: Record<string, any>;
                                } & {
                                    request?: Request;
                                } & {
                                    headers?: HeadersInit;
                                } & {
                                    asResponse?: boolean;
                                    returnHeaders?: boolean;
                                    use?: import("better-auth").Middleware[];
                                    path?: string;
                                } & {
                                    asResponse?: AsResponse_1 | undefined;
                                    returnHeaders?: ReturnHeaders_5 | undefined;
                                }): Promise<[AsResponse_1] extends [true] ? Response : [ReturnHeaders_5] extends [true] ? {
                                    headers: Headers;
                                    response: {
                                        user: any;
                                    };
                                } : {
                                    user: any;
                                }>;
                                options: {
                                    method: "POST";
                                    body: import("better-auth").ZodObject<{
                                        userId: import("better-auth").ZodString;
                                    }, "strip", import("better-auth").ZodTypeAny, {
                                        userId: string;
                                    }, {
                                        userId: string;
                                    }>;
                                    use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                                        session: {
                                            user: import("better-auth/plugins").UserWithRole;
                                            session: import("better-auth").Session;
                                        };
                                    }>)[];
                                    metadata: {
                                        openapi: {
                                            operationId: string;
                                            summary: string;
                                            description: string;
                                            responses: {
                                                200: {
                                                    description: string;
                                                    content: {
                                                        "application/json": {
                                                            schema: {
                                                                type: "object";
                                                                properties: {
                                                                    user: {
                                                                        $ref: string;
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                } & {
                                    use: any[];
                                };
                                path: "/admin/unban-user";
                            };
                            banUser: {
                                <AsResponse_1 extends boolean = false, ReturnHeaders_6 extends boolean = false>(inputCtx_0: {
                                    body: {
                                        userId: string;
                                        banReason?: string | undefined;
                                        banExpiresIn?: number | undefined;
                                    };
                                } & {
                                    method?: "POST" | undefined;
                                } & {
                                    query?: Record<string, any> | undefined;
                                } & {
                                    params?: Record<string, any>;
                                } & {
                                    request?: Request;
                                } & {
                                    headers?: HeadersInit;
                                } & {
                                    asResponse?: boolean;
                                    returnHeaders?: boolean;
                                    use?: import("better-auth").Middleware[];
                                    path?: string;
                                } & {
                                    asResponse?: AsResponse_1 | undefined;
                                    returnHeaders?: ReturnHeaders_6 | undefined;
                                }): Promise<[AsResponse_1] extends [true] ? Response : [ReturnHeaders_6] extends [true] ? {
                                    headers: Headers;
                                    response: {
                                        user: any;
                                    };
                                } : {
                                    user: any;
                                }>;
                                options: {
                                    method: "POST";
                                    body: import("better-auth").ZodObject<{
                                        userId: import("better-auth").ZodString;
                                        banReason: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                                        banExpiresIn: import("better-auth").ZodOptional<import("better-auth").ZodNumber>;
                                    }, "strip", import("better-auth").ZodTypeAny, {
                                        userId: string;
                                        banReason?: string | undefined;
                                        banExpiresIn?: number | undefined;
                                    }, {
                                        userId: string;
                                        banReason?: string | undefined;
                                        banExpiresIn?: number | undefined;
                                    }>;
                                    use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                                        session: {
                                            user: import("better-auth/plugins").UserWithRole;
                                            session: import("better-auth").Session;
                                        };
                                    }>)[];
                                    metadata: {
                                        openapi: {
                                            operationId: string;
                                            summary: string;
                                            description: string;
                                            responses: {
                                                200: {
                                                    description: string;
                                                    content: {
                                                        "application/json": {
                                                            schema: {
                                                                type: "object";
                                                                properties: {
                                                                    user: {
                                                                        $ref: string;
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                } & {
                                    use: any[];
                                };
                                path: "/admin/ban-user";
                            };
                            impersonateUser: {
                                <AsResponse_1 extends boolean = false, ReturnHeaders_7 extends boolean = false>(inputCtx_0: {
                                    body: {
                                        userId: string;
                                    };
                                } & {
                                    method?: "POST" | undefined;
                                } & {
                                    query?: Record<string, any> | undefined;
                                } & {
                                    params?: Record<string, any>;
                                } & {
                                    request?: Request;
                                } & {
                                    headers?: HeadersInit;
                                } & {
                                    asResponse?: boolean;
                                    returnHeaders?: boolean;
                                    use?: import("better-auth").Middleware[];
                                    path?: string;
                                } & {
                                    asResponse?: AsResponse_1 | undefined;
                                    returnHeaders?: ReturnHeaders_7 | undefined;
                                }): Promise<[AsResponse_1] extends [true] ? Response : [ReturnHeaders_7] extends [true] ? {
                                    headers: Headers;
                                    response: {
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
                                    };
                                } : {
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
                                }>;
                                options: {
                                    method: "POST";
                                    body: import("better-auth").ZodObject<{
                                        userId: import("better-auth").ZodString;
                                    }, "strip", import("better-auth").ZodTypeAny, {
                                        userId: string;
                                    }, {
                                        userId: string;
                                    }>;
                                    use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                                        session: {
                                            user: import("better-auth/plugins").UserWithRole;
                                            session: import("better-auth").Session;
                                        };
                                    }>)[];
                                    metadata: {
                                        openapi: {
                                            operationId: string;
                                            summary: string;
                                            description: string;
                                            responses: {
                                                200: {
                                                    description: string;
                                                    content: {
                                                        "application/json": {
                                                            schema: {
                                                                type: "object";
                                                                properties: {
                                                                    session: {
                                                                        $ref: string;
                                                                    };
                                                                    user: {
                                                                        $ref: string;
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                } & {
                                    use: any[];
                                };
                                path: "/admin/impersonate-user";
                            };
                            stopImpersonating: {
                                <AsResponse_1 extends boolean = false, ReturnHeaders_8 extends boolean = false>(inputCtx_0?: ({
                                    body?: undefined;
                                } & {
                                    method?: "POST" | undefined;
                                } & {
                                    query?: Record<string, any> | undefined;
                                } & {
                                    params?: Record<string, any>;
                                } & {
                                    request?: Request;
                                } & {
                                    headers?: HeadersInit;
                                } & {
                                    asResponse?: boolean;
                                    returnHeaders?: boolean;
                                    use?: import("better-auth").Middleware[];
                                    path?: string;
                                } & {
                                    asResponse?: AsResponse_1 | undefined;
                                    returnHeaders?: ReturnHeaders_8 | undefined;
                                }) | undefined): Promise<[AsResponse_1] extends [true] ? Response : [ReturnHeaders_8] extends [true] ? {
                                    headers: Headers;
                                    response: {
                                        session: import("better-auth").Session & Record<string, any>;
                                        user: import("better-auth").User & Record<string, any>;
                                    };
                                } : {
                                    session: import("better-auth").Session & Record<string, any>;
                                    user: import("better-auth").User & Record<string, any>;
                                }>;
                                options: {
                                    method: "POST";
                                } & {
                                    use: any[];
                                };
                                path: "/admin/stop-impersonating";
                            };
                            revokeUserSession: {
                                <AsResponse_1 extends boolean = false, ReturnHeaders_9 extends boolean = false>(inputCtx_0: {
                                    body: {
                                        sessionToken: string;
                                    };
                                } & {
                                    method?: "POST" | undefined;
                                } & {
                                    query?: Record<string, any> | undefined;
                                } & {
                                    params?: Record<string, any>;
                                } & {
                                    request?: Request;
                                } & {
                                    headers?: HeadersInit;
                                } & {
                                    asResponse?: boolean;
                                    returnHeaders?: boolean;
                                    use?: import("better-auth").Middleware[];
                                    path?: string;
                                } & {
                                    asResponse?: AsResponse_1 | undefined;
                                    returnHeaders?: ReturnHeaders_9 | undefined;
                                }): Promise<[AsResponse_1] extends [true] ? Response : [ReturnHeaders_9] extends [true] ? {
                                    headers: Headers;
                                    response: {
                                        success: boolean;
                                    };
                                } : {
                                    success: boolean;
                                }>;
                                options: {
                                    method: "POST";
                                    body: import("better-auth").ZodObject<{
                                        sessionToken: import("better-auth").ZodString;
                                    }, "strip", import("better-auth").ZodTypeAny, {
                                        sessionToken: string;
                                    }, {
                                        sessionToken: string;
                                    }>;
                                    use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                                        session: {
                                            user: import("better-auth/plugins").UserWithRole;
                                            session: import("better-auth").Session;
                                        };
                                    }>)[];
                                    metadata: {
                                        openapi: {
                                            operationId: string;
                                            summary: string;
                                            description: string;
                                            responses: {
                                                200: {
                                                    description: string;
                                                    content: {
                                                        "application/json": {
                                                            schema: {
                                                                type: "object";
                                                                properties: {
                                                                    success: {
                                                                        type: string;
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                } & {
                                    use: any[];
                                };
                                path: "/admin/revoke-user-session";
                            };
                            revokeUserSessions: {
                                <AsResponse_1 extends boolean = false, ReturnHeaders_10 extends boolean = false>(inputCtx_0: {
                                    body: {
                                        userId: string;
                                    };
                                } & {
                                    method?: "POST" | undefined;
                                } & {
                                    query?: Record<string, any> | undefined;
                                } & {
                                    params?: Record<string, any>;
                                } & {
                                    request?: Request;
                                } & {
                                    headers?: HeadersInit;
                                } & {
                                    asResponse?: boolean;
                                    returnHeaders?: boolean;
                                    use?: import("better-auth").Middleware[];
                                    path?: string;
                                } & {
                                    asResponse?: AsResponse_1 | undefined;
                                    returnHeaders?: ReturnHeaders_10 | undefined;
                                }): Promise<[AsResponse_1] extends [true] ? Response : [ReturnHeaders_10] extends [true] ? {
                                    headers: Headers;
                                    response: {
                                        success: boolean;
                                    };
                                } : {
                                    success: boolean;
                                }>;
                                options: {
                                    method: "POST";
                                    body: import("better-auth").ZodObject<{
                                        userId: import("better-auth").ZodString;
                                    }, "strip", import("better-auth").ZodTypeAny, {
                                        userId: string;
                                    }, {
                                        userId: string;
                                    }>;
                                    use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                                        session: {
                                            user: import("better-auth/plugins").UserWithRole;
                                            session: import("better-auth").Session;
                                        };
                                    }>)[];
                                    metadata: {
                                        openapi: {
                                            operationId: string;
                                            summary: string;
                                            description: string;
                                            responses: {
                                                200: {
                                                    description: string;
                                                    content: {
                                                        "application/json": {
                                                            schema: {
                                                                type: "object";
                                                                properties: {
                                                                    success: {
                                                                        type: string;
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                } & {
                                    use: any[];
                                };
                                path: "/admin/revoke-user-sessions";
                            };
                            removeUser: {
                                <AsResponse_1 extends boolean = false, ReturnHeaders_11 extends boolean = false>(inputCtx_0: {
                                    body: {
                                        userId: string;
                                    };
                                } & {
                                    method?: "POST" | undefined;
                                } & {
                                    query?: Record<string, any> | undefined;
                                } & {
                                    params?: Record<string, any>;
                                } & {
                                    request?: Request;
                                } & {
                                    headers?: HeadersInit;
                                } & {
                                    asResponse?: boolean;
                                    returnHeaders?: boolean;
                                    use?: import("better-auth").Middleware[];
                                    path?: string;
                                } & {
                                    asResponse?: AsResponse_1 | undefined;
                                    returnHeaders?: ReturnHeaders_11 | undefined;
                                }): Promise<[AsResponse_1] extends [true] ? Response : [ReturnHeaders_11] extends [true] ? {
                                    headers: Headers;
                                    response: {
                                        success: boolean;
                                    };
                                } : {
                                    success: boolean;
                                }>;
                                options: {
                                    method: "POST";
                                    body: import("better-auth").ZodObject<{
                                        userId: import("better-auth").ZodString;
                                    }, "strip", import("better-auth").ZodTypeAny, {
                                        userId: string;
                                    }, {
                                        userId: string;
                                    }>;
                                    use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                                        session: {
                                            user: import("better-auth/plugins").UserWithRole;
                                            session: import("better-auth").Session;
                                        };
                                    }>)[];
                                    metadata: {
                                        openapi: {
                                            operationId: string;
                                            summary: string;
                                            description: string;
                                            responses: {
                                                200: {
                                                    description: string;
                                                    content: {
                                                        "application/json": {
                                                            schema: {
                                                                type: "object";
                                                                properties: {
                                                                    success: {
                                                                        type: string;
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                } & {
                                    use: any[];
                                };
                                path: "/admin/remove-user";
                            };
                            setUserPassword: {
                                <AsResponse_1 extends boolean = false, ReturnHeaders_12 extends boolean = false>(inputCtx_0: {
                                    body: {
                                        userId: string;
                                        newPassword: string;
                                    };
                                } & {
                                    method?: "POST" | undefined;
                                } & {
                                    query?: Record<string, any> | undefined;
                                } & {
                                    params?: Record<string, any>;
                                } & {
                                    request?: Request;
                                } & {
                                    headers?: HeadersInit;
                                } & {
                                    asResponse?: boolean;
                                    returnHeaders?: boolean;
                                    use?: import("better-auth").Middleware[];
                                    path?: string;
                                } & {
                                    asResponse?: AsResponse_1 | undefined;
                                    returnHeaders?: ReturnHeaders_12 | undefined;
                                }): Promise<[AsResponse_1] extends [true] ? Response : [ReturnHeaders_12] extends [true] ? {
                                    headers: Headers;
                                    response: {
                                        status: boolean;
                                    };
                                } : {
                                    status: boolean;
                                }>;
                                options: {
                                    method: "POST";
                                    body: import("better-auth").ZodObject<{
                                        newPassword: import("better-auth").ZodString;
                                        userId: import("better-auth").ZodString;
                                    }, "strip", import("better-auth").ZodTypeAny, {
                                        userId: string;
                                        newPassword: string;
                                    }, {
                                        userId: string;
                                        newPassword: string;
                                    }>;
                                    use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                                        session: {
                                            user: import("better-auth/plugins").UserWithRole;
                                            session: import("better-auth").Session;
                                        };
                                    }>)[];
                                    metadata: {
                                        openapi: {
                                            operationId: string;
                                            summary: string;
                                            description: string;
                                            responses: {
                                                200: {
                                                    description: string;
                                                    content: {
                                                        "application/json": {
                                                            schema: {
                                                                type: "object";
                                                                properties: {
                                                                    status: {
                                                                        type: string;
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                } & {
                                    use: any[];
                                };
                                path: "/admin/set-user-password";
                            };
                            userHasPermission: {
                                <AsResponse_1 extends boolean = false, ReturnHeaders_13 extends boolean = false>(inputCtx_0: {
                                    body: ({
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
                                    };
                                } & {
                                    method?: "POST" | undefined;
                                } & {
                                    query?: Record<string, any> | undefined;
                                } & {
                                    params?: Record<string, any>;
                                } & {
                                    request?: Request;
                                } & {
                                    headers?: HeadersInit;
                                } & {
                                    asResponse?: boolean;
                                    returnHeaders?: boolean;
                                    use?: import("better-auth").Middleware[];
                                    path?: string;
                                } & {
                                    asResponse?: AsResponse_1 | undefined;
                                    returnHeaders?: ReturnHeaders_13 | undefined;
                                }): Promise<[AsResponse_1] extends [true] ? Response : [ReturnHeaders_13] extends [true] ? {
                                    headers: Headers;
                                    response: {
                                        error: null;
                                        success: boolean;
                                    };
                                } : {
                                    error: null;
                                    success: boolean;
                                }>;
                                options: {
                                    method: "POST";
                                    body: import("better-auth").ZodIntersection<import("better-auth").ZodObject<{
                                        userId: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                                        role: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                                    }, "strip", import("better-auth").ZodTypeAny, {
                                        userId?: string | undefined;
                                        role?: string | undefined;
                                    }, {
                                        userId?: string | undefined;
                                        role?: string | undefined;
                                    }>, import("better-auth").ZodUnion<[import("better-auth").ZodObject<{
                                        permission: import("better-auth").ZodRecord<import("better-auth").ZodString, import("better-auth").ZodArray<import("better-auth").ZodString, "many">>;
                                        permissions: import("better-auth").ZodUndefined;
                                    }, "strip", import("better-auth").ZodTypeAny, {
                                        permission: Record<string, string[]>;
                                        permissions?: undefined;
                                    }, {
                                        permission: Record<string, string[]>;
                                        permissions?: undefined;
                                    }>, import("better-auth").ZodObject<{
                                        permission: import("better-auth").ZodUndefined;
                                        permissions: import("better-auth").ZodRecord<import("better-auth").ZodString, import("better-auth").ZodArray<import("better-auth").ZodString, "many">>;
                                    }, "strip", import("better-auth").ZodTypeAny, {
                                        permissions: Record<string, string[]>;
                                        permission?: undefined;
                                    }, {
                                        permissions: Record<string, string[]>;
                                        permission?: undefined;
                                    }>]>>;
                                    metadata: {
                                        openapi: {
                                            description: string;
                                            requestBody: {
                                                content: {
                                                    "application/json": {
                                                        schema: {
                                                            type: "object";
                                                            properties: {
                                                                permission: {
                                                                    type: string;
                                                                    description: string;
                                                                    deprecated: boolean;
                                                                };
                                                                permissions: {
                                                                    type: string;
                                                                    description: string;
                                                                };
                                                            };
                                                            required: string[];
                                                        };
                                                    };
                                                };
                                            };
                                            responses: {
                                                "200": {
                                                    description: string;
                                                    content: {
                                                        "application/json": {
                                                            schema: {
                                                                type: "object";
                                                                properties: {
                                                                    error: {
                                                                        type: string;
                                                                    };
                                                                    success: {
                                                                        type: string;
                                                                    };
                                                                };
                                                                required: string[];
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                        $Infer: {
                                            body: ({
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
                                            };
                                        };
                                    };
                                } & {
                                    use: any[];
                                };
                                path: "/admin/has-permission";
                            };
                        };
                        $ERROR_CODES: {
                            readonly FAILED_TO_CREATE_USER: "Failed to create user";
                            readonly USER_ALREADY_EXISTS: "User already exists";
                            readonly YOU_CANNOT_BAN_YOURSELF: "You cannot ban yourself";
                            readonly YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE: "You are not allowed to change users role";
                            readonly YOU_ARE_NOT_ALLOWED_TO_CREATE_USERS: "You are not allowed to create users";
                            readonly YOU_ARE_NOT_ALLOWED_TO_LIST_USERS: "You are not allowed to list users";
                            readonly YOU_ARE_NOT_ALLOWED_TO_LIST_USERS_SESSIONS: "You are not allowed to list users sessions";
                            readonly YOU_ARE_NOT_ALLOWED_TO_BAN_USERS: "You are not allowed to ban users";
                            readonly YOU_ARE_NOT_ALLOWED_TO_IMPERSONATE_USERS: "You are not allowed to impersonate users";
                            readonly YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS: "You are not allowed to revoke users sessions";
                            readonly YOU_ARE_NOT_ALLOWED_TO_DELETE_USERS: "You are not allowed to delete users";
                            readonly YOU_ARE_NOT_ALLOWED_TO_SET_USERS_PASSWORD: "You are not allowed to set users password";
                            readonly BANNED_USER: "You have been banned from this application";
                        };
                        schema: {
                            user: {
                                fields: {
                                    role: {
                                        type: "string";
                                        required: false;
                                        input: false;
                                    };
                                    banned: {
                                        type: "boolean";
                                        defaultValue: false;
                                        required: false;
                                        input: false;
                                    };
                                    banReason: {
                                        type: "string";
                                        required: false;
                                        input: false;
                                    };
                                    banExpires: {
                                        type: "date";
                                        required: false;
                                        input: false;
                                    };
                                };
                            };
                            session: {
                                fields: {
                                    impersonatedBy: {
                                        type: "string";
                                        required: false;
                                    };
                                };
                            };
                        };
                    } | {
                        id: "api-key";
                        $ERROR_CODES: {
                            INVALID_METADATA_TYPE: string;
                            REFILL_AMOUNT_AND_INTERVAL_REQUIRED: string;
                            REFILL_INTERVAL_AND_AMOUNT_REQUIRED: string;
                            USER_BANNED: string;
                            UNAUTHORIZED_SESSION: string;
                            KEY_NOT_FOUND: string;
                            KEY_DISABLED: string;
                            KEY_EXPIRED: string;
                            USAGE_EXCEEDED: string;
                            KEY_NOT_RECOVERABLE: string;
                            EXPIRES_IN_IS_TOO_SMALL: string;
                            EXPIRES_IN_IS_TOO_LARGE: string;
                            INVALID_REMAINING: string;
                            INVALID_PREFIX_LENGTH: string;
                            INVALID_NAME_LENGTH: string;
                            METADATA_DISABLED: string;
                            RATE_LIMIT_EXCEEDED: string;
                            NO_VALUES_TO_UPDATE: string;
                            KEY_DISABLED_EXPIRATION: string;
                            INVALID_API_KEY: string;
                            INVALID_USER_ID_FROM_API_KEY: string;
                            INVALID_API_KEY_GETTER_RETURN_TYPE: string;
                            SERVER_ONLY_PROPERTY: string;
                        };
                        hooks: {
                            before: {
                                matcher: (ctx: import("better-auth").HookEndpointContext) => boolean;
                                handler: (inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                                    user: {
                                        id: string;
                                        name: string;
                                        email: string;
                                        emailVerified: boolean;
                                        createdAt: Date;
                                        updatedAt: Date;
                                        image?: string | null | undefined;
                                    };
                                    session: {
                                        id: string;
                                        token: string;
                                        userId: string;
                                        userAgent: string | null;
                                        ipAddress: string | null;
                                        createdAt: Date;
                                        updatedAt: Date;
                                        expiresAt: Date;
                                    };
                                } | {
                                    context: import("better-auth").MiddlewareContext<import("better-auth").MiddlewareOptions, import("better-auth").AuthContext & {
                                        returned?: unknown;
                                        responseHeaders?: Headers;
                                    }>;
                                }>;
                            }[];
                        };
                        endpoints: {
                            createApiKey: {
                                <AsResponse_1 extends boolean = false, ReturnHeaders_14 extends boolean = false>(inputCtx_0: {
                                    body: {
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
                                    };
                                } & {
                                    method?: "POST" | undefined;
                                } & {
                                    query?: Record<string, any> | undefined;
                                } & {
                                    params?: Record<string, any>;
                                } & {
                                    request?: Request;
                                } & {
                                    headers?: HeadersInit;
                                } & {
                                    asResponse?: boolean;
                                    returnHeaders?: boolean;
                                    use?: import("better-auth").Middleware[];
                                    path?: string;
                                } & {
                                    asResponse?: AsResponse_1 | undefined;
                                    returnHeaders?: ReturnHeaders_14 | undefined;
                                }): Promise<[AsResponse_1] extends [true] ? Response : [ReturnHeaders_14] extends [true] ? {
                                    headers: Headers;
                                    response: {
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
                                    };
                                } : {
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
                                }>;
                                options: {
                                    method: "POST";
                                    body: import("better-auth").ZodObject<{
                                        name: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                                        expiresIn: import("better-auth").ZodDefault<import("better-auth").ZodNullable<import("better-auth").ZodOptional<import("better-auth").ZodNumber>>>;
                                        userId: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                                        prefix: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                                        remaining: import("better-auth").ZodDefault<import("better-auth").ZodNullable<import("better-auth").ZodOptional<import("better-auth").ZodNumber>>>;
                                        metadata: import("better-auth").ZodOptional<import("better-auth").ZodAny>;
                                        refillAmount: import("better-auth").ZodOptional<import("better-auth").ZodNumber>;
                                        refillInterval: import("better-auth").ZodOptional<import("better-auth").ZodNumber>;
                                        rateLimitTimeWindow: import("better-auth").ZodOptional<import("better-auth").ZodNumber>;
                                        rateLimitMax: import("better-auth").ZodOptional<import("better-auth").ZodNumber>;
                                        rateLimitEnabled: import("better-auth").ZodOptional<import("better-auth").ZodBoolean>;
                                        permissions: import("better-auth").ZodOptional<import("better-auth").ZodRecord<import("better-auth").ZodString, import("better-auth").ZodArray<import("better-auth").ZodString, "many">>>;
                                    }, "strip", import("better-auth").ZodTypeAny, {
                                        expiresIn: number | null;
                                        remaining: number | null;
                                        metadata?: any;
                                        name?: string | undefined;
                                        userId?: string | undefined;
                                        prefix?: string | undefined;
                                        permissions?: Record<string, string[]> | undefined;
                                        rateLimitMax?: number | undefined;
                                        refillInterval?: number | undefined;
                                        refillAmount?: number | undefined;
                                        rateLimitEnabled?: boolean | undefined;
                                        rateLimitTimeWindow?: number | undefined;
                                    }, {
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
                                    }>;
                                    metadata: {
                                        openapi: {
                                            description: string;
                                            responses: {
                                                "200": {
                                                    description: string;
                                                    content: {
                                                        "application/json": {
                                                            schema: {
                                                                type: "object";
                                                                properties: {
                                                                    id: {
                                                                        type: string;
                                                                        description: string;
                                                                    };
                                                                    createdAt: {
                                                                        type: string;
                                                                        format: string;
                                                                        description: string;
                                                                    };
                                                                    updatedAt: {
                                                                        type: string;
                                                                        format: string;
                                                                        description: string;
                                                                    };
                                                                    name: {
                                                                        type: string;
                                                                        nullable: boolean;
                                                                        description: string;
                                                                    };
                                                                    prefix: {
                                                                        type: string;
                                                                        nullable: boolean;
                                                                        description: string;
                                                                    };
                                                                    start: {
                                                                        type: string;
                                                                        nullable: boolean;
                                                                        description: string;
                                                                    };
                                                                    key: {
                                                                        type: string;
                                                                        description: string;
                                                                    };
                                                                    enabled: {
                                                                        type: string;
                                                                        description: string;
                                                                    };
                                                                    expiresAt: {
                                                                        type: string;
                                                                        format: string;
                                                                        nullable: boolean;
                                                                        description: string;
                                                                    };
                                                                    userId: {
                                                                        type: string;
                                                                        description: string;
                                                                    };
                                                                    lastRefillAt: {
                                                                        type: string;
                                                                        format: string;
                                                                        nullable: boolean;
                                                                        description: string;
                                                                    };
                                                                    lastRequest: {
                                                                        type: string;
                                                                        format: string;
                                                                        nullable: boolean;
                                                                        description: string;
                                                                    };
                                                                    metadata: {
                                                                        type: string;
                                                                        nullable: boolean;
                                                                        additionalProperties: boolean;
                                                                        description: string;
                                                                    };
                                                                    rateLimitMax: {
                                                                        type: string;
                                                                        nullable: boolean;
                                                                        description: string;
                                                                    };
                                                                    rateLimitTimeWindow: {
                                                                        type: string;
                                                                        nullable: boolean;
                                                                        description: string;
                                                                    };
                                                                    remaining: {
                                                                        type: string;
                                                                        nullable: boolean;
                                                                        description: string;
                                                                    };
                                                                    refillAmount: {
                                                                        type: string;
                                                                        nullable: boolean;
                                                                        description: string;
                                                                    };
                                                                    refillInterval: {
                                                                        type: string;
                                                                        nullable: boolean;
                                                                        description: string;
                                                                    };
                                                                    rateLimitEnabled: {
                                                                        type: string;
                                                                        description: string;
                                                                    };
                                                                    requestCount: {
                                                                        type: string;
                                                                        description: string;
                                                                    };
                                                                    permissions: {
                                                                        type: string;
                                                                        nullable: boolean;
                                                                        additionalProperties: {
                                                                            type: string;
                                                                            items: {
                                                                                type: string;
                                                                            };
                                                                        };
                                                                        description: string;
                                                                    };
                                                                };
                                                                required: string[];
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                } & {
                                    use: any[];
                                };
                                path: "/api-key/create";
                            };
                            verifyApiKey: {
                                <AsResponse_1 extends boolean = false, ReturnHeaders_15 extends boolean = false>(inputCtx_0: {
                                    body: {
                                        key: string;
                                        permissions?: Record<string, string[]> | undefined;
                                    };
                                } & {
                                    method?: "POST" | undefined;
                                } & {
                                    query?: Record<string, any> | undefined;
                                } & {
                                    params?: Record<string, any>;
                                } & {
                                    request?: Request;
                                } & {
                                    headers?: HeadersInit;
                                } & {
                                    asResponse?: boolean;
                                    returnHeaders?: boolean;
                                    use?: import("better-auth").Middleware[];
                                    path?: string;
                                } & {
                                    asResponse?: AsResponse_1 | undefined;
                                    returnHeaders?: ReturnHeaders_15 | undefined;
                                }): Promise<[AsResponse_1] extends [true] ? Response : [ReturnHeaders_15] extends [true] ? {
                                    headers: Headers;
                                    response: {
                                        valid: boolean;
                                        error: {
                                            message: string;
                                            code: "KEY_NOT_FOUND";
                                        };
                                        key: null;
                                    } | {
                                        valid: boolean;
                                        error: {
                                            message: string;
                                            code: "KEY_DISABLED";
                                        };
                                        key: null;
                                    } | {
                                        valid: boolean;
                                        error: {
                                            message: string;
                                            code: "KEY_EXPIRED";
                                        };
                                        key: null;
                                    } | {
                                        valid: boolean;
                                        error: {
                                            message: string;
                                            code: "USAGE_EXCEEDED";
                                        };
                                        key: null;
                                    } | {
                                        valid: boolean;
                                        error: {
                                            message: string | null;
                                            code: "RATE_LIMITED";
                                            details: {
                                                tryAgainIn: number | null;
                                            };
                                        };
                                        key: null;
                                    } | {
                                        valid: boolean;
                                        error: null;
                                        key: Omit<{
                                            id: string;
                                            name: string | null;
                                            start: string | null;
                                            prefix: string | null;
                                            key: string;
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
                                            permissions?: {
                                                [key: string]: string[];
                                            } | null;
                                        }, "key"> | null;
                                    };
                                } : {
                                    valid: boolean;
                                    error: {
                                        message: string;
                                        code: "KEY_NOT_FOUND";
                                    };
                                    key: null;
                                } | {
                                    valid: boolean;
                                    error: {
                                        message: string;
                                        code: "KEY_DISABLED";
                                    };
                                    key: null;
                                } | {
                                    valid: boolean;
                                    error: {
                                        message: string;
                                        code: "KEY_EXPIRED";
                                    };
                                    key: null;
                                } | {
                                    valid: boolean;
                                    error: {
                                        message: string;
                                        code: "USAGE_EXCEEDED";
                                    };
                                    key: null;
                                } | {
                                    valid: boolean;
                                    error: {
                                        message: string | null;
                                        code: "RATE_LIMITED";
                                        details: {
                                            tryAgainIn: number | null;
                                        };
                                    };
                                    key: null;
                                } | {
                                    valid: boolean;
                                    error: null;
                                    key: Omit<{
                                        id: string;
                                        name: string | null;
                                        start: string | null;
                                        prefix: string | null;
                                        key: string;
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
                                        permissions?: {
                                            [key: string]: string[];
                                        } | null;
                                    }, "key"> | null;
                                }>;
                                options: {
                                    method: "POST";
                                    body: import("better-auth").ZodObject<{
                                        key: import("better-auth").ZodString;
                                        permissions: import("better-auth").ZodOptional<import("better-auth").ZodRecord<import("better-auth").ZodString, import("better-auth").ZodArray<import("better-auth").ZodString, "many">>>;
                                    }, "strip", import("better-auth").ZodTypeAny, {
                                        key: string;
                                        permissions?: Record<string, string[]> | undefined;
                                    }, {
                                        key: string;
                                        permissions?: Record<string, string[]> | undefined;
                                    }>;
                                    metadata: {
                                        SERVER_ONLY: true;
                                    };
                                } & {
                                    use: any[];
                                };
                                path: "/api-key/verify";
                            };
                            getApiKey: {
                                <AsResponse_1 extends boolean = false, ReturnHeaders_16 extends boolean = false>(inputCtx_0: {
                                    body?: undefined;
                                } & {
                                    method?: "GET" | undefined;
                                } & {
                                    query: {
                                        id: string;
                                    };
                                } & {
                                    params?: Record<string, any>;
                                } & {
                                    request?: Request;
                                } & {
                                    headers?: HeadersInit;
                                } & {
                                    asResponse?: boolean;
                                    returnHeaders?: boolean;
                                    use?: import("better-auth").Middleware[];
                                    path?: string;
                                } & {
                                    asResponse?: AsResponse_1 | undefined;
                                    returnHeaders?: ReturnHeaders_16 | undefined;
                                }): Promise<[AsResponse_1] extends [true] ? Response : [ReturnHeaders_16] extends [true] ? {
                                    headers: Headers;
                                    response: {
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
                                    };
                                } : {
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
                                }>;
                                options: {
                                    method: "GET";
                                    query: import("better-auth").ZodObject<{
                                        id: import("better-auth").ZodString;
                                    }, "strip", import("better-auth").ZodTypeAny, {
                                        id: string;
                                    }, {
                                        id: string;
                                    }>;
                                    use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                                        session: {
                                            session: Record<string, any> & {
                                                id: string;
                                                createdAt: Date;
                                                updatedAt: Date;
                                                userId: string;
                                                expiresAt: Date;
                                                token: string;
                                                ipAddress?: string | null | undefined;
                                                userAgent?: string | null | undefined;
                                            };
                                            user: Record<string, any> & {
                                                id: string;
                                                name: string;
                                                email: string;
                                                emailVerified: boolean;
                                                createdAt: Date;
                                                updatedAt: Date;
                                                image?: string | null | undefined;
                                            };
                                        };
                                    }>)[];
                                    metadata: {
                                        openapi: {
                                            description: string;
                                            responses: {
                                                "200": {
                                                    description: string;
                                                    content: {
                                                        "application/json": {
                                                            schema: {
                                                                type: "object";
                                                                properties: {
                                                                    id: {
                                                                        type: string;
                                                                        description: string;
                                                                    };
                                                                    name: {
                                                                        type: string;
                                                                        nullable: boolean;
                                                                        description: string;
                                                                    };
                                                                    start: {
                                                                        type: string;
                                                                        nullable: boolean;
                                                                        description: string;
                                                                    };
                                                                    prefix: {
                                                                        type: string;
                                                                        nullable: boolean;
                                                                        description: string;
                                                                    };
                                                                    userId: {
                                                                        type: string;
                                                                        description: string;
                                                                    };
                                                                    refillInterval: {
                                                                        type: string;
                                                                        nullable: boolean;
                                                                        description: string;
                                                                    };
                                                                    refillAmount: {
                                                                        type: string;
                                                                        nullable: boolean;
                                                                        description: string;
                                                                    };
                                                                    lastRefillAt: {
                                                                        type: string;
                                                                        format: string;
                                                                        nullable: boolean;
                                                                        description: string;
                                                                    };
                                                                    enabled: {
                                                                        type: string;
                                                                        description: string;
                                                                        default: boolean;
                                                                    };
                                                                    rateLimitEnabled: {
                                                                        type: string;
                                                                        description: string;
                                                                    };
                                                                    rateLimitTimeWindow: {
                                                                        type: string;
                                                                        nullable: boolean;
                                                                        description: string;
                                                                    };
                                                                    rateLimitMax: {
                                                                        type: string;
                                                                        nullable: boolean;
                                                                        description: string;
                                                                    };
                                                                    requestCount: {
                                                                        type: string;
                                                                        description: string;
                                                                    };
                                                                    remaining: {
                                                                        type: string;
                                                                        nullable: boolean;
                                                                        description: string;
                                                                    };
                                                                    lastRequest: {
                                                                        type: string;
                                                                        format: string;
                                                                        nullable: boolean;
                                                                        description: string;
                                                                    };
                                                                    expiresAt: {
                                                                        type: string;
                                                                        format: string;
                                                                        nullable: boolean;
                                                                        description: string;
                                                                    };
                                                                    createdAt: {
                                                                        type: string;
                                                                        format: string;
                                                                        description: string;
                                                                    };
                                                                    updatedAt: {
                                                                        type: string;
                                                                        format: string;
                                                                        description: string;
                                                                    };
                                                                    metadata: {
                                                                        type: string;
                                                                        nullable: boolean;
                                                                        additionalProperties: boolean;
                                                                        description: string;
                                                                    };
                                                                    permissions: {
                                                                        type: string;
                                                                        nullable: boolean;
                                                                        description: string;
                                                                    };
                                                                };
                                                                required: string[];
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                } & {
                                    use: any[];
                                };
                                path: "/api-key/get";
                            };
                            updateApiKey: {
                                <AsResponse_1 extends boolean = false, ReturnHeaders_17 extends boolean = false>(inputCtx_0: {
                                    body: {
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
                                    };
                                } & {
                                    method?: "POST" | undefined;
                                } & {
                                    query?: Record<string, any> | undefined;
                                } & {
                                    params?: Record<string, any>;
                                } & {
                                    request?: Request;
                                } & {
                                    headers?: HeadersInit;
                                } & {
                                    asResponse?: boolean;
                                    returnHeaders?: boolean;
                                    use?: import("better-auth").Middleware[];
                                    path?: string;
                                } & {
                                    asResponse?: AsResponse_1 | undefined;
                                    returnHeaders?: ReturnHeaders_17 | undefined;
                                }): Promise<[AsResponse_1] extends [true] ? Response : [ReturnHeaders_17] extends [true] ? {
                                    headers: Headers;
                                    response: {
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
                                    };
                                } : {
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
                                }>;
                                options: {
                                    method: "POST";
                                    body: import("better-auth").ZodObject<{
                                        keyId: import("better-auth").ZodString;
                                        userId: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                                        name: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                                        enabled: import("better-auth").ZodOptional<import("better-auth").ZodBoolean>;
                                        remaining: import("better-auth").ZodOptional<import("better-auth").ZodNumber>;
                                        refillAmount: import("better-auth").ZodOptional<import("better-auth").ZodNumber>;
                                        refillInterval: import("better-auth").ZodOptional<import("better-auth").ZodNumber>;
                                        metadata: import("better-auth").ZodOptional<import("better-auth").ZodAny>;
                                        expiresIn: import("better-auth").ZodNullable<import("better-auth").ZodOptional<import("better-auth").ZodNumber>>;
                                        rateLimitEnabled: import("better-auth").ZodOptional<import("better-auth").ZodBoolean>;
                                        rateLimitTimeWindow: import("better-auth").ZodOptional<import("better-auth").ZodNumber>;
                                        rateLimitMax: import("better-auth").ZodOptional<import("better-auth").ZodNumber>;
                                        permissions: import("better-auth").ZodNullable<import("better-auth").ZodOptional<import("better-auth").ZodRecord<import("better-auth").ZodString, import("better-auth").ZodArray<import("better-auth").ZodString, "many">>>>;
                                    }, "strip", import("better-auth").ZodTypeAny, {
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
                                    }, {
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
                                    }>;
                                    metadata: {
                                        openapi: {
                                            description: string;
                                            responses: {
                                                "200": {
                                                    description: string;
                                                    content: {
                                                        "application/json": {
                                                            schema: {
                                                                type: "object";
                                                                properties: {
                                                                    id: {
                                                                        type: string;
                                                                        description: string;
                                                                    };
                                                                    name: {
                                                                        type: string;
                                                                        nullable: boolean;
                                                                        description: string;
                                                                    };
                                                                    start: {
                                                                        type: string;
                                                                        nullable: boolean;
                                                                        description: string;
                                                                    };
                                                                    prefix: {
                                                                        type: string;
                                                                        nullable: boolean;
                                                                        description: string;
                                                                    };
                                                                    userId: {
                                                                        type: string;
                                                                        description: string;
                                                                    };
                                                                    refillInterval: {
                                                                        type: string;
                                                                        nullable: boolean;
                                                                        description: string;
                                                                    };
                                                                    refillAmount: {
                                                                        type: string;
                                                                        nullable: boolean;
                                                                        description: string;
                                                                    };
                                                                    lastRefillAt: {
                                                                        type: string;
                                                                        format: string;
                                                                        nullable: boolean;
                                                                        description: string;
                                                                    };
                                                                    enabled: {
                                                                        type: string;
                                                                        description: string;
                                                                        default: boolean;
                                                                    };
                                                                    rateLimitEnabled: {
                                                                        type: string;
                                                                        description: string;
                                                                    };
                                                                    rateLimitTimeWindow: {
                                                                        type: string;
                                                                        nullable: boolean;
                                                                        description: string;
                                                                    };
                                                                    rateLimitMax: {
                                                                        type: string;
                                                                        nullable: boolean;
                                                                        description: string;
                                                                    };
                                                                    requestCount: {
                                                                        type: string;
                                                                        description: string;
                                                                    };
                                                                    remaining: {
                                                                        type: string;
                                                                        nullable: boolean;
                                                                        description: string;
                                                                    };
                                                                    lastRequest: {
                                                                        type: string;
                                                                        format: string;
                                                                        nullable: boolean;
                                                                        description: string;
                                                                    };
                                                                    expiresAt: {
                                                                        type: string;
                                                                        format: string;
                                                                        nullable: boolean;
                                                                        description: string;
                                                                    };
                                                                    createdAt: {
                                                                        type: string;
                                                                        format: string;
                                                                        description: string;
                                                                    };
                                                                    updatedAt: {
                                                                        type: string;
                                                                        format: string;
                                                                        description: string;
                                                                    };
                                                                    metadata: {
                                                                        type: string;
                                                                        nullable: boolean;
                                                                        additionalProperties: boolean;
                                                                        description: string;
                                                                    };
                                                                    permissions: {
                                                                        type: string;
                                                                        nullable: boolean;
                                                                        description: string;
                                                                    };
                                                                };
                                                                required: string[];
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                } & {
                                    use: any[];
                                };
                                path: "/api-key/update";
                            };
                            deleteApiKey: {
                                <AsResponse_1 extends boolean = false, ReturnHeaders_18 extends boolean = false>(inputCtx_0: {
                                    body: {
                                        keyId: string;
                                    };
                                } & {
                                    method?: "POST" | undefined;
                                } & {
                                    query?: Record<string, any> | undefined;
                                } & {
                                    params?: Record<string, any>;
                                } & {
                                    request?: Request;
                                } & {
                                    headers?: HeadersInit;
                                } & {
                                    asResponse?: boolean;
                                    returnHeaders?: boolean;
                                    use?: import("better-auth").Middleware[];
                                    path?: string;
                                } & {
                                    asResponse?: AsResponse_1 | undefined;
                                    returnHeaders?: ReturnHeaders_18 | undefined;
                                }): Promise<[AsResponse_1] extends [true] ? Response : [ReturnHeaders_18] extends [true] ? {
                                    headers: Headers;
                                    response: {
                                        success: boolean;
                                    };
                                } : {
                                    success: boolean;
                                }>;
                                options: {
                                    method: "POST";
                                    body: import("better-auth").ZodObject<{
                                        keyId: import("better-auth").ZodString;
                                    }, "strip", import("better-auth").ZodTypeAny, {
                                        keyId: string;
                                    }, {
                                        keyId: string;
                                    }>;
                                    use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                                        session: {
                                            session: Record<string, any> & {
                                                id: string;
                                                createdAt: Date;
                                                updatedAt: Date;
                                                userId: string;
                                                expiresAt: Date;
                                                token: string;
                                                ipAddress?: string | null | undefined;
                                                userAgent?: string | null | undefined;
                                            };
                                            user: Record<string, any> & {
                                                id: string;
                                                name: string;
                                                email: string;
                                                emailVerified: boolean;
                                                createdAt: Date;
                                                updatedAt: Date;
                                                image?: string | null | undefined;
                                            };
                                        };
                                    }>)[];
                                    metadata: {
                                        openapi: {
                                            description: string;
                                            requestBody: {
                                                content: {
                                                    "application/json": {
                                                        schema: {
                                                            type: "object";
                                                            properties: {
                                                                keyId: {
                                                                    type: string;
                                                                    description: string;
                                                                };
                                                            };
                                                            required: string[];
                                                        };
                                                    };
                                                };
                                            };
                                            responses: {
                                                "200": {
                                                    description: string;
                                                    content: {
                                                        "application/json": {
                                                            schema: {
                                                                type: "object";
                                                                properties: {
                                                                    success: {
                                                                        type: string;
                                                                        description: string;
                                                                    };
                                                                };
                                                                required: string[];
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                } & {
                                    use: any[];
                                };
                                path: "/api-key/delete";
                            };
                            listApiKeys: {
                                <AsResponse_1 extends boolean = false, ReturnHeaders_19 extends boolean = false>(inputCtx_0?: ({
                                    body?: undefined;
                                } & {
                                    method?: "GET" | undefined;
                                } & {
                                    query?: Record<string, any> | undefined;
                                } & {
                                    params?: Record<string, any>;
                                } & {
                                    request?: Request;
                                } & {
                                    headers?: HeadersInit;
                                } & {
                                    asResponse?: boolean;
                                    returnHeaders?: boolean;
                                    use?: import("better-auth").Middleware[];
                                    path?: string;
                                } & {
                                    asResponse?: AsResponse_1 | undefined;
                                    returnHeaders?: ReturnHeaders_19 | undefined;
                                }) | undefined): Promise<[AsResponse_1] extends [true] ? Response : [ReturnHeaders_19] extends [true] ? {
                                    headers: Headers;
                                    response: {
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
                                    }[];
                                } : {
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
                                }[]>;
                                options: {
                                    method: "GET";
                                    use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                                        session: {
                                            session: Record<string, any> & {
                                                id: string;
                                                createdAt: Date;
                                                updatedAt: Date;
                                                userId: string;
                                                expiresAt: Date;
                                                token: string;
                                                ipAddress?: string | null | undefined;
                                                userAgent?: string | null | undefined;
                                            };
                                            user: Record<string, any> & {
                                                id: string;
                                                name: string;
                                                email: string;
                                                emailVerified: boolean;
                                                createdAt: Date;
                                                updatedAt: Date;
                                                image?: string | null | undefined;
                                            };
                                        };
                                    }>)[];
                                    metadata: {
                                        openapi: {
                                            description: string;
                                            responses: {
                                                "200": {
                                                    description: string;
                                                    content: {
                                                        "application/json": {
                                                            schema: {
                                                                type: "array";
                                                                items: {
                                                                    type: string;
                                                                    properties: {
                                                                        id: {
                                                                            type: string;
                                                                            description: string;
                                                                        };
                                                                        name: {
                                                                            type: string;
                                                                            nullable: boolean;
                                                                            description: string;
                                                                        };
                                                                        start: {
                                                                            type: string;
                                                                            nullable: boolean;
                                                                            description: string;
                                                                        };
                                                                        prefix: {
                                                                            type: string;
                                                                            nullable: boolean;
                                                                            description: string;
                                                                        };
                                                                        userId: {
                                                                            type: string;
                                                                            description: string;
                                                                        };
                                                                        refillInterval: {
                                                                            type: string;
                                                                            nullable: boolean;
                                                                            description: string;
                                                                        };
                                                                        refillAmount: {
                                                                            type: string;
                                                                            nullable: boolean;
                                                                            description: string;
                                                                        };
                                                                        lastRefillAt: {
                                                                            type: string;
                                                                            format: string;
                                                                            nullable: boolean;
                                                                            description: string;
                                                                        };
                                                                        enabled: {
                                                                            type: string;
                                                                            description: string;
                                                                            default: boolean;
                                                                        };
                                                                        rateLimitEnabled: {
                                                                            type: string;
                                                                            description: string;
                                                                        };
                                                                        rateLimitTimeWindow: {
                                                                            type: string;
                                                                            nullable: boolean;
                                                                            description: string;
                                                                        };
                                                                        rateLimitMax: {
                                                                            type: string;
                                                                            nullable: boolean;
                                                                            description: string;
                                                                        };
                                                                        requestCount: {
                                                                            type: string;
                                                                            description: string;
                                                                        };
                                                                        remaining: {
                                                                            type: string;
                                                                            nullable: boolean;
                                                                            description: string;
                                                                        };
                                                                        lastRequest: {
                                                                            type: string;
                                                                            format: string;
                                                                            nullable: boolean;
                                                                            description: string;
                                                                        };
                                                                        expiresAt: {
                                                                            type: string;
                                                                            format: string;
                                                                            nullable: boolean;
                                                                            description: string;
                                                                        };
                                                                        createdAt: {
                                                                            type: string;
                                                                            format: string;
                                                                            description: string;
                                                                        };
                                                                        updatedAt: {
                                                                            type: string;
                                                                            format: string;
                                                                            description: string;
                                                                        };
                                                                        metadata: {
                                                                            type: string;
                                                                            nullable: boolean;
                                                                            additionalProperties: boolean;
                                                                            description: string;
                                                                        };
                                                                        permissions: {
                                                                            type: string;
                                                                            nullable: boolean;
                                                                            description: string;
                                                                        };
                                                                    };
                                                                    required: string[];
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                } & {
                                    use: any[];
                                };
                                path: "/api-key/list";
                            };
                        };
                        schema: {
                            apikey: {
                                fields: {
                                    name: {
                                        type: "string";
                                        required: false;
                                        input: false;
                                    };
                                    start: {
                                        type: "string";
                                        required: false;
                                        input: false;
                                    };
                                    prefix: {
                                        type: "string";
                                        required: false;
                                        input: false;
                                    };
                                    key: {
                                        type: "string";
                                        required: true;
                                        input: false;
                                    };
                                    userId: {
                                        type: "string";
                                        references: {
                                            model: string;
                                            field: string;
                                        };
                                        required: true;
                                        input: false;
                                    };
                                    refillInterval: {
                                        type: "number";
                                        required: false;
                                        input: false;
                                    };
                                    refillAmount: {
                                        type: "number";
                                        required: false;
                                        input: false;
                                    };
                                    lastRefillAt: {
                                        type: "date";
                                        required: false;
                                        input: false;
                                    };
                                    enabled: {
                                        type: "boolean";
                                        required: false;
                                        input: false;
                                        defaultValue: true;
                                    };
                                    rateLimitEnabled: {
                                        type: "boolean";
                                        required: false;
                                        input: false;
                                        defaultValue: true;
                                    };
                                    rateLimitTimeWindow: {
                                        type: "number";
                                        required: false;
                                        input: false;
                                        defaultValue: number;
                                    };
                                    rateLimitMax: {
                                        type: "number";
                                        required: false;
                                        input: false;
                                        defaultValue: number;
                                    };
                                    requestCount: {
                                        type: "number";
                                        required: false;
                                        input: false;
                                        defaultValue: number;
                                    };
                                    remaining: {
                                        type: "number";
                                        required: false;
                                        input: false;
                                    };
                                    lastRequest: {
                                        type: "date";
                                        required: false;
                                        input: false;
                                    };
                                    expiresAt: {
                                        type: "date";
                                        required: false;
                                        input: false;
                                    };
                                    createdAt: {
                                        type: "date";
                                        required: true;
                                        input: false;
                                    };
                                    updatedAt: {
                                        type: "date";
                                        required: true;
                                        input: false;
                                    };
                                    permissions: {
                                        type: "string";
                                        required: false;
                                        input: false;
                                    };
                                    metadata: {
                                        type: "string";
                                        required: false;
                                        input: true;
                                        transform: {
                                            input(value: string | number | boolean | string[] | Date | number[] | null | undefined): string;
                                            output(value: string | number | boolean | string[] | Date | number[] | null | undefined): any;
                                        };
                                    };
                                };
                            };
                        };
                    } | {
                        id: "username";
                        endpoints: {
                            signInUsername: {
                                <AsResponse_1 extends boolean = false, ReturnHeaders_20 extends boolean = false>(inputCtx_0: {
                                    body: {
                                        password: string;
                                        username: string;
                                        rememberMe?: boolean | undefined;
                                    };
                                } & {
                                    method?: "POST" | undefined;
                                } & {
                                    query?: Record<string, any> | undefined;
                                } & {
                                    params?: Record<string, any>;
                                } & {
                                    request?: Request;
                                } & {
                                    headers?: HeadersInit;
                                } & {
                                    asResponse?: boolean;
                                    returnHeaders?: boolean;
                                    use?: import("better-auth").Middleware[];
                                    path?: string;
                                } & {
                                    asResponse?: AsResponse_1 | undefined;
                                    returnHeaders?: ReturnHeaders_20 | undefined;
                                }): Promise<[AsResponse_1] extends [true] ? Response : [ReturnHeaders_20] extends [true] ? {
                                    headers: Headers;
                                    response: {
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
                                    } | null;
                                } : {
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
                                } | null>;
                                options: {
                                    method: "POST";
                                    body: import("better-auth").ZodObject<{
                                        username: import("better-auth").ZodString;
                                        password: import("better-auth").ZodString;
                                        rememberMe: import("better-auth").ZodOptional<import("better-auth").ZodBoolean>;
                                    }, "strip", import("better-auth").ZodTypeAny, {
                                        password: string;
                                        username: string;
                                        rememberMe?: boolean | undefined;
                                    }, {
                                        password: string;
                                        username: string;
                                        rememberMe?: boolean | undefined;
                                    }>;
                                    metadata: {
                                        openapi: {
                                            summary: string;
                                            description: string;
                                            responses: {
                                                200: {
                                                    description: string;
                                                    content: {
                                                        "application/json": {
                                                            schema: {
                                                                type: "object";
                                                                properties: {
                                                                    token: {
                                                                        type: string;
                                                                        description: string;
                                                                    };
                                                                    user: {
                                                                        $ref: string;
                                                                    };
                                                                };
                                                                required: string[];
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                } & {
                                    use: any[];
                                };
                                path: "/sign-in/username";
                            };
                        };
                        schema: {
                            user: {
                                fields: {
                                    username: {
                                        type: "string";
                                        required: false;
                                        sortable: true;
                                        unique: true;
                                        returned: true;
                                        transform: {
                                            input(value: string | number | boolean | string[] | Date | number[] | null | undefined): string | undefined;
                                        };
                                    };
                                    displayUsername: {
                                        type: "string";
                                        required: false;
                                    };
                                };
                            };
                        };
                        hooks: {
                            before: {
                                matcher(context: import("better-auth").HookEndpointContext): boolean;
                                handler: (inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<void>;
                            }[];
                        };
                        $ERROR_CODES: {
                            INVALID_USERNAME_OR_PASSWORD: string;
                            EMAIL_NOT_VERIFIED: string;
                            UNEXPECTED_ERROR: string;
                            USERNAME_IS_ALREADY_TAKEN: string;
                            USERNAME_TOO_SHORT: string;
                            USERNAME_TOO_LONG: string;
                            INVALID_USERNAME: string;
                        };
                    })[];
                }>> & {
                    name?: string;
                    image?: string;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: import("better-auth").Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: import("better-auth").ZodRecord<import("better-auth").ZodString, import("better-auth").ZodAny>;
                use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    $Infer: {
                        body: Partial<import("better-auth").AdditionalUserFieldsInput<{
                            database: (options: import("better-auth").BetterAuthOptions) => import("better-auth").Adapter;
                            basePath: string;
                            user: {
                                additionalFields: {
                                    bio: {
                                        type: "string";
                                        nullable: boolean;
                                        required: false;
                                    };
                                };
                            };
                            account: {
                                accountLinking: {
                                    enabled: true;
                                    trustedProviders: ("github" | "discord" | "email-password")[];
                                };
                            };
                            advanced: {
                                crossSubDomainCookies: {
                                    enabled: true;
                                    domain: string | undefined;
                                };
                            };
                            trustedOrigins: string[];
                            onAPIError: {
                                onError(error: unknown): void;
                            };
                            emailAndPassword: {
                                enabled: true;
                            };
                            socialProviders: {
                                discord: {
                                    clientId: string;
                                    clientSecret: string;
                                };
                                github: {
                                    clientId: string;
                                    clientSecret: string;
                                };
                            };
                            plugins: ({
                                id: "account-details";
                                schema: {
                                    account: {
                                        fields: {
                                            metadata: {
                                                type: "string";
                                                required: false;
                                                transform: {
                                                    input: (value: string | number | boolean | string[] | Date | number[] | null | undefined) => string | number | boolean | string[] | Date | number[] | null | undefined;
                                                    output: (value: string | number | boolean | string[] | Date | number[] | null | undefined) => string | number | boolean | string[] | Date | number[] | null | undefined;
                                                };
                                            };
                                        };
                                    };
                                };
                                hooks: {
                                    before: {
                                        matcher: (ctx: import("better-auth").HookEndpointContext) => boolean;
                                        handler: (inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                                            context: import("better-auth").MiddlewareContext<import("better-auth").MiddlewareOptions, import("better-auth").AuthContext & {
                                                returned?: unknown;
                                                responseHeaders?: Headers;
                                            }>;
                                        }>;
                                    }[];
                                    after: {
                                        matcher: (ctx: import("better-auth").HookEndpointContext) => boolean;
                                        handler: (inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                                            context: import("better-auth").MiddlewareContext<import("better-auth").MiddlewareOptions, import("better-auth").AuthContext & {
                                                returned?: unknown;
                                                responseHeaders?: Headers;
                                            }>;
                                        }>;
                                    }[];
                                };
                            } | {
                                id: "birthdayPlugin";
                                schema: {
                                    user: {
                                        fields: {
                                            birthday: {
                                                type: "date";
                                                required: true;
                                                unique: false;
                                            };
                                        };
                                    };
                                };
                                hooks: {
                                    before: {
                                        matcher: (context: import("better-auth").HookEndpointContext) => boolean;
                                        handler: (inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                                            context: import("better-auth").MiddlewareContext<import("better-auth").MiddlewareOptions, import("better-auth").AuthContext & {
                                                returned?: unknown;
                                                responseHeaders?: Headers;
                                            }>;
                                        }>;
                                    }[];
                                };
                            } | {
                                id: "admin";
                                init(): {
                                    options: {
                                        databaseHooks: {
                                            user: {
                                                create: {
                                                    before(user: {
                                                        id: string;
                                                        name: string;
                                                        email: string;
                                                        emailVerified: boolean;
                                                        createdAt: Date;
                                                        updatedAt: Date;
                                                        image?: string | null | undefined;
                                                    }): Promise<{
                                                        data: {
                                                            id: string;
                                                            name: string;
                                                            email: string;
                                                            emailVerified: boolean;
                                                            createdAt: Date;
                                                            updatedAt: Date;
                                                            image?: string | null | undefined;
                                                            role: string;
                                                        };
                                                    }>;
                                                };
                                            };
                                            session: {
                                                create: {
                                                    before(session: {
                                                        id: string;
                                                        createdAt: Date;
                                                        updatedAt: Date;
                                                        userId: string;
                                                        expiresAt: Date;
                                                        token: string;
                                                        ipAddress?: string | null | undefined;
                                                        userAgent?: string | null | undefined;
                                                    }, ctx: import("better-auth").GenericEndpointContext | undefined): Promise<void>;
                                                };
                                            };
                                        };
                                    };
                                };
                                hooks: {
                                    after: {
                                        matcher(context: import("better-auth").HookEndpointContext): boolean;
                                        handler: (inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<import("better-auth/plugins").SessionWithImpersonatedBy[] | undefined>;
                                    }[];
                                };
                                endpoints: {
                                    setRole: {
                                        <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                                            body: {
                                                userId: string;
                                                role: "user" | "admin" | ("user" | "admin")[];
                                            };
                                        } & {
                                            method?: "POST" | undefined;
                                        } & {
                                            query?: Record<string, any> | undefined;
                                        } & {
                                            params?: Record<string, any>;
                                        } & {
                                            request?: Request;
                                        } & {
                                            headers?: HeadersInit;
                                        } & {
                                            asResponse?: boolean;
                                            returnHeaders?: boolean;
                                            use?: import("better-auth").Middleware[];
                                            path?: string;
                                        } & {
                                            asResponse?: AsResponse | undefined;
                                            returnHeaders?: ReturnHeaders | undefined;
                                        }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                                            headers: Headers;
                                            response: {
                                                user: import("better-auth/plugins").UserWithRole;
                                            };
                                        } : {
                                            user: import("better-auth/plugins").UserWithRole;
                                        }>;
                                        options: {
                                            method: "POST";
                                            body: import("better-auth").ZodObject<{
                                                userId: import("better-auth").ZodString;
                                                role: import("better-auth").ZodUnion<[import("better-auth").ZodString, import("better-auth").ZodArray<import("better-auth").ZodString, "many">]>;
                                            }, "strip", import("better-auth").ZodTypeAny, {
                                                userId: string;
                                                role: string | string[];
                                            }, {
                                                userId: string;
                                                role: string | string[];
                                            }>;
                                            use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                                                session: {
                                                    user: import("better-auth/plugins").UserWithRole;
                                                    session: import("better-auth").Session;
                                                };
                                            }>)[];
                                            metadata: {
                                                openapi: {
                                                    operationId: string;
                                                    summary: string;
                                                    description: string;
                                                    responses: {
                                                        200: {
                                                            description: string;
                                                            content: {
                                                                "application/json": {
                                                                    schema: {
                                                                        type: "object";
                                                                        properties: {
                                                                            user: {
                                                                                $ref: string;
                                                                            };
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                                $Infer: {
                                                    body: {
                                                        userId: string;
                                                        role: "user" | "admin" | ("user" | "admin")[];
                                                    };
                                                };
                                            };
                                        } & {
                                            use: any[];
                                        };
                                        path: "/admin/set-role";
                                    };
                                    createUser: {
                                        <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                                            body: {
                                                email: string;
                                                password: string;
                                                name: string;
                                                role?: "user" | "admin" | ("user" | "admin")[] | undefined;
                                                data?: Record<string, any>;
                                            };
                                        } & {
                                            method?: "POST" | undefined;
                                        } & {
                                            query?: Record<string, any> | undefined;
                                        } & {
                                            params?: Record<string, any>;
                                        } & {
                                            request?: Request;
                                        } & {
                                            headers?: HeadersInit;
                                        } & {
                                            asResponse?: boolean;
                                            returnHeaders?: boolean;
                                            use?: import("better-auth").Middleware[];
                                            path?: string;
                                        } & {
                                            asResponse?: AsResponse | undefined;
                                            returnHeaders?: ReturnHeaders | undefined;
                                        }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                                            headers: Headers;
                                            response: {
                                                user: import("better-auth/plugins").UserWithRole;
                                            };
                                        } : {
                                            user: import("better-auth/plugins").UserWithRole;
                                        }>;
                                        options: {
                                            method: "POST";
                                            body: import("better-auth").ZodObject<{
                                                email: import("better-auth").ZodString;
                                                password: import("better-auth").ZodString;
                                                name: import("better-auth").ZodString;
                                                role: import("better-auth").ZodOptional<import("better-auth").ZodUnion<[import("better-auth").ZodString, import("better-auth").ZodArray<import("better-auth").ZodString, "many">]>>;
                                                data: import("better-auth").ZodOptional<import("better-auth").ZodRecord<import("better-auth").ZodString, import("better-auth").ZodAny>>;
                                            }, "strip", import("better-auth").ZodTypeAny, {
                                                password: string;
                                                name: string;
                                                email: string;
                                                data?: Record<string, any> | undefined;
                                                role?: string | string[] | undefined;
                                            }, {
                                                password: string;
                                                name: string;
                                                email: string;
                                                data?: Record<string, any> | undefined;
                                                role?: string | string[] | undefined;
                                            }>;
                                            metadata: {
                                                openapi: {
                                                    operationId: string;
                                                    summary: string;
                                                    description: string;
                                                    responses: {
                                                        200: {
                                                            description: string;
                                                            content: {
                                                                "application/json": {
                                                                    schema: {
                                                                        type: "object";
                                                                        properties: {
                                                                            user: {
                                                                                $ref: string;
                                                                            };
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                                $Infer: {
                                                    body: {
                                                        email: string;
                                                        password: string;
                                                        name: string;
                                                        role?: "user" | "admin" | ("user" | "admin")[] | undefined;
                                                        data?: Record<string, any>;
                                                    };
                                                };
                                            };
                                        } & {
                                            use: any[];
                                        };
                                        path: "/admin/create-user";
                                    };
                                    listUsers: {
                                        <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                                            body?: undefined;
                                        } & {
                                            method?: "GET" | undefined;
                                        } & {
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
                                        } & {
                                            params?: Record<string, any>;
                                        } & {
                                            request?: Request;
                                        } & {
                                            headers?: HeadersInit;
                                        } & {
                                            asResponse?: boolean;
                                            returnHeaders?: boolean;
                                            use?: import("better-auth").Middleware[];
                                            path?: string;
                                        } & {
                                            asResponse?: AsResponse | undefined;
                                            returnHeaders?: ReturnHeaders | undefined;
                                        }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                                            headers: Headers;
                                            response: {
                                                users: import("better-auth/plugins").UserWithRole[];
                                                total: number;
                                                limit: number | undefined;
                                                offset: number | undefined;
                                            } | {
                                                users: never[];
                                                total: number;
                                            };
                                        } : {
                                            users: import("better-auth/plugins").UserWithRole[];
                                            total: number;
                                            limit: number | undefined;
                                            offset: number | undefined;
                                        } | {
                                            users: never[];
                                            total: number;
                                        }>;
                                        options: {
                                            method: "GET";
                                            use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                                                session: {
                                                    user: import("better-auth/plugins").UserWithRole;
                                                    session: import("better-auth").Session;
                                                };
                                            }>)[];
                                            query: import("better-auth").ZodObject<{
                                                searchValue: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                                                searchField: import("better-auth").ZodOptional<import("better-auth").ZodEnum<["email", "name"]>>;
                                                searchOperator: import("better-auth").ZodOptional<import("better-auth").ZodEnum<["contains", "starts_with", "ends_with"]>>;
                                                limit: import("better-auth").ZodOptional<import("better-auth").ZodUnion<[import("better-auth").ZodString, import("better-auth").ZodNumber]>>;
                                                offset: import("better-auth").ZodOptional<import("better-auth").ZodUnion<[import("better-auth").ZodString, import("better-auth").ZodNumber]>>;
                                                sortBy: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                                                sortDirection: import("better-auth").ZodOptional<import("better-auth").ZodEnum<["asc", "desc"]>>;
                                                filterField: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                                                filterValue: import("better-auth").ZodOptional<import("better-auth").ZodUnion<[import("better-auth").ZodUnion<[import("better-auth").ZodString, import("better-auth").ZodNumber]>, import("better-auth").ZodBoolean]>>;
                                                filterOperator: import("better-auth").ZodOptional<import("better-auth").ZodEnum<["eq", "ne", "lt", "lte", "gt", "gte"]>>;
                                            }, "strip", import("better-auth").ZodTypeAny, {
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
                                            }, {
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
                                            }>;
                                            metadata: {
                                                openapi: {
                                                    operationId: string;
                                                    summary: string;
                                                    description: string;
                                                    responses: {
                                                        200: {
                                                            description: string;
                                                            content: {
                                                                "application/json": {
                                                                    schema: {
                                                                        type: "object";
                                                                        properties: {
                                                                            users: {
                                                                                type: string;
                                                                                items: {
                                                                                    $ref: string;
                                                                                };
                                                                            };
                                                                            total: {
                                                                                type: string;
                                                                            };
                                                                            limit: {
                                                                                type: string;
                                                                            };
                                                                            offset: {
                                                                                type: string;
                                                                            };
                                                                        };
                                                                        required: string[];
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        } & {
                                            use: any[];
                                        };
                                        path: "/admin/list-users";
                                    };
                                    listUserSessions: {
                                        <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                                            body: {
                                                userId: string;
                                            };
                                        } & {
                                            method?: "POST" | undefined;
                                        } & {
                                            query?: Record<string, any> | undefined;
                                        } & {
                                            params?: Record<string, any>;
                                        } & {
                                            request?: Request;
                                        } & {
                                            headers?: HeadersInit;
                                        } & {
                                            asResponse?: boolean;
                                            returnHeaders?: boolean;
                                            use?: import("better-auth").Middleware[];
                                            path?: string;
                                        } & {
                                            asResponse?: AsResponse | undefined;
                                            returnHeaders?: ReturnHeaders | undefined;
                                        }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                                            headers: Headers;
                                            response: {
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
                                            };
                                        } : {
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
                                        }>;
                                        options: {
                                            method: "POST";
                                            use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                                                session: {
                                                    user: import("better-auth/plugins").UserWithRole;
                                                    session: import("better-auth").Session;
                                                };
                                            }>)[];
                                            body: import("better-auth").ZodObject<{
                                                userId: import("better-auth").ZodString;
                                            }, "strip", import("better-auth").ZodTypeAny, {
                                                userId: string;
                                            }, {
                                                userId: string;
                                            }>;
                                            metadata: {
                                                openapi: {
                                                    operationId: string;
                                                    summary: string;
                                                    description: string;
                                                    responses: {
                                                        200: {
                                                            description: string;
                                                            content: {
                                                                "application/json": {
                                                                    schema: {
                                                                        type: "object";
                                                                        properties: {
                                                                            sessions: {
                                                                                type: string;
                                                                                items: {
                                                                                    $ref: string;
                                                                                };
                                                                            };
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        } & {
                                            use: any[];
                                        };
                                        path: "/admin/list-user-sessions";
                                    };
                                    unbanUser: {
                                        <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                                            body: {
                                                userId: string;
                                            };
                                        } & {
                                            method?: "POST" | undefined;
                                        } & {
                                            query?: Record<string, any> | undefined;
                                        } & {
                                            params?: Record<string, any>;
                                        } & {
                                            request?: Request;
                                        } & {
                                            headers?: HeadersInit;
                                        } & {
                                            asResponse?: boolean;
                                            returnHeaders?: boolean;
                                            use?: import("better-auth").Middleware[];
                                            path?: string;
                                        } & {
                                            asResponse?: AsResponse | undefined;
                                            returnHeaders?: ReturnHeaders | undefined;
                                        }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                                            headers: Headers;
                                            response: {
                                                user: any;
                                            };
                                        } : {
                                            user: any;
                                        }>;
                                        options: {
                                            method: "POST";
                                            body: import("better-auth").ZodObject<{
                                                userId: import("better-auth").ZodString;
                                            }, "strip", import("better-auth").ZodTypeAny, {
                                                userId: string;
                                            }, {
                                                userId: string;
                                            }>;
                                            use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                                                session: {
                                                    user: import("better-auth/plugins").UserWithRole;
                                                    session: import("better-auth").Session;
                                                };
                                            }>)[];
                                            metadata: {
                                                openapi: {
                                                    operationId: string;
                                                    summary: string;
                                                    description: string;
                                                    responses: {
                                                        200: {
                                                            description: string;
                                                            content: {
                                                                "application/json": {
                                                                    schema: {
                                                                        type: "object";
                                                                        properties: {
                                                                            user: {
                                                                                $ref: string;
                                                                            };
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        } & {
                                            use: any[];
                                        };
                                        path: "/admin/unban-user";
                                    };
                                    banUser: {
                                        <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                                            body: {
                                                userId: string;
                                                banReason?: string | undefined;
                                                banExpiresIn?: number | undefined;
                                            };
                                        } & {
                                            method?: "POST" | undefined;
                                        } & {
                                            query?: Record<string, any> | undefined;
                                        } & {
                                            params?: Record<string, any>;
                                        } & {
                                            request?: Request;
                                        } & {
                                            headers?: HeadersInit;
                                        } & {
                                            asResponse?: boolean;
                                            returnHeaders?: boolean;
                                            use?: import("better-auth").Middleware[];
                                            path?: string;
                                        } & {
                                            asResponse?: AsResponse | undefined;
                                            returnHeaders?: ReturnHeaders | undefined;
                                        }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                                            headers: Headers;
                                            response: {
                                                user: any;
                                            };
                                        } : {
                                            user: any;
                                        }>;
                                        options: {
                                            method: "POST";
                                            body: import("better-auth").ZodObject<{
                                                userId: import("better-auth").ZodString;
                                                banReason: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                                                banExpiresIn: import("better-auth").ZodOptional<import("better-auth").ZodNumber>;
                                            }, "strip", import("better-auth").ZodTypeAny, {
                                                userId: string;
                                                banReason?: string | undefined;
                                                banExpiresIn?: number | undefined;
                                            }, {
                                                userId: string;
                                                banReason?: string | undefined;
                                                banExpiresIn?: number | undefined;
                                            }>;
                                            use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                                                session: {
                                                    user: import("better-auth/plugins").UserWithRole;
                                                    session: import("better-auth").Session;
                                                };
                                            }>)[];
                                            metadata: {
                                                openapi: {
                                                    operationId: string;
                                                    summary: string;
                                                    description: string;
                                                    responses: {
                                                        200: {
                                                            description: string;
                                                            content: {
                                                                "application/json": {
                                                                    schema: {
                                                                        type: "object";
                                                                        properties: {
                                                                            user: {
                                                                                $ref: string;
                                                                            };
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        } & {
                                            use: any[];
                                        };
                                        path: "/admin/ban-user";
                                    };
                                    impersonateUser: {
                                        <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                                            body: {
                                                userId: string;
                                            };
                                        } & {
                                            method?: "POST" | undefined;
                                        } & {
                                            query?: Record<string, any> | undefined;
                                        } & {
                                            params?: Record<string, any>;
                                        } & {
                                            request?: Request;
                                        } & {
                                            headers?: HeadersInit;
                                        } & {
                                            asResponse?: boolean;
                                            returnHeaders?: boolean;
                                            use?: import("better-auth").Middleware[];
                                            path?: string;
                                        } & {
                                            asResponse?: AsResponse | undefined;
                                            returnHeaders?: ReturnHeaders | undefined;
                                        }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                                            headers: Headers;
                                            response: {
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
                                            };
                                        } : {
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
                                        }>;
                                        options: {
                                            method: "POST";
                                            body: import("better-auth").ZodObject<{
                                                userId: import("better-auth").ZodString;
                                            }, "strip", import("better-auth").ZodTypeAny, {
                                                userId: string;
                                            }, {
                                                userId: string;
                                            }>;
                                            use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                                                session: {
                                                    user: import("better-auth/plugins").UserWithRole;
                                                    session: import("better-auth").Session;
                                                };
                                            }>)[];
                                            metadata: {
                                                openapi: {
                                                    operationId: string;
                                                    summary: string;
                                                    description: string;
                                                    responses: {
                                                        200: {
                                                            description: string;
                                                            content: {
                                                                "application/json": {
                                                                    schema: {
                                                                        type: "object";
                                                                        properties: {
                                                                            session: {
                                                                                $ref: string;
                                                                            };
                                                                            user: {
                                                                                $ref: string;
                                                                            };
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        } & {
                                            use: any[];
                                        };
                                        path: "/admin/impersonate-user";
                                    };
                                    stopImpersonating: {
                                        <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0?: ({
                                            body?: undefined;
                                        } & {
                                            method?: "POST" | undefined;
                                        } & {
                                            query?: Record<string, any> | undefined;
                                        } & {
                                            params?: Record<string, any>;
                                        } & {
                                            request?: Request;
                                        } & {
                                            headers?: HeadersInit;
                                        } & {
                                            asResponse?: boolean;
                                            returnHeaders?: boolean;
                                            use?: import("better-auth").Middleware[];
                                            path?: string;
                                        } & {
                                            asResponse?: AsResponse | undefined;
                                            returnHeaders?: ReturnHeaders | undefined;
                                        }) | undefined): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                                            headers: Headers;
                                            response: {
                                                session: import("better-auth").Session & Record<string, any>;
                                                user: import("better-auth").User & Record<string, any>;
                                            };
                                        } : {
                                            session: import("better-auth").Session & Record<string, any>;
                                            user: import("better-auth").User & Record<string, any>;
                                        }>;
                                        options: {
                                            method: "POST";
                                        } & {
                                            use: any[];
                                        };
                                        path: "/admin/stop-impersonating";
                                    };
                                    revokeUserSession: {
                                        <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                                            body: {
                                                sessionToken: string;
                                            };
                                        } & {
                                            method?: "POST" | undefined;
                                        } & {
                                            query?: Record<string, any> | undefined;
                                        } & {
                                            params?: Record<string, any>;
                                        } & {
                                            request?: Request;
                                        } & {
                                            headers?: HeadersInit;
                                        } & {
                                            asResponse?: boolean;
                                            returnHeaders?: boolean;
                                            use?: import("better-auth").Middleware[];
                                            path?: string;
                                        } & {
                                            asResponse?: AsResponse | undefined;
                                            returnHeaders?: ReturnHeaders | undefined;
                                        }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                                            headers: Headers;
                                            response: {
                                                success: boolean;
                                            };
                                        } : {
                                            success: boolean;
                                        }>;
                                        options: {
                                            method: "POST";
                                            body: import("better-auth").ZodObject<{
                                                sessionToken: import("better-auth").ZodString;
                                            }, "strip", import("better-auth").ZodTypeAny, {
                                                sessionToken: string;
                                            }, {
                                                sessionToken: string;
                                            }>;
                                            use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                                                session: {
                                                    user: import("better-auth/plugins").UserWithRole;
                                                    session: import("better-auth").Session;
                                                };
                                            }>)[];
                                            metadata: {
                                                openapi: {
                                                    operationId: string;
                                                    summary: string;
                                                    description: string;
                                                    responses: {
                                                        200: {
                                                            description: string;
                                                            content: {
                                                                "application/json": {
                                                                    schema: {
                                                                        type: "object";
                                                                        properties: {
                                                                            success: {
                                                                                type: string;
                                                                            };
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        } & {
                                            use: any[];
                                        };
                                        path: "/admin/revoke-user-session";
                                    };
                                    revokeUserSessions: {
                                        <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                                            body: {
                                                userId: string;
                                            };
                                        } & {
                                            method?: "POST" | undefined;
                                        } & {
                                            query?: Record<string, any> | undefined;
                                        } & {
                                            params?: Record<string, any>;
                                        } & {
                                            request?: Request;
                                        } & {
                                            headers?: HeadersInit;
                                        } & {
                                            asResponse?: boolean;
                                            returnHeaders?: boolean;
                                            use?: import("better-auth").Middleware[];
                                            path?: string;
                                        } & {
                                            asResponse?: AsResponse | undefined;
                                            returnHeaders?: ReturnHeaders | undefined;
                                        }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                                            headers: Headers;
                                            response: {
                                                success: boolean;
                                            };
                                        } : {
                                            success: boolean;
                                        }>;
                                        options: {
                                            method: "POST";
                                            body: import("better-auth").ZodObject<{
                                                userId: import("better-auth").ZodString;
                                            }, "strip", import("better-auth").ZodTypeAny, {
                                                userId: string;
                                            }, {
                                                userId: string;
                                            }>;
                                            use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                                                session: {
                                                    user: import("better-auth/plugins").UserWithRole;
                                                    session: import("better-auth").Session;
                                                };
                                            }>)[];
                                            metadata: {
                                                openapi: {
                                                    operationId: string;
                                                    summary: string;
                                                    description: string;
                                                    responses: {
                                                        200: {
                                                            description: string;
                                                            content: {
                                                                "application/json": {
                                                                    schema: {
                                                                        type: "object";
                                                                        properties: {
                                                                            success: {
                                                                                type: string;
                                                                            };
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        } & {
                                            use: any[];
                                        };
                                        path: "/admin/revoke-user-sessions";
                                    };
                                    removeUser: {
                                        <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                                            body: {
                                                userId: string;
                                            };
                                        } & {
                                            method?: "POST" | undefined;
                                        } & {
                                            query?: Record<string, any> | undefined;
                                        } & {
                                            params?: Record<string, any>;
                                        } & {
                                            request?: Request;
                                        } & {
                                            headers?: HeadersInit;
                                        } & {
                                            asResponse?: boolean;
                                            returnHeaders?: boolean;
                                            use?: import("better-auth").Middleware[];
                                            path?: string;
                                        } & {
                                            asResponse?: AsResponse | undefined;
                                            returnHeaders?: ReturnHeaders | undefined;
                                        }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                                            headers: Headers;
                                            response: {
                                                success: boolean;
                                            };
                                        } : {
                                            success: boolean;
                                        }>;
                                        options: {
                                            method: "POST";
                                            body: import("better-auth").ZodObject<{
                                                userId: import("better-auth").ZodString;
                                            }, "strip", import("better-auth").ZodTypeAny, {
                                                userId: string;
                                            }, {
                                                userId: string;
                                            }>;
                                            use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                                                session: {
                                                    user: import("better-auth/plugins").UserWithRole;
                                                    session: import("better-auth").Session;
                                                };
                                            }>)[];
                                            metadata: {
                                                openapi: {
                                                    operationId: string;
                                                    summary: string;
                                                    description: string;
                                                    responses: {
                                                        200: {
                                                            description: string;
                                                            content: {
                                                                "application/json": {
                                                                    schema: {
                                                                        type: "object";
                                                                        properties: {
                                                                            success: {
                                                                                type: string;
                                                                            };
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        } & {
                                            use: any[];
                                        };
                                        path: "/admin/remove-user";
                                    };
                                    setUserPassword: {
                                        <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                                            body: {
                                                userId: string;
                                                newPassword: string;
                                            };
                                        } & {
                                            method?: "POST" | undefined;
                                        } & {
                                            query?: Record<string, any> | undefined;
                                        } & {
                                            params?: Record<string, any>;
                                        } & {
                                            request?: Request;
                                        } & {
                                            headers?: HeadersInit;
                                        } & {
                                            asResponse?: boolean;
                                            returnHeaders?: boolean;
                                            use?: import("better-auth").Middleware[];
                                            path?: string;
                                        } & {
                                            asResponse?: AsResponse | undefined;
                                            returnHeaders?: ReturnHeaders | undefined;
                                        }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                                            headers: Headers;
                                            response: {
                                                status: boolean;
                                            };
                                        } : {
                                            status: boolean;
                                        }>;
                                        options: {
                                            method: "POST";
                                            body: import("better-auth").ZodObject<{
                                                newPassword: import("better-auth").ZodString;
                                                userId: import("better-auth").ZodString;
                                            }, "strip", import("better-auth").ZodTypeAny, {
                                                userId: string;
                                                newPassword: string;
                                            }, {
                                                userId: string;
                                                newPassword: string;
                                            }>;
                                            use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                                                session: {
                                                    user: import("better-auth/plugins").UserWithRole;
                                                    session: import("better-auth").Session;
                                                };
                                            }>)[];
                                            metadata: {
                                                openapi: {
                                                    operationId: string;
                                                    summary: string;
                                                    description: string;
                                                    responses: {
                                                        200: {
                                                            description: string;
                                                            content: {
                                                                "application/json": {
                                                                    schema: {
                                                                        type: "object";
                                                                        properties: {
                                                                            status: {
                                                                                type: string;
                                                                            };
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        } & {
                                            use: any[];
                                        };
                                        path: "/admin/set-user-password";
                                    };
                                    userHasPermission: {
                                        <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                                            body: ({
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
                                            };
                                        } & {
                                            method?: "POST" | undefined;
                                        } & {
                                            query?: Record<string, any> | undefined;
                                        } & {
                                            params?: Record<string, any>;
                                        } & {
                                            request?: Request;
                                        } & {
                                            headers?: HeadersInit;
                                        } & {
                                            asResponse?: boolean;
                                            returnHeaders?: boolean;
                                            use?: import("better-auth").Middleware[];
                                            path?: string;
                                        } & {
                                            asResponse?: AsResponse | undefined;
                                            returnHeaders?: ReturnHeaders | undefined;
                                        }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                                            headers: Headers;
                                            response: {
                                                error: null;
                                                success: boolean;
                                            };
                                        } : {
                                            error: null;
                                            success: boolean;
                                        }>;
                                        options: {
                                            method: "POST";
                                            body: import("better-auth").ZodIntersection<import("better-auth").ZodObject<{
                                                userId: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                                                role: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                                            }, "strip", import("better-auth").ZodTypeAny, {
                                                userId?: string | undefined;
                                                role?: string | undefined;
                                            }, {
                                                userId?: string | undefined;
                                                role?: string | undefined;
                                            }>, import("better-auth").ZodUnion<[import("better-auth").ZodObject<{
                                                permission: import("better-auth").ZodRecord<import("better-auth").ZodString, import("better-auth").ZodArray<import("better-auth").ZodString, "many">>;
                                                permissions: import("better-auth").ZodUndefined;
                                            }, "strip", import("better-auth").ZodTypeAny, {
                                                permission: Record<string, string[]>;
                                                permissions?: undefined;
                                            }, {
                                                permission: Record<string, string[]>;
                                                permissions?: undefined;
                                            }>, import("better-auth").ZodObject<{
                                                permission: import("better-auth").ZodUndefined;
                                                permissions: import("better-auth").ZodRecord<import("better-auth").ZodString, import("better-auth").ZodArray<import("better-auth").ZodString, "many">>;
                                            }, "strip", import("better-auth").ZodTypeAny, {
                                                permissions: Record<string, string[]>;
                                                permission?: undefined;
                                            }, {
                                                permissions: Record<string, string[]>;
                                                permission?: undefined;
                                            }>]>>;
                                            metadata: {
                                                openapi: {
                                                    description: string;
                                                    requestBody: {
                                                        content: {
                                                            "application/json": {
                                                                schema: {
                                                                    type: "object";
                                                                    properties: {
                                                                        permission: {
                                                                            type: string;
                                                                            description: string;
                                                                            deprecated: boolean;
                                                                        };
                                                                        permissions: {
                                                                            type: string;
                                                                            description: string;
                                                                        };
                                                                    };
                                                                    required: string[];
                                                                };
                                                            };
                                                        };
                                                    };
                                                    responses: {
                                                        "200": {
                                                            description: string;
                                                            content: {
                                                                "application/json": {
                                                                    schema: {
                                                                        type: "object";
                                                                        properties: {
                                                                            error: {
                                                                                type: string;
                                                                            };
                                                                            success: {
                                                                                type: string;
                                                                            };
                                                                        };
                                                                        required: string[];
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                                $Infer: {
                                                    body: ({
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
                                                    };
                                                };
                                            };
                                        } & {
                                            use: any[];
                                        };
                                        path: "/admin/has-permission";
                                    };
                                };
                                $ERROR_CODES: {
                                    readonly FAILED_TO_CREATE_USER: "Failed to create user";
                                    readonly USER_ALREADY_EXISTS: "User already exists";
                                    readonly YOU_CANNOT_BAN_YOURSELF: "You cannot ban yourself";
                                    readonly YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE: "You are not allowed to change users role";
                                    readonly YOU_ARE_NOT_ALLOWED_TO_CREATE_USERS: "You are not allowed to create users";
                                    readonly YOU_ARE_NOT_ALLOWED_TO_LIST_USERS: "You are not allowed to list users";
                                    readonly YOU_ARE_NOT_ALLOWED_TO_LIST_USERS_SESSIONS: "You are not allowed to list users sessions";
                                    readonly YOU_ARE_NOT_ALLOWED_TO_BAN_USERS: "You are not allowed to ban users";
                                    readonly YOU_ARE_NOT_ALLOWED_TO_IMPERSONATE_USERS: "You are not allowed to impersonate users";
                                    readonly YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS: "You are not allowed to revoke users sessions";
                                    readonly YOU_ARE_NOT_ALLOWED_TO_DELETE_USERS: "You are not allowed to delete users";
                                    readonly YOU_ARE_NOT_ALLOWED_TO_SET_USERS_PASSWORD: "You are not allowed to set users password";
                                    readonly BANNED_USER: "You have been banned from this application";
                                };
                                schema: {
                                    user: {
                                        fields: {
                                            role: {
                                                type: "string";
                                                required: false;
                                                input: false;
                                            };
                                            banned: {
                                                type: "boolean";
                                                defaultValue: false;
                                                required: false;
                                                input: false;
                                            };
                                            banReason: {
                                                type: "string";
                                                required: false;
                                                input: false;
                                            };
                                            banExpires: {
                                                type: "date";
                                                required: false;
                                                input: false;
                                            };
                                        };
                                    };
                                    session: {
                                        fields: {
                                            impersonatedBy: {
                                                type: "string";
                                                required: false;
                                            };
                                        };
                                    };
                                };
                            } | {
                                id: "api-key";
                                $ERROR_CODES: {
                                    INVALID_METADATA_TYPE: string;
                                    REFILL_AMOUNT_AND_INTERVAL_REQUIRED: string;
                                    REFILL_INTERVAL_AND_AMOUNT_REQUIRED: string;
                                    USER_BANNED: string;
                                    UNAUTHORIZED_SESSION: string;
                                    KEY_NOT_FOUND: string;
                                    KEY_DISABLED: string;
                                    KEY_EXPIRED: string;
                                    USAGE_EXCEEDED: string;
                                    KEY_NOT_RECOVERABLE: string;
                                    EXPIRES_IN_IS_TOO_SMALL: string;
                                    EXPIRES_IN_IS_TOO_LARGE: string;
                                    INVALID_REMAINING: string;
                                    INVALID_PREFIX_LENGTH: string;
                                    INVALID_NAME_LENGTH: string;
                                    METADATA_DISABLED: string;
                                    RATE_LIMIT_EXCEEDED: string;
                                    NO_VALUES_TO_UPDATE: string;
                                    KEY_DISABLED_EXPIRATION: string;
                                    INVALID_API_KEY: string;
                                    INVALID_USER_ID_FROM_API_KEY: string;
                                    INVALID_API_KEY_GETTER_RETURN_TYPE: string;
                                    SERVER_ONLY_PROPERTY: string;
                                };
                                hooks: {
                                    before: {
                                        matcher: (ctx: import("better-auth").HookEndpointContext) => boolean;
                                        handler: (inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                                            user: {
                                                id: string;
                                                name: string;
                                                email: string;
                                                emailVerified: boolean;
                                                createdAt: Date;
                                                updatedAt: Date;
                                                image?: string | null | undefined;
                                            };
                                            session: {
                                                id: string;
                                                token: string;
                                                userId: string;
                                                userAgent: string | null;
                                                ipAddress: string | null;
                                                createdAt: Date;
                                                updatedAt: Date;
                                                expiresAt: Date;
                                            };
                                        } | {
                                            context: import("better-auth").MiddlewareContext<import("better-auth").MiddlewareOptions, import("better-auth").AuthContext & {
                                                returned?: unknown;
                                                responseHeaders?: Headers;
                                            }>;
                                        }>;
                                    }[];
                                };
                                endpoints: {
                                    createApiKey: {
                                        <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                                            body: {
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
                                            };
                                        } & {
                                            method?: "POST" | undefined;
                                        } & {
                                            query?: Record<string, any> | undefined;
                                        } & {
                                            params?: Record<string, any>;
                                        } & {
                                            request?: Request;
                                        } & {
                                            headers?: HeadersInit;
                                        } & {
                                            asResponse?: boolean;
                                            returnHeaders?: boolean;
                                            use?: import("better-auth").Middleware[];
                                            path?: string;
                                        } & {
                                            asResponse?: AsResponse | undefined;
                                            returnHeaders?: ReturnHeaders | undefined;
                                        }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                                            headers: Headers;
                                            response: {
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
                                            };
                                        } : {
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
                                        }>;
                                        options: {
                                            method: "POST";
                                            body: import("better-auth").ZodObject<{
                                                name: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                                                expiresIn: import("better-auth").ZodDefault<import("better-auth").ZodNullable<import("better-auth").ZodOptional<import("better-auth").ZodNumber>>>;
                                                userId: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                                                prefix: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                                                remaining: import("better-auth").ZodDefault<import("better-auth").ZodNullable<import("better-auth").ZodOptional<import("better-auth").ZodNumber>>>;
                                                metadata: import("better-auth").ZodOptional<import("better-auth").ZodAny>;
                                                refillAmount: import("better-auth").ZodOptional<import("better-auth").ZodNumber>;
                                                refillInterval: import("better-auth").ZodOptional<import("better-auth").ZodNumber>;
                                                rateLimitTimeWindow: import("better-auth").ZodOptional<import("better-auth").ZodNumber>;
                                                rateLimitMax: import("better-auth").ZodOptional<import("better-auth").ZodNumber>;
                                                rateLimitEnabled: import("better-auth").ZodOptional<import("better-auth").ZodBoolean>;
                                                permissions: import("better-auth").ZodOptional<import("better-auth").ZodRecord<import("better-auth").ZodString, import("better-auth").ZodArray<import("better-auth").ZodString, "many">>>;
                                            }, "strip", import("better-auth").ZodTypeAny, {
                                                expiresIn: number | null;
                                                remaining: number | null;
                                                metadata?: any;
                                                name?: string | undefined;
                                                userId?: string | undefined;
                                                prefix?: string | undefined;
                                                permissions?: Record<string, string[]> | undefined;
                                                rateLimitMax?: number | undefined;
                                                refillInterval?: number | undefined;
                                                refillAmount?: number | undefined;
                                                rateLimitEnabled?: boolean | undefined;
                                                rateLimitTimeWindow?: number | undefined;
                                            }, {
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
                                            }>;
                                            metadata: {
                                                openapi: {
                                                    description: string;
                                                    responses: {
                                                        "200": {
                                                            description: string;
                                                            content: {
                                                                "application/json": {
                                                                    schema: {
                                                                        type: "object";
                                                                        properties: {
                                                                            id: {
                                                                                type: string;
                                                                                description: string;
                                                                            };
                                                                            createdAt: {
                                                                                type: string;
                                                                                format: string;
                                                                                description: string;
                                                                            };
                                                                            updatedAt: {
                                                                                type: string;
                                                                                format: string;
                                                                                description: string;
                                                                            };
                                                                            name: {
                                                                                type: string;
                                                                                nullable: boolean;
                                                                                description: string;
                                                                            };
                                                                            prefix: {
                                                                                type: string;
                                                                                nullable: boolean;
                                                                                description: string;
                                                                            };
                                                                            start: {
                                                                                type: string;
                                                                                nullable: boolean;
                                                                                description: string;
                                                                            };
                                                                            key: {
                                                                                type: string;
                                                                                description: string;
                                                                            };
                                                                            enabled: {
                                                                                type: string;
                                                                                description: string;
                                                                            };
                                                                            expiresAt: {
                                                                                type: string;
                                                                                format: string;
                                                                                nullable: boolean;
                                                                                description: string;
                                                                            };
                                                                            userId: {
                                                                                type: string;
                                                                                description: string;
                                                                            };
                                                                            lastRefillAt: {
                                                                                type: string;
                                                                                format: string;
                                                                                nullable: boolean;
                                                                                description: string;
                                                                            };
                                                                            lastRequest: {
                                                                                type: string;
                                                                                format: string;
                                                                                nullable: boolean;
                                                                                description: string;
                                                                            };
                                                                            metadata: {
                                                                                type: string;
                                                                                nullable: boolean;
                                                                                additionalProperties: boolean;
                                                                                description: string;
                                                                            };
                                                                            rateLimitMax: {
                                                                                type: string;
                                                                                nullable: boolean;
                                                                                description: string;
                                                                            };
                                                                            rateLimitTimeWindow: {
                                                                                type: string;
                                                                                nullable: boolean;
                                                                                description: string;
                                                                            };
                                                                            remaining: {
                                                                                type: string;
                                                                                nullable: boolean;
                                                                                description: string;
                                                                            };
                                                                            refillAmount: {
                                                                                type: string;
                                                                                nullable: boolean;
                                                                                description: string;
                                                                            };
                                                                            refillInterval: {
                                                                                type: string;
                                                                                nullable: boolean;
                                                                                description: string;
                                                                            };
                                                                            rateLimitEnabled: {
                                                                                type: string;
                                                                                description: string;
                                                                            };
                                                                            requestCount: {
                                                                                type: string;
                                                                                description: string;
                                                                            };
                                                                            permissions: {
                                                                                type: string;
                                                                                nullable: boolean;
                                                                                additionalProperties: {
                                                                                    type: string;
                                                                                    items: {
                                                                                        type: string;
                                                                                    };
                                                                                };
                                                                                description: string;
                                                                            };
                                                                        };
                                                                        required: string[];
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        } & {
                                            use: any[];
                                        };
                                        path: "/api-key/create";
                                    };
                                    verifyApiKey: {
                                        <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                                            body: {
                                                key: string;
                                                permissions?: Record<string, string[]> | undefined;
                                            };
                                        } & {
                                            method?: "POST" | undefined;
                                        } & {
                                            query?: Record<string, any> | undefined;
                                        } & {
                                            params?: Record<string, any>;
                                        } & {
                                            request?: Request;
                                        } & {
                                            headers?: HeadersInit;
                                        } & {
                                            asResponse?: boolean;
                                            returnHeaders?: boolean;
                                            use?: import("better-auth").Middleware[];
                                            path?: string;
                                        } & {
                                            asResponse?: AsResponse | undefined;
                                            returnHeaders?: ReturnHeaders | undefined;
                                        }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                                            headers: Headers;
                                            response: {
                                                valid: boolean;
                                                error: {
                                                    message: string;
                                                    code: "KEY_NOT_FOUND";
                                                };
                                                key: null;
                                            } | {
                                                valid: boolean;
                                                error: {
                                                    message: string;
                                                    code: "KEY_DISABLED";
                                                };
                                                key: null;
                                            } | {
                                                valid: boolean;
                                                error: {
                                                    message: string;
                                                    code: "KEY_EXPIRED";
                                                };
                                                key: null;
                                            } | {
                                                valid: boolean;
                                                error: {
                                                    message: string;
                                                    code: "USAGE_EXCEEDED";
                                                };
                                                key: null;
                                            } | {
                                                valid: boolean;
                                                error: {
                                                    message: string | null;
                                                    code: "RATE_LIMITED";
                                                    details: {
                                                        tryAgainIn: number | null;
                                                    };
                                                };
                                                key: null;
                                            } | {
                                                valid: boolean;
                                                error: null;
                                                key: Omit<{
                                                    id: string;
                                                    name: string | null;
                                                    start: string | null;
                                                    prefix: string | null;
                                                    key: string;
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
                                                    permissions?: {
                                                        [key: string]: string[];
                                                    } | null;
                                                }, "key"> | null;
                                            };
                                        } : {
                                            valid: boolean;
                                            error: {
                                                message: string;
                                                code: "KEY_NOT_FOUND";
                                            };
                                            key: null;
                                        } | {
                                            valid: boolean;
                                            error: {
                                                message: string;
                                                code: "KEY_DISABLED";
                                            };
                                            key: null;
                                        } | {
                                            valid: boolean;
                                            error: {
                                                message: string;
                                                code: "KEY_EXPIRED";
                                            };
                                            key: null;
                                        } | {
                                            valid: boolean;
                                            error: {
                                                message: string;
                                                code: "USAGE_EXCEEDED";
                                            };
                                            key: null;
                                        } | {
                                            valid: boolean;
                                            error: {
                                                message: string | null;
                                                code: "RATE_LIMITED";
                                                details: {
                                                    tryAgainIn: number | null;
                                                };
                                            };
                                            key: null;
                                        } | {
                                            valid: boolean;
                                            error: null;
                                            key: Omit<{
                                                id: string;
                                                name: string | null;
                                                start: string | null;
                                                prefix: string | null;
                                                key: string;
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
                                                permissions?: {
                                                    [key: string]: string[];
                                                } | null;
                                            }, "key"> | null;
                                        }>;
                                        options: {
                                            method: "POST";
                                            body: import("better-auth").ZodObject<{
                                                key: import("better-auth").ZodString;
                                                permissions: import("better-auth").ZodOptional<import("better-auth").ZodRecord<import("better-auth").ZodString, import("better-auth").ZodArray<import("better-auth").ZodString, "many">>>;
                                            }, "strip", import("better-auth").ZodTypeAny, {
                                                key: string;
                                                permissions?: Record<string, string[]> | undefined;
                                            }, {
                                                key: string;
                                                permissions?: Record<string, string[]> | undefined;
                                            }>;
                                            metadata: {
                                                SERVER_ONLY: true;
                                            };
                                        } & {
                                            use: any[];
                                        };
                                        path: "/api-key/verify";
                                    };
                                    getApiKey: {
                                        <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                                            body?: undefined;
                                        } & {
                                            method?: "GET" | undefined;
                                        } & {
                                            query: {
                                                id: string;
                                            };
                                        } & {
                                            params?: Record<string, any>;
                                        } & {
                                            request?: Request;
                                        } & {
                                            headers?: HeadersInit;
                                        } & {
                                            asResponse?: boolean;
                                            returnHeaders?: boolean;
                                            use?: import("better-auth").Middleware[];
                                            path?: string;
                                        } & {
                                            asResponse?: AsResponse | undefined;
                                            returnHeaders?: ReturnHeaders | undefined;
                                        }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                                            headers: Headers;
                                            response: {
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
                                            };
                                        } : {
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
                                        }>;
                                        options: {
                                            method: "GET";
                                            query: import("better-auth").ZodObject<{
                                                id: import("better-auth").ZodString;
                                            }, "strip", import("better-auth").ZodTypeAny, {
                                                id: string;
                                            }, {
                                                id: string;
                                            }>;
                                            use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                                                session: {
                                                    session: Record<string, any> & {
                                                        id: string;
                                                        createdAt: Date;
                                                        updatedAt: Date;
                                                        userId: string;
                                                        expiresAt: Date;
                                                        token: string;
                                                        ipAddress?: string | null | undefined;
                                                        userAgent?: string | null | undefined;
                                                    };
                                                    user: Record<string, any> & {
                                                        id: string;
                                                        name: string;
                                                        email: string;
                                                        emailVerified: boolean;
                                                        createdAt: Date;
                                                        updatedAt: Date;
                                                        image?: string | null | undefined;
                                                    };
                                                };
                                            }>)[];
                                            metadata: {
                                                openapi: {
                                                    description: string;
                                                    responses: {
                                                        "200": {
                                                            description: string;
                                                            content: {
                                                                "application/json": {
                                                                    schema: {
                                                                        type: "object";
                                                                        properties: {
                                                                            id: {
                                                                                type: string;
                                                                                description: string;
                                                                            };
                                                                            name: {
                                                                                type: string;
                                                                                nullable: boolean;
                                                                                description: string;
                                                                            };
                                                                            start: {
                                                                                type: string;
                                                                                nullable: boolean;
                                                                                description: string;
                                                                            };
                                                                            prefix: {
                                                                                type: string;
                                                                                nullable: boolean;
                                                                                description: string;
                                                                            };
                                                                            userId: {
                                                                                type: string;
                                                                                description: string;
                                                                            };
                                                                            refillInterval: {
                                                                                type: string;
                                                                                nullable: boolean;
                                                                                description: string;
                                                                            };
                                                                            refillAmount: {
                                                                                type: string;
                                                                                nullable: boolean;
                                                                                description: string;
                                                                            };
                                                                            lastRefillAt: {
                                                                                type: string;
                                                                                format: string;
                                                                                nullable: boolean;
                                                                                description: string;
                                                                            };
                                                                            enabled: {
                                                                                type: string;
                                                                                description: string;
                                                                                default: boolean;
                                                                            };
                                                                            rateLimitEnabled: {
                                                                                type: string;
                                                                                description: string;
                                                                            };
                                                                            rateLimitTimeWindow: {
                                                                                type: string;
                                                                                nullable: boolean;
                                                                                description: string;
                                                                            };
                                                                            rateLimitMax: {
                                                                                type: string;
                                                                                nullable: boolean;
                                                                                description: string;
                                                                            };
                                                                            requestCount: {
                                                                                type: string;
                                                                                description: string;
                                                                            };
                                                                            remaining: {
                                                                                type: string;
                                                                                nullable: boolean;
                                                                                description: string;
                                                                            };
                                                                            lastRequest: {
                                                                                type: string;
                                                                                format: string;
                                                                                nullable: boolean;
                                                                                description: string;
                                                                            };
                                                                            expiresAt: {
                                                                                type: string;
                                                                                format: string;
                                                                                nullable: boolean;
                                                                                description: string;
                                                                            };
                                                                            createdAt: {
                                                                                type: string;
                                                                                format: string;
                                                                                description: string;
                                                                            };
                                                                            updatedAt: {
                                                                                type: string;
                                                                                format: string;
                                                                                description: string;
                                                                            };
                                                                            metadata: {
                                                                                type: string;
                                                                                nullable: boolean;
                                                                                additionalProperties: boolean;
                                                                                description: string;
                                                                            };
                                                                            permissions: {
                                                                                type: string;
                                                                                nullable: boolean;
                                                                                description: string;
                                                                            };
                                                                        };
                                                                        required: string[];
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        } & {
                                            use: any[];
                                        };
                                        path: "/api-key/get";
                                    };
                                    updateApiKey: {
                                        <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                                            body: {
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
                                            };
                                        } & {
                                            method?: "POST" | undefined;
                                        } & {
                                            query?: Record<string, any> | undefined;
                                        } & {
                                            params?: Record<string, any>;
                                        } & {
                                            request?: Request;
                                        } & {
                                            headers?: HeadersInit;
                                        } & {
                                            asResponse?: boolean;
                                            returnHeaders?: boolean;
                                            use?: import("better-auth").Middleware[];
                                            path?: string;
                                        } & {
                                            asResponse?: AsResponse | undefined;
                                            returnHeaders?: ReturnHeaders | undefined;
                                        }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                                            headers: Headers;
                                            response: {
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
                                            };
                                        } : {
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
                                        }>;
                                        options: {
                                            method: "POST";
                                            body: import("better-auth").ZodObject<{
                                                keyId: import("better-auth").ZodString;
                                                userId: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                                                name: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                                                enabled: import("better-auth").ZodOptional<import("better-auth").ZodBoolean>;
                                                remaining: import("better-auth").ZodOptional<import("better-auth").ZodNumber>;
                                                refillAmount: import("better-auth").ZodOptional<import("better-auth").ZodNumber>;
                                                refillInterval: import("better-auth").ZodOptional<import("better-auth").ZodNumber>;
                                                metadata: import("better-auth").ZodOptional<import("better-auth").ZodAny>;
                                                expiresIn: import("better-auth").ZodNullable<import("better-auth").ZodOptional<import("better-auth").ZodNumber>>;
                                                rateLimitEnabled: import("better-auth").ZodOptional<import("better-auth").ZodBoolean>;
                                                rateLimitTimeWindow: import("better-auth").ZodOptional<import("better-auth").ZodNumber>;
                                                rateLimitMax: import("better-auth").ZodOptional<import("better-auth").ZodNumber>;
                                                permissions: import("better-auth").ZodNullable<import("better-auth").ZodOptional<import("better-auth").ZodRecord<import("better-auth").ZodString, import("better-auth").ZodArray<import("better-auth").ZodString, "many">>>>;
                                            }, "strip", import("better-auth").ZodTypeAny, {
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
                                            }, {
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
                                            }>;
                                            metadata: {
                                                openapi: {
                                                    description: string;
                                                    responses: {
                                                        "200": {
                                                            description: string;
                                                            content: {
                                                                "application/json": {
                                                                    schema: {
                                                                        type: "object";
                                                                        properties: {
                                                                            id: {
                                                                                type: string;
                                                                                description: string;
                                                                            };
                                                                            name: {
                                                                                type: string;
                                                                                nullable: boolean;
                                                                                description: string;
                                                                            };
                                                                            start: {
                                                                                type: string;
                                                                                nullable: boolean;
                                                                                description: string;
                                                                            };
                                                                            prefix: {
                                                                                type: string;
                                                                                nullable: boolean;
                                                                                description: string;
                                                                            };
                                                                            userId: {
                                                                                type: string;
                                                                                description: string;
                                                                            };
                                                                            refillInterval: {
                                                                                type: string;
                                                                                nullable: boolean;
                                                                                description: string;
                                                                            };
                                                                            refillAmount: {
                                                                                type: string;
                                                                                nullable: boolean;
                                                                                description: string;
                                                                            };
                                                                            lastRefillAt: {
                                                                                type: string;
                                                                                format: string;
                                                                                nullable: boolean;
                                                                                description: string;
                                                                            };
                                                                            enabled: {
                                                                                type: string;
                                                                                description: string;
                                                                                default: boolean;
                                                                            };
                                                                            rateLimitEnabled: {
                                                                                type: string;
                                                                                description: string;
                                                                            };
                                                                            rateLimitTimeWindow: {
                                                                                type: string;
                                                                                nullable: boolean;
                                                                                description: string;
                                                                            };
                                                                            rateLimitMax: {
                                                                                type: string;
                                                                                nullable: boolean;
                                                                                description: string;
                                                                            };
                                                                            requestCount: {
                                                                                type: string;
                                                                                description: string;
                                                                            };
                                                                            remaining: {
                                                                                type: string;
                                                                                nullable: boolean;
                                                                                description: string;
                                                                            };
                                                                            lastRequest: {
                                                                                type: string;
                                                                                format: string;
                                                                                nullable: boolean;
                                                                                description: string;
                                                                            };
                                                                            expiresAt: {
                                                                                type: string;
                                                                                format: string;
                                                                                nullable: boolean;
                                                                                description: string;
                                                                            };
                                                                            createdAt: {
                                                                                type: string;
                                                                                format: string;
                                                                                description: string;
                                                                            };
                                                                            updatedAt: {
                                                                                type: string;
                                                                                format: string;
                                                                                description: string;
                                                                            };
                                                                            metadata: {
                                                                                type: string;
                                                                                nullable: boolean;
                                                                                additionalProperties: boolean;
                                                                                description: string;
                                                                            };
                                                                            permissions: {
                                                                                type: string;
                                                                                nullable: boolean;
                                                                                description: string;
                                                                            };
                                                                        };
                                                                        required: string[];
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        } & {
                                            use: any[];
                                        };
                                        path: "/api-key/update";
                                    };
                                    deleteApiKey: {
                                        <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                                            body: {
                                                keyId: string;
                                            };
                                        } & {
                                            method?: "POST" | undefined;
                                        } & {
                                            query?: Record<string, any> | undefined;
                                        } & {
                                            params?: Record<string, any>;
                                        } & {
                                            request?: Request;
                                        } & {
                                            headers?: HeadersInit;
                                        } & {
                                            asResponse?: boolean;
                                            returnHeaders?: boolean;
                                            use?: import("better-auth").Middleware[];
                                            path?: string;
                                        } & {
                                            asResponse?: AsResponse | undefined;
                                            returnHeaders?: ReturnHeaders | undefined;
                                        }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                                            headers: Headers;
                                            response: {
                                                success: boolean;
                                            };
                                        } : {
                                            success: boolean;
                                        }>;
                                        options: {
                                            method: "POST";
                                            body: import("better-auth").ZodObject<{
                                                keyId: import("better-auth").ZodString;
                                            }, "strip", import("better-auth").ZodTypeAny, {
                                                keyId: string;
                                            }, {
                                                keyId: string;
                                            }>;
                                            use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                                                session: {
                                                    session: Record<string, any> & {
                                                        id: string;
                                                        createdAt: Date;
                                                        updatedAt: Date;
                                                        userId: string;
                                                        expiresAt: Date;
                                                        token: string;
                                                        ipAddress?: string | null | undefined;
                                                        userAgent?: string | null | undefined;
                                                    };
                                                    user: Record<string, any> & {
                                                        id: string;
                                                        name: string;
                                                        email: string;
                                                        emailVerified: boolean;
                                                        createdAt: Date;
                                                        updatedAt: Date;
                                                        image?: string | null | undefined;
                                                    };
                                                };
                                            }>)[];
                                            metadata: {
                                                openapi: {
                                                    description: string;
                                                    requestBody: {
                                                        content: {
                                                            "application/json": {
                                                                schema: {
                                                                    type: "object";
                                                                    properties: {
                                                                        keyId: {
                                                                            type: string;
                                                                            description: string;
                                                                        };
                                                                    };
                                                                    required: string[];
                                                                };
                                                            };
                                                        };
                                                    };
                                                    responses: {
                                                        "200": {
                                                            description: string;
                                                            content: {
                                                                "application/json": {
                                                                    schema: {
                                                                        type: "object";
                                                                        properties: {
                                                                            success: {
                                                                                type: string;
                                                                                description: string;
                                                                            };
                                                                        };
                                                                        required: string[];
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        } & {
                                            use: any[];
                                        };
                                        path: "/api-key/delete";
                                    };
                                    listApiKeys: {
                                        <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0?: ({
                                            body?: undefined;
                                        } & {
                                            method?: "GET" | undefined;
                                        } & {
                                            query?: Record<string, any> | undefined;
                                        } & {
                                            params?: Record<string, any>;
                                        } & {
                                            request?: Request;
                                        } & {
                                            headers?: HeadersInit;
                                        } & {
                                            asResponse?: boolean;
                                            returnHeaders?: boolean;
                                            use?: import("better-auth").Middleware[];
                                            path?: string;
                                        } & {
                                            asResponse?: AsResponse | undefined;
                                            returnHeaders?: ReturnHeaders | undefined;
                                        }) | undefined): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                                            headers: Headers;
                                            response: {
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
                                            }[];
                                        } : {
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
                                        }[]>;
                                        options: {
                                            method: "GET";
                                            use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                                                session: {
                                                    session: Record<string, any> & {
                                                        id: string;
                                                        createdAt: Date;
                                                        updatedAt: Date;
                                                        userId: string;
                                                        expiresAt: Date;
                                                        token: string;
                                                        ipAddress?: string | null | undefined;
                                                        userAgent?: string | null | undefined;
                                                    };
                                                    user: Record<string, any> & {
                                                        id: string;
                                                        name: string;
                                                        email: string;
                                                        emailVerified: boolean;
                                                        createdAt: Date;
                                                        updatedAt: Date;
                                                        image?: string | null | undefined;
                                                    };
                                                };
                                            }>)[];
                                            metadata: {
                                                openapi: {
                                                    description: string;
                                                    responses: {
                                                        "200": {
                                                            description: string;
                                                            content: {
                                                                "application/json": {
                                                                    schema: {
                                                                        type: "array";
                                                                        items: {
                                                                            type: string;
                                                                            properties: {
                                                                                id: {
                                                                                    type: string;
                                                                                    description: string;
                                                                                };
                                                                                name: {
                                                                                    type: string;
                                                                                    nullable: boolean;
                                                                                    description: string;
                                                                                };
                                                                                start: {
                                                                                    type: string;
                                                                                    nullable: boolean;
                                                                                    description: string;
                                                                                };
                                                                                prefix: {
                                                                                    type: string;
                                                                                    nullable: boolean;
                                                                                    description: string;
                                                                                };
                                                                                userId: {
                                                                                    type: string;
                                                                                    description: string;
                                                                                };
                                                                                refillInterval: {
                                                                                    type: string;
                                                                                    nullable: boolean;
                                                                                    description: string;
                                                                                };
                                                                                refillAmount: {
                                                                                    type: string;
                                                                                    nullable: boolean;
                                                                                    description: string;
                                                                                };
                                                                                lastRefillAt: {
                                                                                    type: string;
                                                                                    format: string;
                                                                                    nullable: boolean;
                                                                                    description: string;
                                                                                };
                                                                                enabled: {
                                                                                    type: string;
                                                                                    description: string;
                                                                                    default: boolean;
                                                                                };
                                                                                rateLimitEnabled: {
                                                                                    type: string;
                                                                                    description: string;
                                                                                };
                                                                                rateLimitTimeWindow: {
                                                                                    type: string;
                                                                                    nullable: boolean;
                                                                                    description: string;
                                                                                };
                                                                                rateLimitMax: {
                                                                                    type: string;
                                                                                    nullable: boolean;
                                                                                    description: string;
                                                                                };
                                                                                requestCount: {
                                                                                    type: string;
                                                                                    description: string;
                                                                                };
                                                                                remaining: {
                                                                                    type: string;
                                                                                    nullable: boolean;
                                                                                    description: string;
                                                                                };
                                                                                lastRequest: {
                                                                                    type: string;
                                                                                    format: string;
                                                                                    nullable: boolean;
                                                                                    description: string;
                                                                                };
                                                                                expiresAt: {
                                                                                    type: string;
                                                                                    format: string;
                                                                                    nullable: boolean;
                                                                                    description: string;
                                                                                };
                                                                                createdAt: {
                                                                                    type: string;
                                                                                    format: string;
                                                                                    description: string;
                                                                                };
                                                                                updatedAt: {
                                                                                    type: string;
                                                                                    format: string;
                                                                                    description: string;
                                                                                };
                                                                                metadata: {
                                                                                    type: string;
                                                                                    nullable: boolean;
                                                                                    additionalProperties: boolean;
                                                                                    description: string;
                                                                                };
                                                                                permissions: {
                                                                                    type: string;
                                                                                    nullable: boolean;
                                                                                    description: string;
                                                                                };
                                                                            };
                                                                            required: string[];
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        } & {
                                            use: any[];
                                        };
                                        path: "/api-key/list";
                                    };
                                };
                                schema: {
                                    apikey: {
                                        fields: {
                                            name: {
                                                type: "string";
                                                required: false;
                                                input: false;
                                            };
                                            start: {
                                                type: "string";
                                                required: false;
                                                input: false;
                                            };
                                            prefix: {
                                                type: "string";
                                                required: false;
                                                input: false;
                                            };
                                            key: {
                                                type: "string";
                                                required: true;
                                                input: false;
                                            };
                                            userId: {
                                                type: "string";
                                                references: {
                                                    model: string;
                                                    field: string;
                                                };
                                                required: true;
                                                input: false;
                                            };
                                            refillInterval: {
                                                type: "number";
                                                required: false;
                                                input: false;
                                            };
                                            refillAmount: {
                                                type: "number";
                                                required: false;
                                                input: false;
                                            };
                                            lastRefillAt: {
                                                type: "date";
                                                required: false;
                                                input: false;
                                            };
                                            enabled: {
                                                type: "boolean";
                                                required: false;
                                                input: false;
                                                defaultValue: true;
                                            };
                                            rateLimitEnabled: {
                                                type: "boolean";
                                                required: false;
                                                input: false;
                                                defaultValue: true;
                                            };
                                            rateLimitTimeWindow: {
                                                type: "number";
                                                required: false;
                                                input: false;
                                                defaultValue: number;
                                            };
                                            rateLimitMax: {
                                                type: "number";
                                                required: false;
                                                input: false;
                                                defaultValue: number;
                                            };
                                            requestCount: {
                                                type: "number";
                                                required: false;
                                                input: false;
                                                defaultValue: number;
                                            };
                                            remaining: {
                                                type: "number";
                                                required: false;
                                                input: false;
                                            };
                                            lastRequest: {
                                                type: "date";
                                                required: false;
                                                input: false;
                                            };
                                            expiresAt: {
                                                type: "date";
                                                required: false;
                                                input: false;
                                            };
                                            createdAt: {
                                                type: "date";
                                                required: true;
                                                input: false;
                                            };
                                            updatedAt: {
                                                type: "date";
                                                required: true;
                                                input: false;
                                            };
                                            permissions: {
                                                type: "string";
                                                required: false;
                                                input: false;
                                            };
                                            metadata: {
                                                type: "string";
                                                required: false;
                                                input: true;
                                                transform: {
                                                    input(value: string | number | boolean | string[] | Date | number[] | null | undefined): string;
                                                    output(value: string | number | boolean | string[] | Date | number[] | null | undefined): any;
                                                };
                                            };
                                        };
                                    };
                                };
                            } | {
                                id: "username";
                                endpoints: {
                                    signInUsername: {
                                        <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                                            body: {
                                                password: string;
                                                username: string;
                                                rememberMe?: boolean | undefined;
                                            };
                                        } & {
                                            method?: "POST" | undefined;
                                        } & {
                                            query?: Record<string, any> | undefined;
                                        } & {
                                            params?: Record<string, any>;
                                        } & {
                                            request?: Request;
                                        } & {
                                            headers?: HeadersInit;
                                        } & {
                                            asResponse?: boolean;
                                            returnHeaders?: boolean;
                                            use?: import("better-auth").Middleware[];
                                            path?: string;
                                        } & {
                                            asResponse?: AsResponse | undefined;
                                            returnHeaders?: ReturnHeaders | undefined;
                                        }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                                            headers: Headers;
                                            response: {
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
                                            } | null;
                                        } : {
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
                                        } | null>;
                                        options: {
                                            method: "POST";
                                            body: import("better-auth").ZodObject<{
                                                username: import("better-auth").ZodString;
                                                password: import("better-auth").ZodString;
                                                rememberMe: import("better-auth").ZodOptional<import("better-auth").ZodBoolean>;
                                            }, "strip", import("better-auth").ZodTypeAny, {
                                                password: string;
                                                username: string;
                                                rememberMe?: boolean | undefined;
                                            }, {
                                                password: string;
                                                username: string;
                                                rememberMe?: boolean | undefined;
                                            }>;
                                            metadata: {
                                                openapi: {
                                                    summary: string;
                                                    description: string;
                                                    responses: {
                                                        200: {
                                                            description: string;
                                                            content: {
                                                                "application/json": {
                                                                    schema: {
                                                                        type: "object";
                                                                        properties: {
                                                                            token: {
                                                                                type: string;
                                                                                description: string;
                                                                            };
                                                                            user: {
                                                                                $ref: string;
                                                                            };
                                                                        };
                                                                        required: string[];
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        } & {
                                            use: any[];
                                        };
                                        path: "/sign-in/username";
                                    };
                                };
                                schema: {
                                    user: {
                                        fields: {
                                            username: {
                                                type: "string";
                                                required: false;
                                                sortable: true;
                                                unique: true;
                                                returned: true;
                                                transform: {
                                                    input(value: string | number | boolean | string[] | Date | number[] | null | undefined): string | undefined;
                                                };
                                            };
                                            displayUsername: {
                                                type: "string";
                                                required: false;
                                            };
                                        };
                                    };
                                };
                                hooks: {
                                    before: {
                                        matcher(context: import("better-auth").HookEndpointContext): boolean;
                                        handler: (inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<void>;
                                    }[];
                                };
                                $ERROR_CODES: {
                                    INVALID_USERNAME_OR_PASSWORD: string;
                                    EMAIL_NOT_VERIFIED: string;
                                    UNEXPECTED_ERROR: string;
                                    USERNAME_IS_ALREADY_TAKEN: string;
                                    USERNAME_TOO_SHORT: string;
                                    USERNAME_TOO_LONG: string;
                                    INVALID_USERNAME: string;
                                };
                            })[];
                        }>> & {
                            name?: string;
                            image?: string;
                        };
                    };
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            image: {
                                                type: string;
                                                description: string;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                    description: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/update-user";
        };
        deleteUser: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    password?: string | undefined;
                    token?: string | undefined;
                    callbackURL?: string | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: import("better-auth").Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    success: boolean;
                    message: string;
                };
            } : {
                success: boolean;
                message: string;
            }>;
            options: {
                method: "POST";
                use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                body: import("better-auth").ZodObject<{
                    callbackURL: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                    password: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                    token: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                }, "strip", import("better-auth").ZodTypeAny, {
                    password?: string | undefined;
                    token?: string | undefined;
                    callbackURL?: string | undefined;
                }, {
                    password?: string | undefined;
                    token?: string | undefined;
                    callbackURL?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                success: {
                                                    type: string;
                                                    description: string;
                                                };
                                                message: {
                                                    type: string;
                                                    enum: string[];
                                                    description: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/delete-user";
        };
        forgetPasswordCallback: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
                query: {
                    callbackURL: string;
                };
            } & {
                params: {
                    token: string;
                };
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: import("better-auth").Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: never;
            } : never>;
            options: {
                method: "GET";
                query: import("better-auth").ZodObject<{
                    callbackURL: import("better-auth").ZodString;
                }, "strip", import("better-auth").ZodTypeAny, {
                    callbackURL: string;
                }, {
                    callbackURL: string;
                }>;
                use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<void>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                token: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/reset-password/:token";
        };
        listSessions: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: import("better-auth").Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: import("better-auth").Prettify<{
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    userId: string;
                    expiresAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined | undefined;
                    userAgent?: string | null | undefined | undefined;
                } & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    userId: string;
                    expiresAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined | undefined;
                    userAgent?: string | null | undefined | undefined;
                    impersonatedBy?: string | null | undefined;
                }>[];
            } : import("better-auth").Prettify<{
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                expiresAt: Date;
                token: string;
                ipAddress?: string | null | undefined | undefined;
                userAgent?: string | null | undefined | undefined;
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                expiresAt: Date;
                token: string;
                ipAddress?: string | null | undefined | undefined;
                userAgent?: string | null | undefined | undefined;
                impersonatedBy?: string | null | undefined;
            }>[]>;
            options: {
                method: "GET";
                use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                requireHeaders: true;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "array";
                                            items: {
                                                $ref: string;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/list-sessions";
        };
        revokeSession: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    token: string;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: import("better-auth").Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: import("better-auth").ZodObject<{
                    token: import("better-auth").ZodString;
                }, "strip", import("better-auth").ZodTypeAny, {
                    token: string;
                }, {
                    token: string;
                }>;
                use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                requireHeaders: true;
                metadata: {
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            token: {
                                                type: string;
                                                description: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                            };
                        };
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                    description: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/revoke-session";
        };
        revokeSessions: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body?: undefined;
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: import("better-auth").Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                requireHeaders: true;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                    description: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/revoke-sessions";
        };
        revokeOtherSessions: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body?: undefined;
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: import("better-auth").Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                requireHeaders: true;
                use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                    description: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/revoke-other-sessions";
        };
        linkSocialAccount: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    provider: "apple" | "discord" | "facebook" | "github" | "google" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "kick" | "zoom";
                    scopes?: string[] | undefined;
                    callbackURL?: string | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: import("better-auth").Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    url: string;
                    redirect: boolean;
                };
            } : {
                url: string;
                redirect: boolean;
            }>;
            options: {
                method: "POST";
                requireHeaders: true;
                body: import("better-auth").ZodObject<{
                    callbackURL: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                    provider: import("better-auth").ZodEnum<["github", ...("apple" | "discord" | "facebook" | "github" | "google" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "kick" | "zoom")[]]>;
                    scopes: import("better-auth").ZodOptional<import("better-auth").ZodArray<import("better-auth").ZodString, "many">>;
                }, "strip", import("better-auth").ZodTypeAny, {
                    provider: "apple" | "discord" | "facebook" | "github" | "google" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "kick" | "zoom";
                    scopes?: string[] | undefined;
                    callbackURL?: string | undefined;
                }, {
                    provider: "apple" | "discord" | "facebook" | "github" | "google" | "microsoft" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "kick" | "zoom";
                    scopes?: string[] | undefined;
                    callbackURL?: string | undefined;
                }>;
                use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                url: {
                                                    type: string;
                                                    description: string;
                                                };
                                                redirect: {
                                                    type: string;
                                                    description: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/link-social";
        };
        listUserAccounts: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0?: ({
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: import("better-auth").Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }) | undefined): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    id: string;
                    provider: string;
                    createdAt: Date;
                    updatedAt: Date;
                    accountId: string;
                    scopes: string[];
                }[];
            } : {
                id: string;
                provider: string;
                createdAt: Date;
                updatedAt: Date;
                accountId: string;
                scopes: string[];
            }[]>;
            options: {
                method: "GET";
                use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "array";
                                            items: {
                                                type: string;
                                                properties: {
                                                    id: {
                                                        type: string;
                                                    };
                                                    provider: {
                                                        type: string;
                                                    };
                                                    createdAt: {
                                                        type: string;
                                                        format: string;
                                                    };
                                                    updatedAt: {
                                                        type: string;
                                                        format: string;
                                                    };
                                                };
                                                accountId: {
                                                    type: string;
                                                };
                                                scopes: {
                                                    type: string;
                                                    items: {
                                                        type: string;
                                                    };
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/list-accounts";
        };
        deleteUserCallback: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
                query: {
                    token: string;
                    callbackURL?: string | undefined;
                };
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: import("better-auth").Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    success: boolean;
                    message: string;
                };
            } : {
                success: boolean;
                message: string;
            }>;
            options: {
                method: "GET";
                query: import("better-auth").ZodObject<{
                    token: import("better-auth").ZodString;
                    callbackURL: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                }, "strip", import("better-auth").ZodTypeAny, {
                    token: string;
                    callbackURL?: string | undefined;
                }, {
                    token: string;
                    callbackURL?: string | undefined;
                }>;
                use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<void>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                success: {
                                                    type: string;
                                                    description: string;
                                                };
                                                message: {
                                                    type: string;
                                                    enum: string[];
                                                    description: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/delete-user/callback";
        };
        unlinkAccount: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    providerId: string;
                    accountId?: string | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: import("better-auth").Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: import("better-auth").ZodObject<{
                    providerId: import("better-auth").ZodString;
                    accountId: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                }, "strip", import("better-auth").ZodTypeAny, {
                    providerId: string;
                    accountId?: string | undefined;
                }, {
                    providerId: string;
                    accountId?: string | undefined;
                }>;
                use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/unlink-account";
        };
        refreshToken: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    providerId: string;
                    accountId?: string | undefined;
                    userId?: string | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: import("better-auth").Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: import("better-auth").OAuth2Tokens;
            } : import("better-auth").OAuth2Tokens>;
            options: {
                method: "POST";
                body: import("better-auth").ZodObject<{
                    providerId: import("better-auth").ZodString;
                    accountId: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                    userId: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                }, "strip", import("better-auth").ZodTypeAny, {
                    providerId: string;
                    accountId?: string | undefined;
                    userId?: string | undefined;
                }, {
                    providerId: string;
                    accountId?: string | undefined;
                    userId?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                tokenType: {
                                                    type: string;
                                                };
                                                idToken: {
                                                    type: string;
                                                };
                                                accessToken: {
                                                    type: string;
                                                };
                                                refreshToken: {
                                                    type: string;
                                                };
                                                accessTokenExpiresAt: {
                                                    type: string;
                                                    format: string;
                                                };
                                                refreshTokenExpiresAt: {
                                                    type: string;
                                                    format: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                            400: {
                                description: string;
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/refresh-token";
        };
        getAccessToken: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    providerId: string;
                    accountId?: string | undefined;
                    userId?: string | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: import("better-auth").Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    accessToken: string | undefined;
                    accessTokenExpiresAt: Date | undefined;
                    scopes: string[];
                    idToken: string | undefined;
                };
            } : {
                accessToken: string | undefined;
                accessTokenExpiresAt: Date | undefined;
                scopes: string[];
                idToken: string | undefined;
            }>;
            options: {
                method: "POST";
                body: import("better-auth").ZodObject<{
                    providerId: import("better-auth").ZodString;
                    accountId: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                    userId: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                }, "strip", import("better-auth").ZodTypeAny, {
                    providerId: string;
                    accountId?: string | undefined;
                    userId?: string | undefined;
                }, {
                    providerId: string;
                    accountId?: string | undefined;
                    userId?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                tokenType: {
                                                    type: string;
                                                };
                                                idToken: {
                                                    type: string;
                                                };
                                                accessToken: {
                                                    type: string;
                                                };
                                                refreshToken: {
                                                    type: string;
                                                };
                                                accessTokenExpiresAt: {
                                                    type: string;
                                                    format: string;
                                                };
                                                refreshTokenExpiresAt: {
                                                    type: string;
                                                    format: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                            400: {
                                description: string;
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/get-access-token";
        };
    } & {
        createApiKey: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
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
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: import("better-auth").Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
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
                };
            } : {
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
            }>;
            options: {
                method: "POST";
                body: import("better-auth").ZodObject<{
                    name: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                    expiresIn: import("better-auth").ZodDefault<import("better-auth").ZodNullable<import("better-auth").ZodOptional<import("better-auth").ZodNumber>>>;
                    userId: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                    prefix: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                    remaining: import("better-auth").ZodDefault<import("better-auth").ZodNullable<import("better-auth").ZodOptional<import("better-auth").ZodNumber>>>;
                    metadata: import("better-auth").ZodOptional<import("better-auth").ZodAny>;
                    refillAmount: import("better-auth").ZodOptional<import("better-auth").ZodNumber>;
                    refillInterval: import("better-auth").ZodOptional<import("better-auth").ZodNumber>;
                    rateLimitTimeWindow: import("better-auth").ZodOptional<import("better-auth").ZodNumber>;
                    rateLimitMax: import("better-auth").ZodOptional<import("better-auth").ZodNumber>;
                    rateLimitEnabled: import("better-auth").ZodOptional<import("better-auth").ZodBoolean>;
                    permissions: import("better-auth").ZodOptional<import("better-auth").ZodRecord<import("better-auth").ZodString, import("better-auth").ZodArray<import("better-auth").ZodString, "many">>>;
                }, "strip", import("better-auth").ZodTypeAny, {
                    expiresIn: number | null;
                    remaining: number | null;
                    metadata?: any;
                    name?: string | undefined;
                    userId?: string | undefined;
                    prefix?: string | undefined;
                    permissions?: Record<string, string[]> | undefined;
                    rateLimitMax?: number | undefined;
                    refillInterval?: number | undefined;
                    refillAmount?: number | undefined;
                    rateLimitEnabled?: boolean | undefined;
                    rateLimitTimeWindow?: number | undefined;
                }, {
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
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                id: {
                                                    type: string;
                                                    description: string;
                                                };
                                                createdAt: {
                                                    type: string;
                                                    format: string;
                                                    description: string;
                                                };
                                                updatedAt: {
                                                    type: string;
                                                    format: string;
                                                    description: string;
                                                };
                                                name: {
                                                    type: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                prefix: {
                                                    type: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                start: {
                                                    type: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                key: {
                                                    type: string;
                                                    description: string;
                                                };
                                                enabled: {
                                                    type: string;
                                                    description: string;
                                                };
                                                expiresAt: {
                                                    type: string;
                                                    format: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                userId: {
                                                    type: string;
                                                    description: string;
                                                };
                                                lastRefillAt: {
                                                    type: string;
                                                    format: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                lastRequest: {
                                                    type: string;
                                                    format: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                metadata: {
                                                    type: string;
                                                    nullable: boolean;
                                                    additionalProperties: boolean;
                                                    description: string;
                                                };
                                                rateLimitMax: {
                                                    type: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                rateLimitTimeWindow: {
                                                    type: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                remaining: {
                                                    type: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                refillAmount: {
                                                    type: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                refillInterval: {
                                                    type: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                rateLimitEnabled: {
                                                    type: string;
                                                    description: string;
                                                };
                                                requestCount: {
                                                    type: string;
                                                    description: string;
                                                };
                                                permissions: {
                                                    type: string;
                                                    nullable: boolean;
                                                    additionalProperties: {
                                                        type: string;
                                                        items: {
                                                            type: string;
                                                        };
                                                    };
                                                    description: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/api-key/create";
        };
        verifyApiKey: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    key: string;
                    permissions?: Record<string, string[]> | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: import("better-auth").Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    valid: boolean;
                    error: {
                        message: string;
                        code: "KEY_NOT_FOUND";
                    };
                    key: null;
                } | {
                    valid: boolean;
                    error: {
                        message: string;
                        code: "KEY_DISABLED";
                    };
                    key: null;
                } | {
                    valid: boolean;
                    error: {
                        message: string;
                        code: "KEY_EXPIRED";
                    };
                    key: null;
                } | {
                    valid: boolean;
                    error: {
                        message: string;
                        code: "USAGE_EXCEEDED";
                    };
                    key: null;
                } | {
                    valid: boolean;
                    error: {
                        message: string | null;
                        code: "RATE_LIMITED";
                        details: {
                            tryAgainIn: number | null;
                        };
                    };
                    key: null;
                } | {
                    valid: boolean;
                    error: null;
                    key: Omit<{
                        id: string;
                        name: string | null;
                        start: string | null;
                        prefix: string | null;
                        key: string;
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
                        permissions?: {
                            [key: string]: string[];
                        } | null;
                    }, "key"> | null;
                };
            } : {
                valid: boolean;
                error: {
                    message: string;
                    code: "KEY_NOT_FOUND";
                };
                key: null;
            } | {
                valid: boolean;
                error: {
                    message: string;
                    code: "KEY_DISABLED";
                };
                key: null;
            } | {
                valid: boolean;
                error: {
                    message: string;
                    code: "KEY_EXPIRED";
                };
                key: null;
            } | {
                valid: boolean;
                error: {
                    message: string;
                    code: "USAGE_EXCEEDED";
                };
                key: null;
            } | {
                valid: boolean;
                error: {
                    message: string | null;
                    code: "RATE_LIMITED";
                    details: {
                        tryAgainIn: number | null;
                    };
                };
                key: null;
            } | {
                valid: boolean;
                error: null;
                key: Omit<{
                    id: string;
                    name: string | null;
                    start: string | null;
                    prefix: string | null;
                    key: string;
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
                    permissions?: {
                        [key: string]: string[];
                    } | null;
                }, "key"> | null;
            }>;
            options: {
                method: "POST";
                body: import("better-auth").ZodObject<{
                    key: import("better-auth").ZodString;
                    permissions: import("better-auth").ZodOptional<import("better-auth").ZodRecord<import("better-auth").ZodString, import("better-auth").ZodArray<import("better-auth").ZodString, "many">>>;
                }, "strip", import("better-auth").ZodTypeAny, {
                    key: string;
                    permissions?: Record<string, string[]> | undefined;
                }, {
                    key: string;
                    permissions?: Record<string, string[]> | undefined;
                }>;
                metadata: {
                    SERVER_ONLY: true;
                };
            } & {
                use: any[];
            };
            path: "/api-key/verify";
        };
        getApiKey: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
                query: {
                    id: string;
                };
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: import("better-auth").Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
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
                };
            } : {
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
            }>;
            options: {
                method: "GET";
                query: import("better-auth").ZodObject<{
                    id: import("better-auth").ZodString;
                }, "strip", import("better-auth").ZodTypeAny, {
                    id: string;
                }, {
                    id: string;
                }>;
                use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                id: {
                                                    type: string;
                                                    description: string;
                                                };
                                                name: {
                                                    type: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                start: {
                                                    type: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                prefix: {
                                                    type: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                userId: {
                                                    type: string;
                                                    description: string;
                                                };
                                                refillInterval: {
                                                    type: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                refillAmount: {
                                                    type: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                lastRefillAt: {
                                                    type: string;
                                                    format: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                enabled: {
                                                    type: string;
                                                    description: string;
                                                    default: boolean;
                                                };
                                                rateLimitEnabled: {
                                                    type: string;
                                                    description: string;
                                                };
                                                rateLimitTimeWindow: {
                                                    type: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                rateLimitMax: {
                                                    type: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                requestCount: {
                                                    type: string;
                                                    description: string;
                                                };
                                                remaining: {
                                                    type: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                lastRequest: {
                                                    type: string;
                                                    format: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                expiresAt: {
                                                    type: string;
                                                    format: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                createdAt: {
                                                    type: string;
                                                    format: string;
                                                    description: string;
                                                };
                                                updatedAt: {
                                                    type: string;
                                                    format: string;
                                                    description: string;
                                                };
                                                metadata: {
                                                    type: string;
                                                    nullable: boolean;
                                                    additionalProperties: boolean;
                                                    description: string;
                                                };
                                                permissions: {
                                                    type: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/api-key/get";
        };
        updateApiKey: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
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
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: import("better-auth").Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
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
                };
            } : {
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
            }>;
            options: {
                method: "POST";
                body: import("better-auth").ZodObject<{
                    keyId: import("better-auth").ZodString;
                    userId: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                    name: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                    enabled: import("better-auth").ZodOptional<import("better-auth").ZodBoolean>;
                    remaining: import("better-auth").ZodOptional<import("better-auth").ZodNumber>;
                    refillAmount: import("better-auth").ZodOptional<import("better-auth").ZodNumber>;
                    refillInterval: import("better-auth").ZodOptional<import("better-auth").ZodNumber>;
                    metadata: import("better-auth").ZodOptional<import("better-auth").ZodAny>;
                    expiresIn: import("better-auth").ZodNullable<import("better-auth").ZodOptional<import("better-auth").ZodNumber>>;
                    rateLimitEnabled: import("better-auth").ZodOptional<import("better-auth").ZodBoolean>;
                    rateLimitTimeWindow: import("better-auth").ZodOptional<import("better-auth").ZodNumber>;
                    rateLimitMax: import("better-auth").ZodOptional<import("better-auth").ZodNumber>;
                    permissions: import("better-auth").ZodNullable<import("better-auth").ZodOptional<import("better-auth").ZodRecord<import("better-auth").ZodString, import("better-auth").ZodArray<import("better-auth").ZodString, "many">>>>;
                }, "strip", import("better-auth").ZodTypeAny, {
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
                }, {
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
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                id: {
                                                    type: string;
                                                    description: string;
                                                };
                                                name: {
                                                    type: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                start: {
                                                    type: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                prefix: {
                                                    type: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                userId: {
                                                    type: string;
                                                    description: string;
                                                };
                                                refillInterval: {
                                                    type: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                refillAmount: {
                                                    type: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                lastRefillAt: {
                                                    type: string;
                                                    format: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                enabled: {
                                                    type: string;
                                                    description: string;
                                                    default: boolean;
                                                };
                                                rateLimitEnabled: {
                                                    type: string;
                                                    description: string;
                                                };
                                                rateLimitTimeWindow: {
                                                    type: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                rateLimitMax: {
                                                    type: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                requestCount: {
                                                    type: string;
                                                    description: string;
                                                };
                                                remaining: {
                                                    type: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                lastRequest: {
                                                    type: string;
                                                    format: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                expiresAt: {
                                                    type: string;
                                                    format: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                createdAt: {
                                                    type: string;
                                                    format: string;
                                                    description: string;
                                                };
                                                updatedAt: {
                                                    type: string;
                                                    format: string;
                                                    description: string;
                                                };
                                                metadata: {
                                                    type: string;
                                                    nullable: boolean;
                                                    additionalProperties: boolean;
                                                    description: string;
                                                };
                                                permissions: {
                                                    type: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/api-key/update";
        };
        deleteApiKey: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    keyId: string;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: import("better-auth").Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    success: boolean;
                };
            } : {
                success: boolean;
            }>;
            options: {
                method: "POST";
                body: import("better-auth").ZodObject<{
                    keyId: import("better-auth").ZodString;
                }, "strip", import("better-auth").ZodTypeAny, {
                    keyId: string;
                }, {
                    keyId: string;
                }>;
                use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            keyId: {
                                                type: string;
                                                description: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                            };
                        };
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                success: {
                                                    type: string;
                                                    description: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/api-key/delete";
        };
        listApiKeys: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0?: ({
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: import("better-auth").Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }) | undefined): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
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
                }[];
            } : {
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
            }[]>;
            options: {
                method: "GET";
                use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "array";
                                            items: {
                                                type: string;
                                                properties: {
                                                    id: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                    name: {
                                                        type: string;
                                                        nullable: boolean;
                                                        description: string;
                                                    };
                                                    start: {
                                                        type: string;
                                                        nullable: boolean;
                                                        description: string;
                                                    };
                                                    prefix: {
                                                        type: string;
                                                        nullable: boolean;
                                                        description: string;
                                                    };
                                                    userId: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                    refillInterval: {
                                                        type: string;
                                                        nullable: boolean;
                                                        description: string;
                                                    };
                                                    refillAmount: {
                                                        type: string;
                                                        nullable: boolean;
                                                        description: string;
                                                    };
                                                    lastRefillAt: {
                                                        type: string;
                                                        format: string;
                                                        nullable: boolean;
                                                        description: string;
                                                    };
                                                    enabled: {
                                                        type: string;
                                                        description: string;
                                                        default: boolean;
                                                    };
                                                    rateLimitEnabled: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                    rateLimitTimeWindow: {
                                                        type: string;
                                                        nullable: boolean;
                                                        description: string;
                                                    };
                                                    rateLimitMax: {
                                                        type: string;
                                                        nullable: boolean;
                                                        description: string;
                                                    };
                                                    requestCount: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                    remaining: {
                                                        type: string;
                                                        nullable: boolean;
                                                        description: string;
                                                    };
                                                    lastRequest: {
                                                        type: string;
                                                        format: string;
                                                        nullable: boolean;
                                                        description: string;
                                                    };
                                                    expiresAt: {
                                                        type: string;
                                                        format: string;
                                                        nullable: boolean;
                                                        description: string;
                                                    };
                                                    createdAt: {
                                                        type: string;
                                                        format: string;
                                                        description: string;
                                                    };
                                                    updatedAt: {
                                                        type: string;
                                                        format: string;
                                                        description: string;
                                                    };
                                                    metadata: {
                                                        type: string;
                                                        nullable: boolean;
                                                        additionalProperties: boolean;
                                                        description: string;
                                                    };
                                                    permissions: {
                                                        type: string;
                                                        nullable: boolean;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/api-key/list";
        };
    } & {
        signInUsername: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    password: string;
                    username: string;
                    rememberMe?: boolean | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: import("better-auth").Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
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
                } | null;
            } : {
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
            } | null>;
            options: {
                method: "POST";
                body: import("better-auth").ZodObject<{
                    username: import("better-auth").ZodString;
                    password: import("better-auth").ZodString;
                    rememberMe: import("better-auth").ZodOptional<import("better-auth").ZodBoolean>;
                }, "strip", import("better-auth").ZodTypeAny, {
                    password: string;
                    username: string;
                    rememberMe?: boolean | undefined;
                }, {
                    password: string;
                    username: string;
                    rememberMe?: boolean | undefined;
                }>;
                metadata: {
                    openapi: {
                        summary: string;
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                token: {
                                                    type: string;
                                                    description: string;
                                                };
                                                user: {
                                                    $ref: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/sign-in/username";
        };
    } & {
        setRole: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    userId: string;
                    role: "user" | "admin" | ("user" | "admin")[];
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: import("better-auth").Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    user: import("better-auth/plugins").UserWithRole;
                };
            } : {
                user: import("better-auth/plugins").UserWithRole;
            }>;
            options: {
                method: "POST";
                body: import("better-auth").ZodObject<{
                    userId: import("better-auth").ZodString;
                    role: import("better-auth").ZodUnion<[import("better-auth").ZodString, import("better-auth").ZodArray<import("better-auth").ZodString, "many">]>;
                }, "strip", import("better-auth").ZodTypeAny, {
                    userId: string;
                    role: string | string[];
                }, {
                    userId: string;
                    role: string | string[];
                }>;
                use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                    session: {
                        user: import("better-auth/plugins").UserWithRole;
                        session: import("better-auth").Session;
                    };
                }>)[];
                metadata: {
                    openapi: {
                        operationId: string;
                        summary: string;
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                user: {
                                                    $ref: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                    $Infer: {
                        body: {
                            userId: string;
                            role: "user" | "admin" | ("user" | "admin")[];
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/admin/set-role";
        };
        createUser: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    email: string;
                    password: string;
                    name: string;
                    role?: "user" | "admin" | ("user" | "admin")[] | undefined;
                    data?: Record<string, any>;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: import("better-auth").Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    user: import("better-auth/plugins").UserWithRole;
                };
            } : {
                user: import("better-auth/plugins").UserWithRole;
            }>;
            options: {
                method: "POST";
                body: import("better-auth").ZodObject<{
                    email: import("better-auth").ZodString;
                    password: import("better-auth").ZodString;
                    name: import("better-auth").ZodString;
                    role: import("better-auth").ZodOptional<import("better-auth").ZodUnion<[import("better-auth").ZodString, import("better-auth").ZodArray<import("better-auth").ZodString, "many">]>>;
                    data: import("better-auth").ZodOptional<import("better-auth").ZodRecord<import("better-auth").ZodString, import("better-auth").ZodAny>>;
                }, "strip", import("better-auth").ZodTypeAny, {
                    password: string;
                    name: string;
                    email: string;
                    data?: Record<string, any> | undefined;
                    role?: string | string[] | undefined;
                }, {
                    password: string;
                    name: string;
                    email: string;
                    data?: Record<string, any> | undefined;
                    role?: string | string[] | undefined;
                }>;
                metadata: {
                    openapi: {
                        operationId: string;
                        summary: string;
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                user: {
                                                    $ref: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                    $Infer: {
                        body: {
                            email: string;
                            password: string;
                            name: string;
                            role?: "user" | "admin" | ("user" | "admin")[] | undefined;
                            data?: Record<string, any>;
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/admin/create-user";
        };
        listUsers: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
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
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: import("better-auth").Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    users: import("better-auth/plugins").UserWithRole[];
                    total: number;
                    limit: number | undefined;
                    offset: number | undefined;
                } | {
                    users: never[];
                    total: number;
                };
            } : {
                users: import("better-auth/plugins").UserWithRole[];
                total: number;
                limit: number | undefined;
                offset: number | undefined;
            } | {
                users: never[];
                total: number;
            }>;
            options: {
                method: "GET";
                use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                    session: {
                        user: import("better-auth/plugins").UserWithRole;
                        session: import("better-auth").Session;
                    };
                }>)[];
                query: import("better-auth").ZodObject<{
                    searchValue: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                    searchField: import("better-auth").ZodOptional<import("better-auth").ZodEnum<["email", "name"]>>;
                    searchOperator: import("better-auth").ZodOptional<import("better-auth").ZodEnum<["contains", "starts_with", "ends_with"]>>;
                    limit: import("better-auth").ZodOptional<import("better-auth").ZodUnion<[import("better-auth").ZodString, import("better-auth").ZodNumber]>>;
                    offset: import("better-auth").ZodOptional<import("better-auth").ZodUnion<[import("better-auth").ZodString, import("better-auth").ZodNumber]>>;
                    sortBy: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                    sortDirection: import("better-auth").ZodOptional<import("better-auth").ZodEnum<["asc", "desc"]>>;
                    filterField: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                    filterValue: import("better-auth").ZodOptional<import("better-auth").ZodUnion<[import("better-auth").ZodUnion<[import("better-auth").ZodString, import("better-auth").ZodNumber]>, import("better-auth").ZodBoolean]>>;
                    filterOperator: import("better-auth").ZodOptional<import("better-auth").ZodEnum<["eq", "ne", "lt", "lte", "gt", "gte"]>>;
                }, "strip", import("better-auth").ZodTypeAny, {
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
                }, {
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
                }>;
                metadata: {
                    openapi: {
                        operationId: string;
                        summary: string;
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                users: {
                                                    type: string;
                                                    items: {
                                                        $ref: string;
                                                    };
                                                };
                                                total: {
                                                    type: string;
                                                };
                                                limit: {
                                                    type: string;
                                                };
                                                offset: {
                                                    type: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/admin/list-users";
        };
        listUserSessions: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    userId: string;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: import("better-auth").Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
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
                };
            } : {
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
            }>;
            options: {
                method: "POST";
                use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                    session: {
                        user: import("better-auth/plugins").UserWithRole;
                        session: import("better-auth").Session;
                    };
                }>)[];
                body: import("better-auth").ZodObject<{
                    userId: import("better-auth").ZodString;
                }, "strip", import("better-auth").ZodTypeAny, {
                    userId: string;
                }, {
                    userId: string;
                }>;
                metadata: {
                    openapi: {
                        operationId: string;
                        summary: string;
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                sessions: {
                                                    type: string;
                                                    items: {
                                                        $ref: string;
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/admin/list-user-sessions";
        };
        unbanUser: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    userId: string;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: import("better-auth").Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    user: any;
                };
            } : {
                user: any;
            }>;
            options: {
                method: "POST";
                body: import("better-auth").ZodObject<{
                    userId: import("better-auth").ZodString;
                }, "strip", import("better-auth").ZodTypeAny, {
                    userId: string;
                }, {
                    userId: string;
                }>;
                use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                    session: {
                        user: import("better-auth/plugins").UserWithRole;
                        session: import("better-auth").Session;
                    };
                }>)[];
                metadata: {
                    openapi: {
                        operationId: string;
                        summary: string;
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                user: {
                                                    $ref: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/admin/unban-user";
        };
        banUser: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    userId: string;
                    banReason?: string | undefined;
                    banExpiresIn?: number | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: import("better-auth").Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    user: any;
                };
            } : {
                user: any;
            }>;
            options: {
                method: "POST";
                body: import("better-auth").ZodObject<{
                    userId: import("better-auth").ZodString;
                    banReason: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                    banExpiresIn: import("better-auth").ZodOptional<import("better-auth").ZodNumber>;
                }, "strip", import("better-auth").ZodTypeAny, {
                    userId: string;
                    banReason?: string | undefined;
                    banExpiresIn?: number | undefined;
                }, {
                    userId: string;
                    banReason?: string | undefined;
                    banExpiresIn?: number | undefined;
                }>;
                use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                    session: {
                        user: import("better-auth/plugins").UserWithRole;
                        session: import("better-auth").Session;
                    };
                }>)[];
                metadata: {
                    openapi: {
                        operationId: string;
                        summary: string;
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                user: {
                                                    $ref: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/admin/ban-user";
        };
        impersonateUser: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    userId: string;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: import("better-auth").Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
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
                };
            } : {
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
            }>;
            options: {
                method: "POST";
                body: import("better-auth").ZodObject<{
                    userId: import("better-auth").ZodString;
                }, "strip", import("better-auth").ZodTypeAny, {
                    userId: string;
                }, {
                    userId: string;
                }>;
                use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                    session: {
                        user: import("better-auth/plugins").UserWithRole;
                        session: import("better-auth").Session;
                    };
                }>)[];
                metadata: {
                    openapi: {
                        operationId: string;
                        summary: string;
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                session: {
                                                    $ref: string;
                                                };
                                                user: {
                                                    $ref: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/admin/impersonate-user";
        };
        stopImpersonating: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0?: ({
                body?: undefined;
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: import("better-auth").Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }) | undefined): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    session: import("better-auth").Session & Record<string, any>;
                    user: import("better-auth").User & Record<string, any>;
                };
            } : {
                session: import("better-auth").Session & Record<string, any>;
                user: import("better-auth").User & Record<string, any>;
            }>;
            options: {
                method: "POST";
            } & {
                use: any[];
            };
            path: "/admin/stop-impersonating";
        };
        revokeUserSession: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    sessionToken: string;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: import("better-auth").Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    success: boolean;
                };
            } : {
                success: boolean;
            }>;
            options: {
                method: "POST";
                body: import("better-auth").ZodObject<{
                    sessionToken: import("better-auth").ZodString;
                }, "strip", import("better-auth").ZodTypeAny, {
                    sessionToken: string;
                }, {
                    sessionToken: string;
                }>;
                use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                    session: {
                        user: import("better-auth/plugins").UserWithRole;
                        session: import("better-auth").Session;
                    };
                }>)[];
                metadata: {
                    openapi: {
                        operationId: string;
                        summary: string;
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                success: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/admin/revoke-user-session";
        };
        revokeUserSessions: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    userId: string;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: import("better-auth").Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    success: boolean;
                };
            } : {
                success: boolean;
            }>;
            options: {
                method: "POST";
                body: import("better-auth").ZodObject<{
                    userId: import("better-auth").ZodString;
                }, "strip", import("better-auth").ZodTypeAny, {
                    userId: string;
                }, {
                    userId: string;
                }>;
                use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                    session: {
                        user: import("better-auth/plugins").UserWithRole;
                        session: import("better-auth").Session;
                    };
                }>)[];
                metadata: {
                    openapi: {
                        operationId: string;
                        summary: string;
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                success: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/admin/revoke-user-sessions";
        };
        removeUser: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    userId: string;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: import("better-auth").Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    success: boolean;
                };
            } : {
                success: boolean;
            }>;
            options: {
                method: "POST";
                body: import("better-auth").ZodObject<{
                    userId: import("better-auth").ZodString;
                }, "strip", import("better-auth").ZodTypeAny, {
                    userId: string;
                }, {
                    userId: string;
                }>;
                use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                    session: {
                        user: import("better-auth/plugins").UserWithRole;
                        session: import("better-auth").Session;
                    };
                }>)[];
                metadata: {
                    openapi: {
                        operationId: string;
                        summary: string;
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                success: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/admin/remove-user";
        };
        setUserPassword: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    userId: string;
                    newPassword: string;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: import("better-auth").Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: import("better-auth").ZodObject<{
                    newPassword: import("better-auth").ZodString;
                    userId: import("better-auth").ZodString;
                }, "strip", import("better-auth").ZodTypeAny, {
                    userId: string;
                    newPassword: string;
                }, {
                    userId: string;
                    newPassword: string;
                }>;
                use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                    session: {
                        user: import("better-auth/plugins").UserWithRole;
                        session: import("better-auth").Session;
                    };
                }>)[];
                metadata: {
                    openapi: {
                        operationId: string;
                        summary: string;
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/admin/set-user-password";
        };
        userHasPermission: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: ({
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
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: import("better-auth").Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    error: null;
                    success: boolean;
                };
            } : {
                error: null;
                success: boolean;
            }>;
            options: {
                method: "POST";
                body: import("better-auth").ZodIntersection<import("better-auth").ZodObject<{
                    userId: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                    role: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                }, "strip", import("better-auth").ZodTypeAny, {
                    userId?: string | undefined;
                    role?: string | undefined;
                }, {
                    userId?: string | undefined;
                    role?: string | undefined;
                }>, import("better-auth").ZodUnion<[import("better-auth").ZodObject<{
                    permission: import("better-auth").ZodRecord<import("better-auth").ZodString, import("better-auth").ZodArray<import("better-auth").ZodString, "many">>;
                    permissions: import("better-auth").ZodUndefined;
                }, "strip", import("better-auth").ZodTypeAny, {
                    permission: Record<string, string[]>;
                    permissions?: undefined;
                }, {
                    permission: Record<string, string[]>;
                    permissions?: undefined;
                }>, import("better-auth").ZodObject<{
                    permission: import("better-auth").ZodUndefined;
                    permissions: import("better-auth").ZodRecord<import("better-auth").ZodString, import("better-auth").ZodArray<import("better-auth").ZodString, "many">>;
                }, "strip", import("better-auth").ZodTypeAny, {
                    permissions: Record<string, string[]>;
                    permission?: undefined;
                }, {
                    permissions: Record<string, string[]>;
                    permission?: undefined;
                }>]>>;
                metadata: {
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            permission: {
                                                type: string;
                                                description: string;
                                                deprecated: boolean;
                                            };
                                            permissions: {
                                                type: string;
                                                description: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                            };
                        };
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                error: {
                                                    type: string;
                                                };
                                                success: {
                                                    type: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                    $Infer: {
                        body: ({
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
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/admin/has-permission";
        };
    }>;
    options: {
        database: (options: import("better-auth").BetterAuthOptions) => import("better-auth").Adapter;
        basePath: string;
        user: {
            additionalFields: {
                bio: {
                    type: "string";
                    nullable: boolean;
                    required: false;
                };
            };
        };
        account: {
            accountLinking: {
                enabled: true;
                trustedProviders: ("github" | "discord" | "email-password")[];
            };
        };
        advanced: {
            crossSubDomainCookies: {
                enabled: true;
                domain: string | undefined;
            };
        };
        trustedOrigins: string[];
        onAPIError: {
            onError(error: unknown): void;
        };
        emailAndPassword: {
            enabled: true;
        };
        socialProviders: {
            discord: {
                clientId: string;
                clientSecret: string;
            };
            github: {
                clientId: string;
                clientSecret: string;
            };
        };
        plugins: ({
            id: "account-details";
            schema: {
                account: {
                    fields: {
                        metadata: {
                            type: "string";
                            required: false;
                            transform: {
                                input: (value: string | number | boolean | string[] | Date | number[] | null | undefined) => string | number | boolean | string[] | Date | number[] | null | undefined;
                                output: (value: string | number | boolean | string[] | Date | number[] | null | undefined) => string | number | boolean | string[] | Date | number[] | null | undefined;
                            };
                        };
                    };
                };
            };
            hooks: {
                before: {
                    matcher: (ctx: import("better-auth").HookEndpointContext) => boolean;
                    handler: (inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                        context: import("better-auth").MiddlewareContext<import("better-auth").MiddlewareOptions, import("better-auth").AuthContext & {
                            returned?: unknown;
                            responseHeaders?: Headers;
                        }>;
                    }>;
                }[];
                after: {
                    matcher: (ctx: import("better-auth").HookEndpointContext) => boolean;
                    handler: (inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                        context: import("better-auth").MiddlewareContext<import("better-auth").MiddlewareOptions, import("better-auth").AuthContext & {
                            returned?: unknown;
                            responseHeaders?: Headers;
                        }>;
                    }>;
                }[];
            };
        } | {
            id: "birthdayPlugin";
            schema: {
                user: {
                    fields: {
                        birthday: {
                            type: "date";
                            required: true;
                            unique: false;
                        };
                    };
                };
            };
            hooks: {
                before: {
                    matcher: (context: import("better-auth").HookEndpointContext) => boolean;
                    handler: (inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                        context: import("better-auth").MiddlewareContext<import("better-auth").MiddlewareOptions, import("better-auth").AuthContext & {
                            returned?: unknown;
                            responseHeaders?: Headers;
                        }>;
                    }>;
                }[];
            };
        } | {
            id: "admin";
            init(): {
                options: {
                    databaseHooks: {
                        user: {
                            create: {
                                before(user: {
                                    id: string;
                                    name: string;
                                    email: string;
                                    emailVerified: boolean;
                                    createdAt: Date;
                                    updatedAt: Date;
                                    image?: string | null | undefined;
                                }): Promise<{
                                    data: {
                                        id: string;
                                        name: string;
                                        email: string;
                                        emailVerified: boolean;
                                        createdAt: Date;
                                        updatedAt: Date;
                                        image?: string | null | undefined;
                                        role: string;
                                    };
                                }>;
                            };
                        };
                        session: {
                            create: {
                                before(session: {
                                    id: string;
                                    createdAt: Date;
                                    updatedAt: Date;
                                    userId: string;
                                    expiresAt: Date;
                                    token: string;
                                    ipAddress?: string | null | undefined;
                                    userAgent?: string | null | undefined;
                                }, ctx: import("better-auth").GenericEndpointContext | undefined): Promise<void>;
                            };
                        };
                    };
                };
            };
            hooks: {
                after: {
                    matcher(context: import("better-auth").HookEndpointContext): boolean;
                    handler: (inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<import("better-auth/plugins").SessionWithImpersonatedBy[] | undefined>;
                }[];
            };
            endpoints: {
                setRole: {
                    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                        body: {
                            userId: string;
                            role: "user" | "admin" | ("user" | "admin")[];
                        };
                    } & {
                        method?: "POST" | undefined;
                    } & {
                        query?: Record<string, any> | undefined;
                    } & {
                        params?: Record<string, any>;
                    } & {
                        request?: Request;
                    } & {
                        headers?: HeadersInit;
                    } & {
                        asResponse?: boolean;
                        returnHeaders?: boolean;
                        use?: import("better-auth").Middleware[];
                        path?: string;
                    } & {
                        asResponse?: AsResponse | undefined;
                        returnHeaders?: ReturnHeaders | undefined;
                    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                        headers: Headers;
                        response: {
                            user: import("better-auth/plugins").UserWithRole;
                        };
                    } : {
                        user: import("better-auth/plugins").UserWithRole;
                    }>;
                    options: {
                        method: "POST";
                        body: import("better-auth").ZodObject<{
                            userId: import("better-auth").ZodString;
                            role: import("better-auth").ZodUnion<[import("better-auth").ZodString, import("better-auth").ZodArray<import("better-auth").ZodString, "many">]>;
                        }, "strip", import("better-auth").ZodTypeAny, {
                            userId: string;
                            role: string | string[];
                        }, {
                            userId: string;
                            role: string | string[];
                        }>;
                        use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                            session: {
                                user: import("better-auth/plugins").UserWithRole;
                                session: import("better-auth").Session;
                            };
                        }>)[];
                        metadata: {
                            openapi: {
                                operationId: string;
                                summary: string;
                                description: string;
                                responses: {
                                    200: {
                                        description: string;
                                        content: {
                                            "application/json": {
                                                schema: {
                                                    type: "object";
                                                    properties: {
                                                        user: {
                                                            $ref: string;
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                            $Infer: {
                                body: {
                                    userId: string;
                                    role: "user" | "admin" | ("user" | "admin")[];
                                };
                            };
                        };
                    } & {
                        use: any[];
                    };
                    path: "/admin/set-role";
                };
                createUser: {
                    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                        body: {
                            email: string;
                            password: string;
                            name: string;
                            role?: "user" | "admin" | ("user" | "admin")[] | undefined;
                            data?: Record<string, any>;
                        };
                    } & {
                        method?: "POST" | undefined;
                    } & {
                        query?: Record<string, any> | undefined;
                    } & {
                        params?: Record<string, any>;
                    } & {
                        request?: Request;
                    } & {
                        headers?: HeadersInit;
                    } & {
                        asResponse?: boolean;
                        returnHeaders?: boolean;
                        use?: import("better-auth").Middleware[];
                        path?: string;
                    } & {
                        asResponse?: AsResponse | undefined;
                        returnHeaders?: ReturnHeaders | undefined;
                    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                        headers: Headers;
                        response: {
                            user: import("better-auth/plugins").UserWithRole;
                        };
                    } : {
                        user: import("better-auth/plugins").UserWithRole;
                    }>;
                    options: {
                        method: "POST";
                        body: import("better-auth").ZodObject<{
                            email: import("better-auth").ZodString;
                            password: import("better-auth").ZodString;
                            name: import("better-auth").ZodString;
                            role: import("better-auth").ZodOptional<import("better-auth").ZodUnion<[import("better-auth").ZodString, import("better-auth").ZodArray<import("better-auth").ZodString, "many">]>>;
                            data: import("better-auth").ZodOptional<import("better-auth").ZodRecord<import("better-auth").ZodString, import("better-auth").ZodAny>>;
                        }, "strip", import("better-auth").ZodTypeAny, {
                            password: string;
                            name: string;
                            email: string;
                            data?: Record<string, any> | undefined;
                            role?: string | string[] | undefined;
                        }, {
                            password: string;
                            name: string;
                            email: string;
                            data?: Record<string, any> | undefined;
                            role?: string | string[] | undefined;
                        }>;
                        metadata: {
                            openapi: {
                                operationId: string;
                                summary: string;
                                description: string;
                                responses: {
                                    200: {
                                        description: string;
                                        content: {
                                            "application/json": {
                                                schema: {
                                                    type: "object";
                                                    properties: {
                                                        user: {
                                                            $ref: string;
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                            $Infer: {
                                body: {
                                    email: string;
                                    password: string;
                                    name: string;
                                    role?: "user" | "admin" | ("user" | "admin")[] | undefined;
                                    data?: Record<string, any>;
                                };
                            };
                        };
                    } & {
                        use: any[];
                    };
                    path: "/admin/create-user";
                };
                listUsers: {
                    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                        body?: undefined;
                    } & {
                        method?: "GET" | undefined;
                    } & {
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
                    } & {
                        params?: Record<string, any>;
                    } & {
                        request?: Request;
                    } & {
                        headers?: HeadersInit;
                    } & {
                        asResponse?: boolean;
                        returnHeaders?: boolean;
                        use?: import("better-auth").Middleware[];
                        path?: string;
                    } & {
                        asResponse?: AsResponse | undefined;
                        returnHeaders?: ReturnHeaders | undefined;
                    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                        headers: Headers;
                        response: {
                            users: import("better-auth/plugins").UserWithRole[];
                            total: number;
                            limit: number | undefined;
                            offset: number | undefined;
                        } | {
                            users: never[];
                            total: number;
                        };
                    } : {
                        users: import("better-auth/plugins").UserWithRole[];
                        total: number;
                        limit: number | undefined;
                        offset: number | undefined;
                    } | {
                        users: never[];
                        total: number;
                    }>;
                    options: {
                        method: "GET";
                        use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                            session: {
                                user: import("better-auth/plugins").UserWithRole;
                                session: import("better-auth").Session;
                            };
                        }>)[];
                        query: import("better-auth").ZodObject<{
                            searchValue: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                            searchField: import("better-auth").ZodOptional<import("better-auth").ZodEnum<["email", "name"]>>;
                            searchOperator: import("better-auth").ZodOptional<import("better-auth").ZodEnum<["contains", "starts_with", "ends_with"]>>;
                            limit: import("better-auth").ZodOptional<import("better-auth").ZodUnion<[import("better-auth").ZodString, import("better-auth").ZodNumber]>>;
                            offset: import("better-auth").ZodOptional<import("better-auth").ZodUnion<[import("better-auth").ZodString, import("better-auth").ZodNumber]>>;
                            sortBy: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                            sortDirection: import("better-auth").ZodOptional<import("better-auth").ZodEnum<["asc", "desc"]>>;
                            filterField: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                            filterValue: import("better-auth").ZodOptional<import("better-auth").ZodUnion<[import("better-auth").ZodUnion<[import("better-auth").ZodString, import("better-auth").ZodNumber]>, import("better-auth").ZodBoolean]>>;
                            filterOperator: import("better-auth").ZodOptional<import("better-auth").ZodEnum<["eq", "ne", "lt", "lte", "gt", "gte"]>>;
                        }, "strip", import("better-auth").ZodTypeAny, {
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
                        }, {
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
                        }>;
                        metadata: {
                            openapi: {
                                operationId: string;
                                summary: string;
                                description: string;
                                responses: {
                                    200: {
                                        description: string;
                                        content: {
                                            "application/json": {
                                                schema: {
                                                    type: "object";
                                                    properties: {
                                                        users: {
                                                            type: string;
                                                            items: {
                                                                $ref: string;
                                                            };
                                                        };
                                                        total: {
                                                            type: string;
                                                        };
                                                        limit: {
                                                            type: string;
                                                        };
                                                        offset: {
                                                            type: string;
                                                        };
                                                    };
                                                    required: string[];
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    } & {
                        use: any[];
                    };
                    path: "/admin/list-users";
                };
                listUserSessions: {
                    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                        body: {
                            userId: string;
                        };
                    } & {
                        method?: "POST" | undefined;
                    } & {
                        query?: Record<string, any> | undefined;
                    } & {
                        params?: Record<string, any>;
                    } & {
                        request?: Request;
                    } & {
                        headers?: HeadersInit;
                    } & {
                        asResponse?: boolean;
                        returnHeaders?: boolean;
                        use?: import("better-auth").Middleware[];
                        path?: string;
                    } & {
                        asResponse?: AsResponse | undefined;
                        returnHeaders?: ReturnHeaders | undefined;
                    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                        headers: Headers;
                        response: {
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
                        };
                    } : {
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
                    }>;
                    options: {
                        method: "POST";
                        use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                            session: {
                                user: import("better-auth/plugins").UserWithRole;
                                session: import("better-auth").Session;
                            };
                        }>)[];
                        body: import("better-auth").ZodObject<{
                            userId: import("better-auth").ZodString;
                        }, "strip", import("better-auth").ZodTypeAny, {
                            userId: string;
                        }, {
                            userId: string;
                        }>;
                        metadata: {
                            openapi: {
                                operationId: string;
                                summary: string;
                                description: string;
                                responses: {
                                    200: {
                                        description: string;
                                        content: {
                                            "application/json": {
                                                schema: {
                                                    type: "object";
                                                    properties: {
                                                        sessions: {
                                                            type: string;
                                                            items: {
                                                                $ref: string;
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    } & {
                        use: any[];
                    };
                    path: "/admin/list-user-sessions";
                };
                unbanUser: {
                    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                        body: {
                            userId: string;
                        };
                    } & {
                        method?: "POST" | undefined;
                    } & {
                        query?: Record<string, any> | undefined;
                    } & {
                        params?: Record<string, any>;
                    } & {
                        request?: Request;
                    } & {
                        headers?: HeadersInit;
                    } & {
                        asResponse?: boolean;
                        returnHeaders?: boolean;
                        use?: import("better-auth").Middleware[];
                        path?: string;
                    } & {
                        asResponse?: AsResponse | undefined;
                        returnHeaders?: ReturnHeaders | undefined;
                    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                        headers: Headers;
                        response: {
                            user: any;
                        };
                    } : {
                        user: any;
                    }>;
                    options: {
                        method: "POST";
                        body: import("better-auth").ZodObject<{
                            userId: import("better-auth").ZodString;
                        }, "strip", import("better-auth").ZodTypeAny, {
                            userId: string;
                        }, {
                            userId: string;
                        }>;
                        use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                            session: {
                                user: import("better-auth/plugins").UserWithRole;
                                session: import("better-auth").Session;
                            };
                        }>)[];
                        metadata: {
                            openapi: {
                                operationId: string;
                                summary: string;
                                description: string;
                                responses: {
                                    200: {
                                        description: string;
                                        content: {
                                            "application/json": {
                                                schema: {
                                                    type: "object";
                                                    properties: {
                                                        user: {
                                                            $ref: string;
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    } & {
                        use: any[];
                    };
                    path: "/admin/unban-user";
                };
                banUser: {
                    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                        body: {
                            userId: string;
                            banReason?: string | undefined;
                            banExpiresIn?: number | undefined;
                        };
                    } & {
                        method?: "POST" | undefined;
                    } & {
                        query?: Record<string, any> | undefined;
                    } & {
                        params?: Record<string, any>;
                    } & {
                        request?: Request;
                    } & {
                        headers?: HeadersInit;
                    } & {
                        asResponse?: boolean;
                        returnHeaders?: boolean;
                        use?: import("better-auth").Middleware[];
                        path?: string;
                    } & {
                        asResponse?: AsResponse | undefined;
                        returnHeaders?: ReturnHeaders | undefined;
                    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                        headers: Headers;
                        response: {
                            user: any;
                        };
                    } : {
                        user: any;
                    }>;
                    options: {
                        method: "POST";
                        body: import("better-auth").ZodObject<{
                            userId: import("better-auth").ZodString;
                            banReason: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                            banExpiresIn: import("better-auth").ZodOptional<import("better-auth").ZodNumber>;
                        }, "strip", import("better-auth").ZodTypeAny, {
                            userId: string;
                            banReason?: string | undefined;
                            banExpiresIn?: number | undefined;
                        }, {
                            userId: string;
                            banReason?: string | undefined;
                            banExpiresIn?: number | undefined;
                        }>;
                        use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                            session: {
                                user: import("better-auth/plugins").UserWithRole;
                                session: import("better-auth").Session;
                            };
                        }>)[];
                        metadata: {
                            openapi: {
                                operationId: string;
                                summary: string;
                                description: string;
                                responses: {
                                    200: {
                                        description: string;
                                        content: {
                                            "application/json": {
                                                schema: {
                                                    type: "object";
                                                    properties: {
                                                        user: {
                                                            $ref: string;
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    } & {
                        use: any[];
                    };
                    path: "/admin/ban-user";
                };
                impersonateUser: {
                    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                        body: {
                            userId: string;
                        };
                    } & {
                        method?: "POST" | undefined;
                    } & {
                        query?: Record<string, any> | undefined;
                    } & {
                        params?: Record<string, any>;
                    } & {
                        request?: Request;
                    } & {
                        headers?: HeadersInit;
                    } & {
                        asResponse?: boolean;
                        returnHeaders?: boolean;
                        use?: import("better-auth").Middleware[];
                        path?: string;
                    } & {
                        asResponse?: AsResponse | undefined;
                        returnHeaders?: ReturnHeaders | undefined;
                    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                        headers: Headers;
                        response: {
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
                        };
                    } : {
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
                    }>;
                    options: {
                        method: "POST";
                        body: import("better-auth").ZodObject<{
                            userId: import("better-auth").ZodString;
                        }, "strip", import("better-auth").ZodTypeAny, {
                            userId: string;
                        }, {
                            userId: string;
                        }>;
                        use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                            session: {
                                user: import("better-auth/plugins").UserWithRole;
                                session: import("better-auth").Session;
                            };
                        }>)[];
                        metadata: {
                            openapi: {
                                operationId: string;
                                summary: string;
                                description: string;
                                responses: {
                                    200: {
                                        description: string;
                                        content: {
                                            "application/json": {
                                                schema: {
                                                    type: "object";
                                                    properties: {
                                                        session: {
                                                            $ref: string;
                                                        };
                                                        user: {
                                                            $ref: string;
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    } & {
                        use: any[];
                    };
                    path: "/admin/impersonate-user";
                };
                stopImpersonating: {
                    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0?: ({
                        body?: undefined;
                    } & {
                        method?: "POST" | undefined;
                    } & {
                        query?: Record<string, any> | undefined;
                    } & {
                        params?: Record<string, any>;
                    } & {
                        request?: Request;
                    } & {
                        headers?: HeadersInit;
                    } & {
                        asResponse?: boolean;
                        returnHeaders?: boolean;
                        use?: import("better-auth").Middleware[];
                        path?: string;
                    } & {
                        asResponse?: AsResponse | undefined;
                        returnHeaders?: ReturnHeaders | undefined;
                    }) | undefined): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                        headers: Headers;
                        response: {
                            session: import("better-auth").Session & Record<string, any>;
                            user: import("better-auth").User & Record<string, any>;
                        };
                    } : {
                        session: import("better-auth").Session & Record<string, any>;
                        user: import("better-auth").User & Record<string, any>;
                    }>;
                    options: {
                        method: "POST";
                    } & {
                        use: any[];
                    };
                    path: "/admin/stop-impersonating";
                };
                revokeUserSession: {
                    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                        body: {
                            sessionToken: string;
                        };
                    } & {
                        method?: "POST" | undefined;
                    } & {
                        query?: Record<string, any> | undefined;
                    } & {
                        params?: Record<string, any>;
                    } & {
                        request?: Request;
                    } & {
                        headers?: HeadersInit;
                    } & {
                        asResponse?: boolean;
                        returnHeaders?: boolean;
                        use?: import("better-auth").Middleware[];
                        path?: string;
                    } & {
                        asResponse?: AsResponse | undefined;
                        returnHeaders?: ReturnHeaders | undefined;
                    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                        headers: Headers;
                        response: {
                            success: boolean;
                        };
                    } : {
                        success: boolean;
                    }>;
                    options: {
                        method: "POST";
                        body: import("better-auth").ZodObject<{
                            sessionToken: import("better-auth").ZodString;
                        }, "strip", import("better-auth").ZodTypeAny, {
                            sessionToken: string;
                        }, {
                            sessionToken: string;
                        }>;
                        use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                            session: {
                                user: import("better-auth/plugins").UserWithRole;
                                session: import("better-auth").Session;
                            };
                        }>)[];
                        metadata: {
                            openapi: {
                                operationId: string;
                                summary: string;
                                description: string;
                                responses: {
                                    200: {
                                        description: string;
                                        content: {
                                            "application/json": {
                                                schema: {
                                                    type: "object";
                                                    properties: {
                                                        success: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    } & {
                        use: any[];
                    };
                    path: "/admin/revoke-user-session";
                };
                revokeUserSessions: {
                    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                        body: {
                            userId: string;
                        };
                    } & {
                        method?: "POST" | undefined;
                    } & {
                        query?: Record<string, any> | undefined;
                    } & {
                        params?: Record<string, any>;
                    } & {
                        request?: Request;
                    } & {
                        headers?: HeadersInit;
                    } & {
                        asResponse?: boolean;
                        returnHeaders?: boolean;
                        use?: import("better-auth").Middleware[];
                        path?: string;
                    } & {
                        asResponse?: AsResponse | undefined;
                        returnHeaders?: ReturnHeaders | undefined;
                    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                        headers: Headers;
                        response: {
                            success: boolean;
                        };
                    } : {
                        success: boolean;
                    }>;
                    options: {
                        method: "POST";
                        body: import("better-auth").ZodObject<{
                            userId: import("better-auth").ZodString;
                        }, "strip", import("better-auth").ZodTypeAny, {
                            userId: string;
                        }, {
                            userId: string;
                        }>;
                        use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                            session: {
                                user: import("better-auth/plugins").UserWithRole;
                                session: import("better-auth").Session;
                            };
                        }>)[];
                        metadata: {
                            openapi: {
                                operationId: string;
                                summary: string;
                                description: string;
                                responses: {
                                    200: {
                                        description: string;
                                        content: {
                                            "application/json": {
                                                schema: {
                                                    type: "object";
                                                    properties: {
                                                        success: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    } & {
                        use: any[];
                    };
                    path: "/admin/revoke-user-sessions";
                };
                removeUser: {
                    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                        body: {
                            userId: string;
                        };
                    } & {
                        method?: "POST" | undefined;
                    } & {
                        query?: Record<string, any> | undefined;
                    } & {
                        params?: Record<string, any>;
                    } & {
                        request?: Request;
                    } & {
                        headers?: HeadersInit;
                    } & {
                        asResponse?: boolean;
                        returnHeaders?: boolean;
                        use?: import("better-auth").Middleware[];
                        path?: string;
                    } & {
                        asResponse?: AsResponse | undefined;
                        returnHeaders?: ReturnHeaders | undefined;
                    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                        headers: Headers;
                        response: {
                            success: boolean;
                        };
                    } : {
                        success: boolean;
                    }>;
                    options: {
                        method: "POST";
                        body: import("better-auth").ZodObject<{
                            userId: import("better-auth").ZodString;
                        }, "strip", import("better-auth").ZodTypeAny, {
                            userId: string;
                        }, {
                            userId: string;
                        }>;
                        use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                            session: {
                                user: import("better-auth/plugins").UserWithRole;
                                session: import("better-auth").Session;
                            };
                        }>)[];
                        metadata: {
                            openapi: {
                                operationId: string;
                                summary: string;
                                description: string;
                                responses: {
                                    200: {
                                        description: string;
                                        content: {
                                            "application/json": {
                                                schema: {
                                                    type: "object";
                                                    properties: {
                                                        success: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    } & {
                        use: any[];
                    };
                    path: "/admin/remove-user";
                };
                setUserPassword: {
                    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                        body: {
                            userId: string;
                            newPassword: string;
                        };
                    } & {
                        method?: "POST" | undefined;
                    } & {
                        query?: Record<string, any> | undefined;
                    } & {
                        params?: Record<string, any>;
                    } & {
                        request?: Request;
                    } & {
                        headers?: HeadersInit;
                    } & {
                        asResponse?: boolean;
                        returnHeaders?: boolean;
                        use?: import("better-auth").Middleware[];
                        path?: string;
                    } & {
                        asResponse?: AsResponse | undefined;
                        returnHeaders?: ReturnHeaders | undefined;
                    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                        headers: Headers;
                        response: {
                            status: boolean;
                        };
                    } : {
                        status: boolean;
                    }>;
                    options: {
                        method: "POST";
                        body: import("better-auth").ZodObject<{
                            newPassword: import("better-auth").ZodString;
                            userId: import("better-auth").ZodString;
                        }, "strip", import("better-auth").ZodTypeAny, {
                            userId: string;
                            newPassword: string;
                        }, {
                            userId: string;
                            newPassword: string;
                        }>;
                        use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                            session: {
                                user: import("better-auth/plugins").UserWithRole;
                                session: import("better-auth").Session;
                            };
                        }>)[];
                        metadata: {
                            openapi: {
                                operationId: string;
                                summary: string;
                                description: string;
                                responses: {
                                    200: {
                                        description: string;
                                        content: {
                                            "application/json": {
                                                schema: {
                                                    type: "object";
                                                    properties: {
                                                        status: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    } & {
                        use: any[];
                    };
                    path: "/admin/set-user-password";
                };
                userHasPermission: {
                    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                        body: ({
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
                        };
                    } & {
                        method?: "POST" | undefined;
                    } & {
                        query?: Record<string, any> | undefined;
                    } & {
                        params?: Record<string, any>;
                    } & {
                        request?: Request;
                    } & {
                        headers?: HeadersInit;
                    } & {
                        asResponse?: boolean;
                        returnHeaders?: boolean;
                        use?: import("better-auth").Middleware[];
                        path?: string;
                    } & {
                        asResponse?: AsResponse | undefined;
                        returnHeaders?: ReturnHeaders | undefined;
                    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                        headers: Headers;
                        response: {
                            error: null;
                            success: boolean;
                        };
                    } : {
                        error: null;
                        success: boolean;
                    }>;
                    options: {
                        method: "POST";
                        body: import("better-auth").ZodIntersection<import("better-auth").ZodObject<{
                            userId: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                            role: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                        }, "strip", import("better-auth").ZodTypeAny, {
                            userId?: string | undefined;
                            role?: string | undefined;
                        }, {
                            userId?: string | undefined;
                            role?: string | undefined;
                        }>, import("better-auth").ZodUnion<[import("better-auth").ZodObject<{
                            permission: import("better-auth").ZodRecord<import("better-auth").ZodString, import("better-auth").ZodArray<import("better-auth").ZodString, "many">>;
                            permissions: import("better-auth").ZodUndefined;
                        }, "strip", import("better-auth").ZodTypeAny, {
                            permission: Record<string, string[]>;
                            permissions?: undefined;
                        }, {
                            permission: Record<string, string[]>;
                            permissions?: undefined;
                        }>, import("better-auth").ZodObject<{
                            permission: import("better-auth").ZodUndefined;
                            permissions: import("better-auth").ZodRecord<import("better-auth").ZodString, import("better-auth").ZodArray<import("better-auth").ZodString, "many">>;
                        }, "strip", import("better-auth").ZodTypeAny, {
                            permissions: Record<string, string[]>;
                            permission?: undefined;
                        }, {
                            permissions: Record<string, string[]>;
                            permission?: undefined;
                        }>]>>;
                        metadata: {
                            openapi: {
                                description: string;
                                requestBody: {
                                    content: {
                                        "application/json": {
                                            schema: {
                                                type: "object";
                                                properties: {
                                                    permission: {
                                                        type: string;
                                                        description: string;
                                                        deprecated: boolean;
                                                    };
                                                    permissions: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                        };
                                    };
                                };
                                responses: {
                                    "200": {
                                        description: string;
                                        content: {
                                            "application/json": {
                                                schema: {
                                                    type: "object";
                                                    properties: {
                                                        error: {
                                                            type: string;
                                                        };
                                                        success: {
                                                            type: string;
                                                        };
                                                    };
                                                    required: string[];
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                            $Infer: {
                                body: ({
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
                                };
                            };
                        };
                    } & {
                        use: any[];
                    };
                    path: "/admin/has-permission";
                };
            };
            $ERROR_CODES: {
                readonly FAILED_TO_CREATE_USER: "Failed to create user";
                readonly USER_ALREADY_EXISTS: "User already exists";
                readonly YOU_CANNOT_BAN_YOURSELF: "You cannot ban yourself";
                readonly YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE: "You are not allowed to change users role";
                readonly YOU_ARE_NOT_ALLOWED_TO_CREATE_USERS: "You are not allowed to create users";
                readonly YOU_ARE_NOT_ALLOWED_TO_LIST_USERS: "You are not allowed to list users";
                readonly YOU_ARE_NOT_ALLOWED_TO_LIST_USERS_SESSIONS: "You are not allowed to list users sessions";
                readonly YOU_ARE_NOT_ALLOWED_TO_BAN_USERS: "You are not allowed to ban users";
                readonly YOU_ARE_NOT_ALLOWED_TO_IMPERSONATE_USERS: "You are not allowed to impersonate users";
                readonly YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS: "You are not allowed to revoke users sessions";
                readonly YOU_ARE_NOT_ALLOWED_TO_DELETE_USERS: "You are not allowed to delete users";
                readonly YOU_ARE_NOT_ALLOWED_TO_SET_USERS_PASSWORD: "You are not allowed to set users password";
                readonly BANNED_USER: "You have been banned from this application";
            };
            schema: {
                user: {
                    fields: {
                        role: {
                            type: "string";
                            required: false;
                            input: false;
                        };
                        banned: {
                            type: "boolean";
                            defaultValue: false;
                            required: false;
                            input: false;
                        };
                        banReason: {
                            type: "string";
                            required: false;
                            input: false;
                        };
                        banExpires: {
                            type: "date";
                            required: false;
                            input: false;
                        };
                    };
                };
                session: {
                    fields: {
                        impersonatedBy: {
                            type: "string";
                            required: false;
                        };
                    };
                };
            };
        } | {
            id: "api-key";
            $ERROR_CODES: {
                INVALID_METADATA_TYPE: string;
                REFILL_AMOUNT_AND_INTERVAL_REQUIRED: string;
                REFILL_INTERVAL_AND_AMOUNT_REQUIRED: string;
                USER_BANNED: string;
                UNAUTHORIZED_SESSION: string;
                KEY_NOT_FOUND: string;
                KEY_DISABLED: string;
                KEY_EXPIRED: string;
                USAGE_EXCEEDED: string;
                KEY_NOT_RECOVERABLE: string;
                EXPIRES_IN_IS_TOO_SMALL: string;
                EXPIRES_IN_IS_TOO_LARGE: string;
                INVALID_REMAINING: string;
                INVALID_PREFIX_LENGTH: string;
                INVALID_NAME_LENGTH: string;
                METADATA_DISABLED: string;
                RATE_LIMIT_EXCEEDED: string;
                NO_VALUES_TO_UPDATE: string;
                KEY_DISABLED_EXPIRATION: string;
                INVALID_API_KEY: string;
                INVALID_USER_ID_FROM_API_KEY: string;
                INVALID_API_KEY_GETTER_RETURN_TYPE: string;
                SERVER_ONLY_PROPERTY: string;
            };
            hooks: {
                before: {
                    matcher: (ctx: import("better-auth").HookEndpointContext) => boolean;
                    handler: (inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                        user: {
                            id: string;
                            name: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                        session: {
                            id: string;
                            token: string;
                            userId: string;
                            userAgent: string | null;
                            ipAddress: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                            expiresAt: Date;
                        };
                    } | {
                        context: import("better-auth").MiddlewareContext<import("better-auth").MiddlewareOptions, import("better-auth").AuthContext & {
                            returned?: unknown;
                            responseHeaders?: Headers;
                        }>;
                    }>;
                }[];
            };
            endpoints: {
                createApiKey: {
                    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                        body: {
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
                        };
                    } & {
                        method?: "POST" | undefined;
                    } & {
                        query?: Record<string, any> | undefined;
                    } & {
                        params?: Record<string, any>;
                    } & {
                        request?: Request;
                    } & {
                        headers?: HeadersInit;
                    } & {
                        asResponse?: boolean;
                        returnHeaders?: boolean;
                        use?: import("better-auth").Middleware[];
                        path?: string;
                    } & {
                        asResponse?: AsResponse | undefined;
                        returnHeaders?: ReturnHeaders | undefined;
                    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                        headers: Headers;
                        response: {
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
                        };
                    } : {
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
                    }>;
                    options: {
                        method: "POST";
                        body: import("better-auth").ZodObject<{
                            name: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                            expiresIn: import("better-auth").ZodDefault<import("better-auth").ZodNullable<import("better-auth").ZodOptional<import("better-auth").ZodNumber>>>;
                            userId: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                            prefix: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                            remaining: import("better-auth").ZodDefault<import("better-auth").ZodNullable<import("better-auth").ZodOptional<import("better-auth").ZodNumber>>>;
                            metadata: import("better-auth").ZodOptional<import("better-auth").ZodAny>;
                            refillAmount: import("better-auth").ZodOptional<import("better-auth").ZodNumber>;
                            refillInterval: import("better-auth").ZodOptional<import("better-auth").ZodNumber>;
                            rateLimitTimeWindow: import("better-auth").ZodOptional<import("better-auth").ZodNumber>;
                            rateLimitMax: import("better-auth").ZodOptional<import("better-auth").ZodNumber>;
                            rateLimitEnabled: import("better-auth").ZodOptional<import("better-auth").ZodBoolean>;
                            permissions: import("better-auth").ZodOptional<import("better-auth").ZodRecord<import("better-auth").ZodString, import("better-auth").ZodArray<import("better-auth").ZodString, "many">>>;
                        }, "strip", import("better-auth").ZodTypeAny, {
                            expiresIn: number | null;
                            remaining: number | null;
                            metadata?: any;
                            name?: string | undefined;
                            userId?: string | undefined;
                            prefix?: string | undefined;
                            permissions?: Record<string, string[]> | undefined;
                            rateLimitMax?: number | undefined;
                            refillInterval?: number | undefined;
                            refillAmount?: number | undefined;
                            rateLimitEnabled?: boolean | undefined;
                            rateLimitTimeWindow?: number | undefined;
                        }, {
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
                        }>;
                        metadata: {
                            openapi: {
                                description: string;
                                responses: {
                                    "200": {
                                        description: string;
                                        content: {
                                            "application/json": {
                                                schema: {
                                                    type: "object";
                                                    properties: {
                                                        id: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        createdAt: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                        updatedAt: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                        name: {
                                                            type: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        prefix: {
                                                            type: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        start: {
                                                            type: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        key: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        enabled: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        expiresAt: {
                                                            type: string;
                                                            format: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        userId: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        lastRefillAt: {
                                                            type: string;
                                                            format: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        lastRequest: {
                                                            type: string;
                                                            format: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        metadata: {
                                                            type: string;
                                                            nullable: boolean;
                                                            additionalProperties: boolean;
                                                            description: string;
                                                        };
                                                        rateLimitMax: {
                                                            type: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        rateLimitTimeWindow: {
                                                            type: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        remaining: {
                                                            type: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        refillAmount: {
                                                            type: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        refillInterval: {
                                                            type: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        rateLimitEnabled: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        requestCount: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        permissions: {
                                                            type: string;
                                                            nullable: boolean;
                                                            additionalProperties: {
                                                                type: string;
                                                                items: {
                                                                    type: string;
                                                                };
                                                            };
                                                            description: string;
                                                        };
                                                    };
                                                    required: string[];
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    } & {
                        use: any[];
                    };
                    path: "/api-key/create";
                };
                verifyApiKey: {
                    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                        body: {
                            key: string;
                            permissions?: Record<string, string[]> | undefined;
                        };
                    } & {
                        method?: "POST" | undefined;
                    } & {
                        query?: Record<string, any> | undefined;
                    } & {
                        params?: Record<string, any>;
                    } & {
                        request?: Request;
                    } & {
                        headers?: HeadersInit;
                    } & {
                        asResponse?: boolean;
                        returnHeaders?: boolean;
                        use?: import("better-auth").Middleware[];
                        path?: string;
                    } & {
                        asResponse?: AsResponse | undefined;
                        returnHeaders?: ReturnHeaders | undefined;
                    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                        headers: Headers;
                        response: {
                            valid: boolean;
                            error: {
                                message: string;
                                code: "KEY_NOT_FOUND";
                            };
                            key: null;
                        } | {
                            valid: boolean;
                            error: {
                                message: string;
                                code: "KEY_DISABLED";
                            };
                            key: null;
                        } | {
                            valid: boolean;
                            error: {
                                message: string;
                                code: "KEY_EXPIRED";
                            };
                            key: null;
                        } | {
                            valid: boolean;
                            error: {
                                message: string;
                                code: "USAGE_EXCEEDED";
                            };
                            key: null;
                        } | {
                            valid: boolean;
                            error: {
                                message: string | null;
                                code: "RATE_LIMITED";
                                details: {
                                    tryAgainIn: number | null;
                                };
                            };
                            key: null;
                        } | {
                            valid: boolean;
                            error: null;
                            key: Omit<{
                                id: string;
                                name: string | null;
                                start: string | null;
                                prefix: string | null;
                                key: string;
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
                                permissions?: {
                                    [key: string]: string[];
                                } | null;
                            }, "key"> | null;
                        };
                    } : {
                        valid: boolean;
                        error: {
                            message: string;
                            code: "KEY_NOT_FOUND";
                        };
                        key: null;
                    } | {
                        valid: boolean;
                        error: {
                            message: string;
                            code: "KEY_DISABLED";
                        };
                        key: null;
                    } | {
                        valid: boolean;
                        error: {
                            message: string;
                            code: "KEY_EXPIRED";
                        };
                        key: null;
                    } | {
                        valid: boolean;
                        error: {
                            message: string;
                            code: "USAGE_EXCEEDED";
                        };
                        key: null;
                    } | {
                        valid: boolean;
                        error: {
                            message: string | null;
                            code: "RATE_LIMITED";
                            details: {
                                tryAgainIn: number | null;
                            };
                        };
                        key: null;
                    } | {
                        valid: boolean;
                        error: null;
                        key: Omit<{
                            id: string;
                            name: string | null;
                            start: string | null;
                            prefix: string | null;
                            key: string;
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
                            permissions?: {
                                [key: string]: string[];
                            } | null;
                        }, "key"> | null;
                    }>;
                    options: {
                        method: "POST";
                        body: import("better-auth").ZodObject<{
                            key: import("better-auth").ZodString;
                            permissions: import("better-auth").ZodOptional<import("better-auth").ZodRecord<import("better-auth").ZodString, import("better-auth").ZodArray<import("better-auth").ZodString, "many">>>;
                        }, "strip", import("better-auth").ZodTypeAny, {
                            key: string;
                            permissions?: Record<string, string[]> | undefined;
                        }, {
                            key: string;
                            permissions?: Record<string, string[]> | undefined;
                        }>;
                        metadata: {
                            SERVER_ONLY: true;
                        };
                    } & {
                        use: any[];
                    };
                    path: "/api-key/verify";
                };
                getApiKey: {
                    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                        body?: undefined;
                    } & {
                        method?: "GET" | undefined;
                    } & {
                        query: {
                            id: string;
                        };
                    } & {
                        params?: Record<string, any>;
                    } & {
                        request?: Request;
                    } & {
                        headers?: HeadersInit;
                    } & {
                        asResponse?: boolean;
                        returnHeaders?: boolean;
                        use?: import("better-auth").Middleware[];
                        path?: string;
                    } & {
                        asResponse?: AsResponse | undefined;
                        returnHeaders?: ReturnHeaders | undefined;
                    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                        headers: Headers;
                        response: {
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
                        };
                    } : {
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
                    }>;
                    options: {
                        method: "GET";
                        query: import("better-auth").ZodObject<{
                            id: import("better-auth").ZodString;
                        }, "strip", import("better-auth").ZodTypeAny, {
                            id: string;
                        }, {
                            id: string;
                        }>;
                        use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                            session: {
                                session: Record<string, any> & {
                                    id: string;
                                    createdAt: Date;
                                    updatedAt: Date;
                                    userId: string;
                                    expiresAt: Date;
                                    token: string;
                                    ipAddress?: string | null | undefined;
                                    userAgent?: string | null | undefined;
                                };
                                user: Record<string, any> & {
                                    id: string;
                                    name: string;
                                    email: string;
                                    emailVerified: boolean;
                                    createdAt: Date;
                                    updatedAt: Date;
                                    image?: string | null | undefined;
                                };
                            };
                        }>)[];
                        metadata: {
                            openapi: {
                                description: string;
                                responses: {
                                    "200": {
                                        description: string;
                                        content: {
                                            "application/json": {
                                                schema: {
                                                    type: "object";
                                                    properties: {
                                                        id: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        name: {
                                                            type: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        start: {
                                                            type: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        prefix: {
                                                            type: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        userId: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        refillInterval: {
                                                            type: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        refillAmount: {
                                                            type: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        lastRefillAt: {
                                                            type: string;
                                                            format: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        enabled: {
                                                            type: string;
                                                            description: string;
                                                            default: boolean;
                                                        };
                                                        rateLimitEnabled: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        rateLimitTimeWindow: {
                                                            type: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        rateLimitMax: {
                                                            type: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        requestCount: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        remaining: {
                                                            type: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        lastRequest: {
                                                            type: string;
                                                            format: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        expiresAt: {
                                                            type: string;
                                                            format: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        createdAt: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                        updatedAt: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                        metadata: {
                                                            type: string;
                                                            nullable: boolean;
                                                            additionalProperties: boolean;
                                                            description: string;
                                                        };
                                                        permissions: {
                                                            type: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                    };
                                                    required: string[];
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    } & {
                        use: any[];
                    };
                    path: "/api-key/get";
                };
                updateApiKey: {
                    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                        body: {
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
                        };
                    } & {
                        method?: "POST" | undefined;
                    } & {
                        query?: Record<string, any> | undefined;
                    } & {
                        params?: Record<string, any>;
                    } & {
                        request?: Request;
                    } & {
                        headers?: HeadersInit;
                    } & {
                        asResponse?: boolean;
                        returnHeaders?: boolean;
                        use?: import("better-auth").Middleware[];
                        path?: string;
                    } & {
                        asResponse?: AsResponse | undefined;
                        returnHeaders?: ReturnHeaders | undefined;
                    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                        headers: Headers;
                        response: {
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
                        };
                    } : {
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
                    }>;
                    options: {
                        method: "POST";
                        body: import("better-auth").ZodObject<{
                            keyId: import("better-auth").ZodString;
                            userId: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                            name: import("better-auth").ZodOptional<import("better-auth").ZodString>;
                            enabled: import("better-auth").ZodOptional<import("better-auth").ZodBoolean>;
                            remaining: import("better-auth").ZodOptional<import("better-auth").ZodNumber>;
                            refillAmount: import("better-auth").ZodOptional<import("better-auth").ZodNumber>;
                            refillInterval: import("better-auth").ZodOptional<import("better-auth").ZodNumber>;
                            metadata: import("better-auth").ZodOptional<import("better-auth").ZodAny>;
                            expiresIn: import("better-auth").ZodNullable<import("better-auth").ZodOptional<import("better-auth").ZodNumber>>;
                            rateLimitEnabled: import("better-auth").ZodOptional<import("better-auth").ZodBoolean>;
                            rateLimitTimeWindow: import("better-auth").ZodOptional<import("better-auth").ZodNumber>;
                            rateLimitMax: import("better-auth").ZodOptional<import("better-auth").ZodNumber>;
                            permissions: import("better-auth").ZodNullable<import("better-auth").ZodOptional<import("better-auth").ZodRecord<import("better-auth").ZodString, import("better-auth").ZodArray<import("better-auth").ZodString, "many">>>>;
                        }, "strip", import("better-auth").ZodTypeAny, {
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
                        }, {
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
                        }>;
                        metadata: {
                            openapi: {
                                description: string;
                                responses: {
                                    "200": {
                                        description: string;
                                        content: {
                                            "application/json": {
                                                schema: {
                                                    type: "object";
                                                    properties: {
                                                        id: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        name: {
                                                            type: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        start: {
                                                            type: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        prefix: {
                                                            type: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        userId: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        refillInterval: {
                                                            type: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        refillAmount: {
                                                            type: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        lastRefillAt: {
                                                            type: string;
                                                            format: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        enabled: {
                                                            type: string;
                                                            description: string;
                                                            default: boolean;
                                                        };
                                                        rateLimitEnabled: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        rateLimitTimeWindow: {
                                                            type: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        rateLimitMax: {
                                                            type: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        requestCount: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        remaining: {
                                                            type: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        lastRequest: {
                                                            type: string;
                                                            format: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        expiresAt: {
                                                            type: string;
                                                            format: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        createdAt: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                        updatedAt: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                        metadata: {
                                                            type: string;
                                                            nullable: boolean;
                                                            additionalProperties: boolean;
                                                            description: string;
                                                        };
                                                        permissions: {
                                                            type: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                    };
                                                    required: string[];
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    } & {
                        use: any[];
                    };
                    path: "/api-key/update";
                };
                deleteApiKey: {
                    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                        body: {
                            keyId: string;
                        };
                    } & {
                        method?: "POST" | undefined;
                    } & {
                        query?: Record<string, any> | undefined;
                    } & {
                        params?: Record<string, any>;
                    } & {
                        request?: Request;
                    } & {
                        headers?: HeadersInit;
                    } & {
                        asResponse?: boolean;
                        returnHeaders?: boolean;
                        use?: import("better-auth").Middleware[];
                        path?: string;
                    } & {
                        asResponse?: AsResponse | undefined;
                        returnHeaders?: ReturnHeaders | undefined;
                    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                        headers: Headers;
                        response: {
                            success: boolean;
                        };
                    } : {
                        success: boolean;
                    }>;
                    options: {
                        method: "POST";
                        body: import("better-auth").ZodObject<{
                            keyId: import("better-auth").ZodString;
                        }, "strip", import("better-auth").ZodTypeAny, {
                            keyId: string;
                        }, {
                            keyId: string;
                        }>;
                        use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                            session: {
                                session: Record<string, any> & {
                                    id: string;
                                    createdAt: Date;
                                    updatedAt: Date;
                                    userId: string;
                                    expiresAt: Date;
                                    token: string;
                                    ipAddress?: string | null | undefined;
                                    userAgent?: string | null | undefined;
                                };
                                user: Record<string, any> & {
                                    id: string;
                                    name: string;
                                    email: string;
                                    emailVerified: boolean;
                                    createdAt: Date;
                                    updatedAt: Date;
                                    image?: string | null | undefined;
                                };
                            };
                        }>)[];
                        metadata: {
                            openapi: {
                                description: string;
                                requestBody: {
                                    content: {
                                        "application/json": {
                                            schema: {
                                                type: "object";
                                                properties: {
                                                    keyId: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                        };
                                    };
                                };
                                responses: {
                                    "200": {
                                        description: string;
                                        content: {
                                            "application/json": {
                                                schema: {
                                                    type: "object";
                                                    properties: {
                                                        success: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                    };
                                                    required: string[];
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    } & {
                        use: any[];
                    };
                    path: "/api-key/delete";
                };
                listApiKeys: {
                    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0?: ({
                        body?: undefined;
                    } & {
                        method?: "GET" | undefined;
                    } & {
                        query?: Record<string, any> | undefined;
                    } & {
                        params?: Record<string, any>;
                    } & {
                        request?: Request;
                    } & {
                        headers?: HeadersInit;
                    } & {
                        asResponse?: boolean;
                        returnHeaders?: boolean;
                        use?: import("better-auth").Middleware[];
                        path?: string;
                    } & {
                        asResponse?: AsResponse | undefined;
                        returnHeaders?: ReturnHeaders | undefined;
                    }) | undefined): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                        headers: Headers;
                        response: {
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
                        }[];
                    } : {
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
                    }[]>;
                    options: {
                        method: "GET";
                        use: ((inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<{
                            session: {
                                session: Record<string, any> & {
                                    id: string;
                                    createdAt: Date;
                                    updatedAt: Date;
                                    userId: string;
                                    expiresAt: Date;
                                    token: string;
                                    ipAddress?: string | null | undefined;
                                    userAgent?: string | null | undefined;
                                };
                                user: Record<string, any> & {
                                    id: string;
                                    name: string;
                                    email: string;
                                    emailVerified: boolean;
                                    createdAt: Date;
                                    updatedAt: Date;
                                    image?: string | null | undefined;
                                };
                            };
                        }>)[];
                        metadata: {
                            openapi: {
                                description: string;
                                responses: {
                                    "200": {
                                        description: string;
                                        content: {
                                            "application/json": {
                                                schema: {
                                                    type: "array";
                                                    items: {
                                                        type: string;
                                                        properties: {
                                                            id: {
                                                                type: string;
                                                                description: string;
                                                            };
                                                            name: {
                                                                type: string;
                                                                nullable: boolean;
                                                                description: string;
                                                            };
                                                            start: {
                                                                type: string;
                                                                nullable: boolean;
                                                                description: string;
                                                            };
                                                            prefix: {
                                                                type: string;
                                                                nullable: boolean;
                                                                description: string;
                                                            };
                                                            userId: {
                                                                type: string;
                                                                description: string;
                                                            };
                                                            refillInterval: {
                                                                type: string;
                                                                nullable: boolean;
                                                                description: string;
                                                            };
                                                            refillAmount: {
                                                                type: string;
                                                                nullable: boolean;
                                                                description: string;
                                                            };
                                                            lastRefillAt: {
                                                                type: string;
                                                                format: string;
                                                                nullable: boolean;
                                                                description: string;
                                                            };
                                                            enabled: {
                                                                type: string;
                                                                description: string;
                                                                default: boolean;
                                                            };
                                                            rateLimitEnabled: {
                                                                type: string;
                                                                description: string;
                                                            };
                                                            rateLimitTimeWindow: {
                                                                type: string;
                                                                nullable: boolean;
                                                                description: string;
                                                            };
                                                            rateLimitMax: {
                                                                type: string;
                                                                nullable: boolean;
                                                                description: string;
                                                            };
                                                            requestCount: {
                                                                type: string;
                                                                description: string;
                                                            };
                                                            remaining: {
                                                                type: string;
                                                                nullable: boolean;
                                                                description: string;
                                                            };
                                                            lastRequest: {
                                                                type: string;
                                                                format: string;
                                                                nullable: boolean;
                                                                description: string;
                                                            };
                                                            expiresAt: {
                                                                type: string;
                                                                format: string;
                                                                nullable: boolean;
                                                                description: string;
                                                            };
                                                            createdAt: {
                                                                type: string;
                                                                format: string;
                                                                description: string;
                                                            };
                                                            updatedAt: {
                                                                type: string;
                                                                format: string;
                                                                description: string;
                                                            };
                                                            metadata: {
                                                                type: string;
                                                                nullable: boolean;
                                                                additionalProperties: boolean;
                                                                description: string;
                                                            };
                                                            permissions: {
                                                                type: string;
                                                                nullable: boolean;
                                                                description: string;
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    } & {
                        use: any[];
                    };
                    path: "/api-key/list";
                };
            };
            schema: {
                apikey: {
                    fields: {
                        name: {
                            type: "string";
                            required: false;
                            input: false;
                        };
                        start: {
                            type: "string";
                            required: false;
                            input: false;
                        };
                        prefix: {
                            type: "string";
                            required: false;
                            input: false;
                        };
                        key: {
                            type: "string";
                            required: true;
                            input: false;
                        };
                        userId: {
                            type: "string";
                            references: {
                                model: string;
                                field: string;
                            };
                            required: true;
                            input: false;
                        };
                        refillInterval: {
                            type: "number";
                            required: false;
                            input: false;
                        };
                        refillAmount: {
                            type: "number";
                            required: false;
                            input: false;
                        };
                        lastRefillAt: {
                            type: "date";
                            required: false;
                            input: false;
                        };
                        enabled: {
                            type: "boolean";
                            required: false;
                            input: false;
                            defaultValue: true;
                        };
                        rateLimitEnabled: {
                            type: "boolean";
                            required: false;
                            input: false;
                            defaultValue: true;
                        };
                        rateLimitTimeWindow: {
                            type: "number";
                            required: false;
                            input: false;
                            defaultValue: number;
                        };
                        rateLimitMax: {
                            type: "number";
                            required: false;
                            input: false;
                            defaultValue: number;
                        };
                        requestCount: {
                            type: "number";
                            required: false;
                            input: false;
                            defaultValue: number;
                        };
                        remaining: {
                            type: "number";
                            required: false;
                            input: false;
                        };
                        lastRequest: {
                            type: "date";
                            required: false;
                            input: false;
                        };
                        expiresAt: {
                            type: "date";
                            required: false;
                            input: false;
                        };
                        createdAt: {
                            type: "date";
                            required: true;
                            input: false;
                        };
                        updatedAt: {
                            type: "date";
                            required: true;
                            input: false;
                        };
                        permissions: {
                            type: "string";
                            required: false;
                            input: false;
                        };
                        metadata: {
                            type: "string";
                            required: false;
                            input: true;
                            transform: {
                                input(value: string | number | boolean | string[] | Date | number[] | null | undefined): string;
                                output(value: string | number | boolean | string[] | Date | number[] | null | undefined): any;
                            };
                        };
                    };
                };
            };
        } | {
            id: "username";
            endpoints: {
                signInUsername: {
                    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                        body: {
                            password: string;
                            username: string;
                            rememberMe?: boolean | undefined;
                        };
                    } & {
                        method?: "POST" | undefined;
                    } & {
                        query?: Record<string, any> | undefined;
                    } & {
                        params?: Record<string, any>;
                    } & {
                        request?: Request;
                    } & {
                        headers?: HeadersInit;
                    } & {
                        asResponse?: boolean;
                        returnHeaders?: boolean;
                        use?: import("better-auth").Middleware[];
                        path?: string;
                    } & {
                        asResponse?: AsResponse | undefined;
                        returnHeaders?: ReturnHeaders | undefined;
                    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                        headers: Headers;
                        response: {
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
                        } | null;
                    } : {
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
                    } | null>;
                    options: {
                        method: "POST";
                        body: import("better-auth").ZodObject<{
                            username: import("better-auth").ZodString;
                            password: import("better-auth").ZodString;
                            rememberMe: import("better-auth").ZodOptional<import("better-auth").ZodBoolean>;
                        }, "strip", import("better-auth").ZodTypeAny, {
                            password: string;
                            username: string;
                            rememberMe?: boolean | undefined;
                        }, {
                            password: string;
                            username: string;
                            rememberMe?: boolean | undefined;
                        }>;
                        metadata: {
                            openapi: {
                                summary: string;
                                description: string;
                                responses: {
                                    200: {
                                        description: string;
                                        content: {
                                            "application/json": {
                                                schema: {
                                                    type: "object";
                                                    properties: {
                                                        token: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        user: {
                                                            $ref: string;
                                                        };
                                                    };
                                                    required: string[];
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    } & {
                        use: any[];
                    };
                    path: "/sign-in/username";
                };
            };
            schema: {
                user: {
                    fields: {
                        username: {
                            type: "string";
                            required: false;
                            sortable: true;
                            unique: true;
                            returned: true;
                            transform: {
                                input(value: string | number | boolean | string[] | Date | number[] | null | undefined): string | undefined;
                            };
                        };
                        displayUsername: {
                            type: "string";
                            required: false;
                        };
                    };
                };
            };
            hooks: {
                before: {
                    matcher(context: import("better-auth").HookEndpointContext): boolean;
                    handler: (inputContext: import("better-auth").MiddlewareInputContext<import("better-auth").MiddlewareOptions>) => Promise<void>;
                }[];
            };
            $ERROR_CODES: {
                INVALID_USERNAME_OR_PASSWORD: string;
                EMAIL_NOT_VERIFIED: string;
                UNEXPECTED_ERROR: string;
                USERNAME_IS_ALREADY_TAKEN: string;
                USERNAME_TOO_SHORT: string;
                USERNAME_TOO_LONG: string;
                INVALID_USERNAME: string;
            };
        })[];
    };
    $context: Promise<import("better-auth").AuthContext>;
    $Infer: {
        Session: {
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
            user: {
                id: string;
                name: string;
                email: string;
                emailVerified: boolean;
                createdAt: Date;
                updatedAt: Date;
                image?: string | null | undefined | undefined;
                bio?: string | null | undefined;
                birthday: Date;
                banned: boolean | null | undefined;
                role?: string | null | undefined;
                banReason?: string | null | undefined;
                banExpires?: Date | null | undefined;
                username?: string | null | undefined;
                displayUsername?: string | null | undefined;
            };
        };
    };
    $ERROR_CODES: {
        readonly FAILED_TO_CREATE_USER: "Failed to create user";
        readonly USER_ALREADY_EXISTS: "User already exists";
        readonly YOU_CANNOT_BAN_YOURSELF: "You cannot ban yourself";
        readonly YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE: "You are not allowed to change users role";
        readonly YOU_ARE_NOT_ALLOWED_TO_CREATE_USERS: "You are not allowed to create users";
        readonly YOU_ARE_NOT_ALLOWED_TO_LIST_USERS: "You are not allowed to list users";
        readonly YOU_ARE_NOT_ALLOWED_TO_LIST_USERS_SESSIONS: "You are not allowed to list users sessions";
        readonly YOU_ARE_NOT_ALLOWED_TO_BAN_USERS: "You are not allowed to ban users";
        readonly YOU_ARE_NOT_ALLOWED_TO_IMPERSONATE_USERS: "You are not allowed to impersonate users";
        readonly YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS: "You are not allowed to revoke users sessions";
        readonly YOU_ARE_NOT_ALLOWED_TO_DELETE_USERS: "You are not allowed to delete users";
        readonly YOU_ARE_NOT_ALLOWED_TO_SET_USERS_PASSWORD: "You are not allowed to set users password";
        readonly BANNED_USER: "You have been banned from this application";
    } & {
        INVALID_METADATA_TYPE: string;
        REFILL_AMOUNT_AND_INTERVAL_REQUIRED: string;
        REFILL_INTERVAL_AND_AMOUNT_REQUIRED: string;
        USER_BANNED: string;
        UNAUTHORIZED_SESSION: string;
        KEY_NOT_FOUND: string;
        KEY_DISABLED: string;
        KEY_EXPIRED: string;
        USAGE_EXCEEDED: string;
        KEY_NOT_RECOVERABLE: string;
        EXPIRES_IN_IS_TOO_SMALL: string;
        EXPIRES_IN_IS_TOO_LARGE: string;
        INVALID_REMAINING: string;
        INVALID_PREFIX_LENGTH: string;
        INVALID_NAME_LENGTH: string;
        METADATA_DISABLED: string;
        RATE_LIMIT_EXCEEDED: string;
        NO_VALUES_TO_UPDATE: string;
        KEY_DISABLED_EXPIRATION: string;
        INVALID_API_KEY: string;
        INVALID_USER_ID_FROM_API_KEY: string;
        INVALID_API_KEY_GETTER_RETURN_TYPE: string;
        SERVER_ONLY_PROPERTY: string;
    } & {
        INVALID_USERNAME_OR_PASSWORD: string;
        EMAIL_NOT_VERIFIED: string;
        UNEXPECTED_ERROR: string;
        USERNAME_IS_ALREADY_TAKEN: string;
        USERNAME_TOO_SHORT: string;
        USERNAME_TOO_LONG: string;
        INVALID_USERNAME: string;
    } & {
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
//# sourceMappingURL=server.d.ts.map