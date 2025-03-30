import { NextConfig } from "next";
import { basePath } from "@/utils/paths";

const nextConfig: NextConfig = {
  output: "standalone",
  basePath: basePath,
  assetPrefix: "/containers/guillaumechambat-portfolio",
  trailingSlash: true
};

export default nextConfig;
