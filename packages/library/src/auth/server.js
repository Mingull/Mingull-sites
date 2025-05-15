import { db } from "@mingull/lib/db/index";
import * as authSchema from "@mingull/lib/db/schemas/auth";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { admin, apiKey, username } from "better-auth/plugins";
import { accountDetails } from "@mingull/lib/plugins/server/account-details";
import { birthday } from "@mingull/lib/plugins/server/birthday";
export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "mysql",
        usePlural: true,
        schema: {
            ...authSchema,
        },
    }),
    basePath: "/v1/auth",
    user: {
        additionalFields: {
            bio: {
                type: "string",
                nullable: true,
                required: false,
            },
        },
    },
    account: {
        accountLinking: {
            enabled: true,
            trustedProviders: ["discord", "email-password", "github"],
        },
    },
    advanced: {
        crossSubDomainCookies: {
            enabled: true,
            domain: process.env.NODE_ENV === "production" ? "mingull.nl" : undefined, // Set to your production domain
        },
    },
    trustedOrigins: ["http://localhost:3000", "http://localhost:3001"],
    onAPIError: {
        onError(error) {
            console.error(error);
        },
    },
    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
        discord: {
            clientId: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,
        },
        github: {
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        },
    },
    plugins: [
        admin(),
        apiKey(),
        accountDetails(),
        birthday(),
        username({
            usernameValidator: (username) => {
                if (username === "admin") {
                    return false;
                }
                else {
                    return true;
                }
            },
        }),
    ],
});
