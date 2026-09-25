import type { NextConfig } from "next";

// No GitHub Pages o site é servido em /<repositório>; o workflow define o valor.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  trailingSlash: true,
  basePath,
};

export default nextConfig;
