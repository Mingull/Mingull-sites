import { createAccessControl } from "better-auth/plugins/access";

const statement = {
	server: ["create", "update", "delete", "view"],
} as const;

const ac = createAccessControl(statement);

export { ac };
