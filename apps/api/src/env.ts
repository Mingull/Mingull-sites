import { createEnv } from "@t3-oss/env-nextjs";
import { config } from "dotenv";
import { z } from "zod";

config({ path: "../../.env" });

export const env = createEnv({
	server: {
		BASE_API: z.string().url(),
		API_URL: z.string(),
		REDIS_URL: z.string().min(2).max(100),
	},
	experimental__runtimeEnv: process.env,
});
