import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint:{ 
        ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors: true,
    },
  images: {
    domains: ['images.unsplash.com'],
    // Or if using Next.js 12.3+, you can use remotePatterns:
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8000',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

