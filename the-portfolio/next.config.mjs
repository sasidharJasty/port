/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "portfolio-image-store.s3.ap-south-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
        // ...
      },
    ],
  },
};

export default nextConfig;
