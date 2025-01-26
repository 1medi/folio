import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },
};

export default withNextVideo(nextConfig);