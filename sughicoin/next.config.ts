import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",          // << static export
  images: { unoptimized: true }, // we’re using <img>, but keep this safe
};

export default nextConfig;
