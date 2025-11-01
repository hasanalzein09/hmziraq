import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable output standalone for production (reduces build size)
  output: 'standalone',
};

export default nextConfig;
