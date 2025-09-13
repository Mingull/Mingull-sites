import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
	allowedDevOrigins: ["localhost", "192.168.178.127"],
	transpilePackages: ["next-mdx-remote"],
};
const withNextIntl = createNextIntlPlugin({
	experimental: {
		createMessagesDeclaration: ["./messages/nl.json", "./messages/en.json"],
	},
});
export default withNextIntl(nextConfig);
