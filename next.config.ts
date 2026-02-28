import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Enable Next.js image optimization for better Core Web Vitals (LCP).
    // Uses WebP/AVIF auto-conversion, responsive sizing, and lazy loading.
    unoptimized: false,
  },
};

export default nextConfig;