import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-main.28tech.com.vn',
        port: '',
        pathname: '**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
