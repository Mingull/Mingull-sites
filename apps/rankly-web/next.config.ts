import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {};

const withNextIntl = createNextIntlPlugin({
	experimental: {
		createMessagesDeclaration: ["./messages/nl.json", "./messages/en.json"],
	},
});

export default withNextIntl(nextConfig);
