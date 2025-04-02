import { NextConfig } from "next";
import { basePath } from "@/utils/paths";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath,
  assetPrefix: "/containers/guillaumechambat-portfolio",
  trailingSlash: true,
  images: { unoptimized: true }
};

export default nextConfig;
