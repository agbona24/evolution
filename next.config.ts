import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Built-By", value: "Harzotech Nig Ltd" },
          { key: "X-Developer", value: "Azeez Agbona O." },
          { key: "X-Developer-Site", value: "https://harzotech.com.ng" },
          {
            key: "X-Developer-Portfolio",
            value: "https://azeezagbona.com",
          },
          { key: "X-Developer-Contact", value: "+2347069716822" },
        ],
      },
    ];
  },
};

export default nextConfig;
