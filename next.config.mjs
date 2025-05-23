/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'docs',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/DualTime' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/DualTime' : '',
};

export default nextConfig;