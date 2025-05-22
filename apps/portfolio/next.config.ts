import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
	transpilePackages: ["next-mdx-remote"],
};
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
