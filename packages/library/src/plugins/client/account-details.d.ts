import { type accountDetails } from "../server/account-details.js";
type AccountDetailsPlugin = typeof accountDetails;
export declare const accountDetailsClient: () => {
    id: "account-details";
    $InferServerPlugin: ReturnType<AccountDetailsPlugin>;
};
export {};
//# sourceMappingURL=account-details.d.ts.map