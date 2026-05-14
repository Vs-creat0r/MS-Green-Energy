/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Add allowed image qualities for Next.js 16+ compatibility
    qualities: [25, 30, 40, 50, 60, 70, 75, 80, 85, 90, 95, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

module.exports = nextConfig;
