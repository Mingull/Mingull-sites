import { BetterAuthPlugin, nullable } from "better-auth";
import { createAuthMiddleware } from "better-auth/plugins";

export type PluginOptions = {};

export const accountDetails = (opts?: PluginOptions) =>
	({
		id: "account-details",
		schema: {
			account: {
				fields: {
					metadata: {
						type: "string",
						required: false,
						transform: {
							input: (value) => {
								// if (typeof value === "string") {
								// 	return JSON.parse(value);
								// }
								console.log("Input", value);
								return value;
							},
							output: (value) => {
								// if (typeof value === "object") {
								// 	return JSON.stringify(value);
								// }
								console.log("Output", value);
								return value;
							},
						},
					},
				},
			},
		},
		hooks: {
			before: [
				{
					matcher: (ctx) => ctx.path.startsWith("/link-social"),
					handler: createAuthMiddleware(async (ctx) => {
						console.log("Linking social account", ctx.body);

						return { context: ctx };
					}),
				},
				{
					matcher: (ctx) => ctx.path.startsWith("/callback"),
					handler: createAuthMiddleware(async (ctx) => {
						console.log("Callback", ctx.body);
						return { context: ctx };
					}),
				},
			],
			after: [
				{
					matcher: (ctx) => ctx.path.startsWith("/link-social"),
					handler: createAuthMiddleware(async (ctx) => {
						console.log("Linking social account", ctx.body);

						return { context: ctx };
					}),
				},
				{
					matcher: (ctx) => ctx.path.startsWith("/callback"),
					handler: createAuthMiddleware(async (ctx) => {
						console.log("Callback", ctx.body);
						return { context: ctx };
					}),
				},
			],
		},
	}) satisfies BetterAuthPlugin;
