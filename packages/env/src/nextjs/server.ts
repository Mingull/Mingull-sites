import { coolify } from "@t3-oss/env-core/presets-zod";
import { createEnv } from "@t3-oss/env-nextjs";
import { config } from "dotenv";
import { z } from "zod";

// const envConfig = process.env.NODE_ENV !== "production" ? config({ path: "../../.env" }) : config();

console.log({ env: process });

export const env = createEnv({
	shared: {
		NODE_ENV: z.enum(["development", "production"]),
		TRUSTED_ORIGINS: z.preprocess(
			(val) => (typeof val === "string" ? val.split(",").map((s) => s.trim()) : []),
			z.array(z.string().url()),
		),
	},
	server: {
		API_URL: z.string().url(),
		BASE_API: z.string().url(),
		BETTER_AUTH_URL: z.string().url(),
	},
	experimental__runtimeEnv: {
		NODE_ENV: process.env.NODE_ENV,
		TRUSTED_ORIGINS: process.env.TRUSTED_ORIGINS,
	},
	extends: [coolify()],
});
