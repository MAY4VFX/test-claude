import type { NextConfig } from "next";

const isPages = process.env.GITHUB_PAGES === "true";
const repo = "test-claude";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isPages ? `/${repo}` : "",
  assetPrefix: isPages ? `/${repo}/` : "",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
