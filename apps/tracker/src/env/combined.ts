import { createEnv } from "@t3-oss/env-nextjs";
import { config } from "dotenv";
import { z } from "zod";

config();
export const env = createEnv({
	server: {
		BASE_API: z.url(),
		API_URL: z.url(),
		TRACKER_BASE_URL: z.url(),
	},
	client: {
		NEXT_PUBLIC_API_URL: z.url(),
		NEXT_PUBLIC_BETTER_AUTH_URL: z.url(),
	},
	experimental__runtimeEnv: {
		NEXT_PUBLIC_API_URL: process.env.API_URL,
		NEXT_PUBLIC_BETTER_AUTH_URL: process.env.BETTER_AUTH_URL,
	},
});
