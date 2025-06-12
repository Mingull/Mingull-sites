import { createEnv } from "@mingull/env";
import { z } from "zod";

export const env = createEnv({
	server: {
		BASE_API: z.string().url(),
		API_URL: z.string(),
		REDIS_URL: z.string().min(2).max(100),
	},
	path: "../../.env",
	isServer: true,
});

console.log({ env });
