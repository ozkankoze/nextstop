import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next re-encodes at 75 by default, which is visibly soft on the cards.
    qualities: [75, 92],
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
