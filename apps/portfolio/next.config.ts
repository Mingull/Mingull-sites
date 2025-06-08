import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

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
			{
				protocol: "https",
				hostname: "assets.aceternity.com",
				port: "",
				pathname: "/**",
			},
		],
	},
};
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
