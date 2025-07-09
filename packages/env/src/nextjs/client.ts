import { createEnv } from "@t3-oss/env-nextjs";
import { config } from "dotenv";
import { z } from "zod";

const envConfig =
	process.env.NODE_ENV !== "production" ? config({ path: "../../.env" }) : config({ path: "../../../.env" });

console.log({ envConfig });

export const env = createEnv({
	client: {
		NEXT_PUBLIC_BETTER_AUTH_URL: z.string().url(),
	},
	shared: {
		NODE_ENV: z.enum(["development", "production"]),
	},
	experimental__runtimeEnv: {
		NODE_ENV: process.env.NODE_ENV,
		NEXT_PUBLIC_BETTER_AUTH_URL: process.env.BETTER_AUTH_URL,
	},
	isServer: false,
});
