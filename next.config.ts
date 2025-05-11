import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['fakestoreapi.com'],
  },
    "rules": {
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "react/no-unescaped-entities": "off"
    }
};

export default nextConfig;
