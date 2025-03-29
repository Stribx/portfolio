import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  output: "standalone",
  basePath: '/containers/guillaumechambat-portfolio',
  assetPrefix: '/containers/guillaumechambat-portfolio/',
  trailingSlash: true
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
