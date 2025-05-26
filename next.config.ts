import { NextConfig } from "next";
import { basePath } from "@/utils/paths";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath,
  assetPrefix: "/portfolio",
  trailingSlash: true,
  images: { unoptimized: true }
};

export default nextConfig;
