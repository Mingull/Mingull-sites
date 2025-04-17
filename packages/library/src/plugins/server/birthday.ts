import type { BetterAuthPlugin } from "better-auth";
import { APIError } from "better-auth/api";
import { createAuthMiddleware } from "better-auth/plugins";

export const birthday = () =>
	({
		id: "birthdayPlugin",
		schema: {
			user: {
				fields: {
					birthday: {
						type: "date",
						required: true,
						unique: false,
					},
				},
			},
		},
		hooks: {
			before: [
				{
					matcher: (context) => context.path.startsWith("/sign-up/email"),
					handler: createAuthMiddleware(async (ctx) => {
						const { birthday } = ctx.body;
						if (!birthday) {
							throw new APIError("BAD_REQUEST", { message: "Birthday is required." });
						}

						const parsedBirthday = new Date(birthday);

						const today = new Date();
						const fiveYearsAgo = new Date(today.setFullYear(today.getFullYear() - 5));

						if (parsedBirthday >= fiveYearsAgo) {
							throw new APIError("BAD_REQUEST", { message: "User must be above 5 years old." });
						}

						ctx.body.birthday = parsedBirthday;

						return { context: ctx };
					}),
				},
			],
		},
	}) satisfies BetterAuthPlugin;
