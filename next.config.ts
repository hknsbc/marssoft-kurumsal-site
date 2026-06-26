import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Canonical domain yönlendirmesi (www → non-www)
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.marssoft.com.tr" }],
        destination: "https://marssoft.com.tr/:path*",
        permanent: true,
      },
    ];
  },
  // Güvenlik ve performans header'ları
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;