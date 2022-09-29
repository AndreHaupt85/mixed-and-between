/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.thecocktaildb.com", "www.barstuff.de", "files.promostore.de"]
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;