import { NextConfig } from "next";
import { basePath } from "@/utils/paths";

const nextConfig: NextConfig = {
  output: "standalone",
  basePath: basePath,
  trailingSlash: true
};

export default nextConfig;
