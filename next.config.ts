import { NextConfig } from "next";
import { basePath } from "@/utils/paths";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath,
  assetPrefix: "/containers/guillaumechambat-portfolio",
  trailingSlash: true
};

export default nextConfig;
