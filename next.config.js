/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: false,
  images: {
    domains: ['bayut-production.s3.eu-central-1.amazonaws.com'],
    loader: "imgix", // veya "default" olarak ayarlayın
    path: "/", // veya resimlerinizin bulunduğu klasörü belirtin
  }
}

module.exports = nextConfig
