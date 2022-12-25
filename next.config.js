/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: [
      'fakestoreapi.com',
      'upload.wikimedia.org',
      '3632261023-files.gitbook.io',
    ],
  },
};

module.exports = nextConfig;
