import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      }
    ],
  },
  // Tells Next.js NOT to compile for legacy browsers, saving JS bundle size
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  experimental: {
    // This removes the legacy browser polyfills (Array.flat, etc.) flagged by Lighthouse
    legacyBrowsers: false,
  }
};

export default nextConfig;