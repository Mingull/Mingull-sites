import { createEnv } from "@t3-oss/env-nextjs";
import { config } from "dotenv";
import { z } from "zod";

config({ path: "../../.env" });
export const env = createEnv({
	server: {
		BASE_API: z.string().url(),
		API_URL: z.string().url(),
	},
	experimental__runtimeEnv: {
		API_URL: process.env.API_URL,
		BASE_API: process.env.BASE_API,
	},
	isServer: true,
});
