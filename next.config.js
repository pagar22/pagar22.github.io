/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/pagar22.github.io",
  assetPrefix: "/pagar22.github.io",
}

module.exports = nextConfig
