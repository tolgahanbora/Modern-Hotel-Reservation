/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: false,
  images: {
    domains: ['bayut-production.s3.eu-central-1.amazonaws.com'],
    loader: "default", // veya "default" olarak ayarlayın

  }
}

module.exports = nextConfig
