import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Send the old Vercel address to the custom domain so search engines index a single URL.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "txmyelu-portfolio.vercel.app" }],
        destination: "https://www.tom-doguet.app/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
