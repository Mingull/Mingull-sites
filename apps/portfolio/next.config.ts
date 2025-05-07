import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
	allowedDevOrigins: ["localhost", "192.168.178.126"],
};
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
