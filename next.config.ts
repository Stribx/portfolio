import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { basePath } from "@/utils/paths";

const nextConfig: NextConfig = {
  output: "standalone",
  basePath: basePath,
  trailingSlash: true
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
