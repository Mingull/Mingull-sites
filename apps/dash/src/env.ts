import { createEnv } from "@t3-oss/env-nextjs";
import { coolify } from "@t3-oss/env-core/presets-zod";
import { config } from "dotenv";
import { z } from "zod";

export const env = createEnv({
	shared: {
		BASE_API: z.string().url(),
		API_URL: z.string().url(),
		BETTER_AUTH_URL: z.string().url(),
	},
	experimental__runtimeEnv: {
		API_URL: process.env.API_URL,
		BASE_API: process.env.BASE_API,
		BETTER_AUTH_URL: process.env.BETTER_AUTH_URL,
	},
	isServer: false,
	extends: [coolify()],
});
