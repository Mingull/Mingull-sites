import { createJiti } from "jiti";
import createNextIntlPlugin from "next-intl/plugin";

const { import: import_ } = createJiti(import.meta.url);
// Import the env file to trigger validation
await import_("@mingull/env/next/server");
await import_("@mingull/env/next/client");

/** @type {import("next").NextConfig}*/
const nextConfig = {
	transpilePackages: ["next-mdx-remote"],
	images: {
		remotePatterns: [
			{
				protocol: process.env.NODE_ENV === "production" ? "https" : "http",
				hostname: process.env.NODE_ENV === "production" ? "api.mingull.nl" : "localhost",
				port: process.env.NODE_ENV === "production" ? undefined : "3001",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "assets.aceternity.com",
				port: "",
				pathname: "/**",
			},
		],
	},
	env: {
		API_URL: process.env.API_URL,
		BASE_API: process.env.BASE_API,
		BETTER_AUTH_URL: process.env.BETTER_AUTH_URL,
	},
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
