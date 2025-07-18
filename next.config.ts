import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const repo = 'line-lp-programming-school';
const assetPrefix = isGitHubPages ? `/${repo}/` : '';
const basePath = isGitHubPages ? `/${repo}` : '';

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: assetPrefix,
  basePath: basePath,
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
