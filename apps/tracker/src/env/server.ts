import { createEnv } from "@t3-oss/env-nextjs";
import { config } from "dotenv";
import { z } from "zod";

config({ path: "../../.env" });
export const env = createEnv({
	server: {
		BASE_API: z.url(),
		API_URL: z.url(),
		TRACKER_BASE_URL: z.url(),
	},
	experimental__runtimeEnv: process.env,
	isServer: true,
});
