import { createEnv } from "@/index.ts";
import { z } from "zod";

const env = createEnv({
	server: {
		HOST: z.string().min(2).max(100),
		PORT: z.string().min(2).max(100).optional(),
	},
	prefix: "NEXT_PUBLIC",
	client: {
		NEXT_PUBLIC_BASE_URL: z.string().url().optional(),
		NEXT_PUBLIC_API_URL: z.string().url().optional(),
	},
	shared: {
		NODE_ENV: z.enum(["development", "production"]).default("development"),
	},
	runtimeEnv: process.env,
});
