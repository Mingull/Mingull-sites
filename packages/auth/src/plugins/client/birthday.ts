import { BetterAuthClientPlugin } from "better-auth";
import type { birthday } from "../server/birthday.js";

type BirthdayPlugin = typeof birthday;

export const birthdayClient = () => {
	return {
		id: "birthdayPlugin",
		$InferServerPlugin: {} as ReturnType<BirthdayPlugin>,
	} satisfies BetterAuthClientPlugin;
};
