import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'focfarm.id',
      },
    ],
  },
};

export default nextConfig;
