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
						required: false,
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
						const raw = ctx.body.birthday;
						const birthday = new Date(raw);

						if (!raw || isNaN(birthday.getTime())) {
							throw new APIError("BAD_REQUEST", { message: "Invalid or missing birthday." });
						}

						const now = new Date();
						const minDate = new Date();
						minDate.setFullYear(now.getFullYear() - 5);

						if (birthday >= minDate) {
							throw new APIError("BAD_REQUEST", {
								message: "User must be at least 5 years old.",
							});
						}

						ctx.body.birthday = birthday;

						return { context: ctx };
					}),
				},
			],
		},
	}) satisfies BetterAuthPlugin;
