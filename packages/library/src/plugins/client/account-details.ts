import { BetterAuthClientPlugin } from "better-auth";
import { type accountDetails } from "../server/account-details.js";

type AccountDetailsPlugin = typeof accountDetails;

export const accountDetailsClient = () => {
	return {
		id: "account-details",
		$InferServerPlugin: {} as ReturnType<AccountDetailsPlugin>,
	} satisfies BetterAuthClientPlugin;
};
