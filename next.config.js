/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "aceternity.com",
      },
      {
        protocol: "https",
        hostname: "miro.medium.com",
      },
    ],
  },
};

module.exports = nextConfig;
