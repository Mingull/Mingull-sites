import { createAuthClient } from "better-auth/client";
import { adminClient, apiKeyClient, inferAdditionalFields, usernameClient } from "better-auth/client/plugins";
import { accountDetailsClient } from "@mingull/lib/plugins/client/account-details";
import { birthdayClient } from "@mingull/lib/plugins/client/birthday";
export const authClient = createAuthClient({
    baseURL: "http://localhost:3001/v1",
    plugins: [
        adminClient(),
        apiKeyClient(),
        accountDetailsClient(),
        birthdayClient(),
        usernameClient(),
        inferAdditionalFields(),
    ],
});
