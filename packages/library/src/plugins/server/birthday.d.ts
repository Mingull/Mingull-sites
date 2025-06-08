export declare const birthday: () => {
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
};
//# sourceMappingURL=birthday.d.ts.map