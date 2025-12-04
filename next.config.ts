import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization configuration
  images: {
    // Use remotePatterns instead of domains (deprecated)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "example.com",
        port: "",
        pathname: "/**",
      },
    ],
    // Enable modern image formats
    formats: ["image/avif", "image/webp"],
    // Configure image sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Configure image sizes for image components
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Performance optimization
  compress: true,

  // Enable static generation for all pages by default
  output: "export",
  // Configure trailing slash behavior
  trailingSlash: false,
  // Configure base path if needed
  basePath: "/office-website-template-demo",
  // Configure asset prefix if needed
  assetPrefix: "/office-website-template-demo",

  // Configure TypeScript options
  typescript: {
    // Ignore TypeScript errors during build (not recommended for production)
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
