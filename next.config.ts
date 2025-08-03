import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'canva.com',
      },
      {
        protocol: 'https',
        hostname: 'www.canva.com',
      },
      {
        protocol: 'https',
        hostname: 'www.canva.com/design',
      },
    ],
  },
};

export default nextConfig;
