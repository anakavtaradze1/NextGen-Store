/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/nextgen-store",
  assetPrefix: "/nextgen-store",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  trailingSlash: false,
};

export default nextConfig;
