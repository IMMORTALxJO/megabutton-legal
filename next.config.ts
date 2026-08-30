import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const repositoryBasePath = '/iphone-magic-button';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isGitHubPages ? repositoryBasePath : '',
  assetPrefix: isGitHubPages ? `${repositoryBasePath}/` : '',
  images: { unoptimized: true },
};

export default nextConfig;
