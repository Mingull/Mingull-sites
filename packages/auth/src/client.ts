import { inferAdditionalFields, organizationClient, usernameClient } from "better-auth/client/plugins";
import { createAuthClient as createAuthClientCore } from "better-auth/react";
import { birthdayClient } from "./plugins/client/birthday.ts";
import { ac, member, admin, owner } from "./permissions.ts";

export const createAuthClient = ({ baseURL }: { baseURL: string }) =>
	createAuthClientCore({
		fetchOptions: {
			credentials: "include",
		},
		baseURL,
		plugins: [
			organizationClient({
				ac,
				roles: {
					member,
					admin,
					owner,
				},
			}),
			usernameClient(),
			birthdayClient(),
			inferAdditionalFields({
				user: {
					bio: {
						type: "string",
						nullable: true,
						required: false,
					},
				},
			}),
		],
	});
