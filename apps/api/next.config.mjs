// import { createJiti } from "jiti";
// import { env } from "@mingull/env/next/server";

// const { import: import_ } = createJiti(import.meta.url);

// await import_("@mingull/env/next/server");
// await import_("@mingull/env/next/client");

/** @type {import("next").NextConfig}*/
const nextConfig = {
	env: {
		API_URL: process.env.API_URL,
		BASE_API: process.env.BASE_API,
		BETTER_AUTH_URL: process.env.BETTER_AUTH_URL,
	},
};

export default nextConfig;
