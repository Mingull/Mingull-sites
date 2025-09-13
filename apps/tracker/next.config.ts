import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
// ES Module compatible __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from monorepo root
dotenv.config({
	path: path.resolve(__dirname, "../../.env"),
});

const nextConfig: NextConfig = {
	transpilePackages: ["next-mdx-remote"],
	images: {
		remotePatterns: [
			{
				protocol: process.env.NODE_ENV === "production" ? "https" : "http",
				hostname: process.env.NODE_ENV === "production" ? "api.mingull.nl" : "localhost",
				port: process.env.NODE_ENV === "production" ? undefined : "3001",
				pathname: "/**",
			},
		],
	},
	env: {
		BETTER_AUTH_URL: process.env.BETTER_AUTH_URL,
		TRACKER_BASE_URL: process.env.TRACKER_BASE_URL,
	},
};

const withNextIntl = createNextIntlPlugin({
	experimental: {
		createMessagesDeclaration: ["./messages/nl.json", "./messages/en.json"],
	},
});

export default withNextIntl(nextConfig);
