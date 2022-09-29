/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.thecocktaildb.com", "www.barstuff.de", "files.promostore.de", "www.stoelzle-lausitz-shop.de", "www.luchs-direkt.de", "www.cristalica.de", "cdn1.home24.net", "www.nadilein.de", "xuxu.de"]
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;