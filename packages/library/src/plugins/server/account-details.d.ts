export type PluginOptions = {};
export declare const accountDetails: (opts?: PluginOptions) => {
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
};
//# sourceMappingURL=account-details.d.ts.map