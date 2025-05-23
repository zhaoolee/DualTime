/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'docs',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/toma-clock' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/toma-clock' : '',
};

export default nextConfig;
