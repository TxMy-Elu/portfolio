import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Send the production *.vercel.app aliases to the custom domain so search engines index a single URL.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "portfolio(-git-main)?-txmy-elios-projects\\.vercel\\.app" }],
        destination: "https://www.tom-doguet.app/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
