import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	crossOrigin: "anonymous",
	headers: async () => [
		{
			source: "/:path*",
			headers: [
				{
					key: "Access-Control-Allow-Origin",
					value: "*",
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
};

export default nextConfig;
