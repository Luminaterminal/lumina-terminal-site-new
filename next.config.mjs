/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { appDir: true },
  // Nëse s'po përdor CDN për Next/Image
  images: { unoptimized: true }
};

export default nextConfig;
