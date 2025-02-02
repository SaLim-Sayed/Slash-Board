import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true, // Example of another configuration
  images: {
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;
