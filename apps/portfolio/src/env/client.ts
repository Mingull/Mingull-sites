import { createEnv } from "@t3-oss/env-nextjs";
import { config } from "dotenv";
import { z } from "zod";

config({ path: "../../.env" });
export const env = createEnv({
	client: {
		NEXT_PUBLIC_API_URL: z.string().url(),
	},
	experimental__runtimeEnv: {
		NEXT_PUBLIC_API_URL: process.env.API_URL,
	},
	isServer: false,
});
