import { createJiti } from "jiti";
import { env } from "@mingull/env/next/server";

const { import: import_ } = createJiti(import.meta.url);

await import_("@mingull/env/next/server");
await import_("@mingull/env/next/client");

/** @type {import("next").NextConfig}*/
const nextConfig = {
	headers: async () => [
		{
			source: "/:path*",
			headers: [
				{
					key: "Access-Control-Allow-Origin",
					value: env.NODE_ENV === "development" ? "http://localhost:3002" : "https://mingull.nl",
				},
				{
					key: "Access-Control-Allow-Credentials",
					value: "true",
				},
				{
					key: "Access-Control-Allow-Headers",
					value: "Content-Type, Authorization, X-CSRF-Token, X-Requested-With",
				},
				{
					key: "Access-Control-Allow-Methods",
					value: "GET,HEAD,PUT,PATCH,POST,DELETE",
				},
				{
					key: "Access-Control-Allow-Headers",
					value: "X-CSRF-Token, X-Requested-With",
				},
			],
		},
	],
	env: {
		API_URL: env.API_URL,
		BASE_API: env.BASE_API,
		BETTER_AUTH_URL: env.BETTER_AUTH_URL,
	},
};

export default nextConfig;
