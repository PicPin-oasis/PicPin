/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/oauth2/code/kakao",
        destination: "https://api.picpin.life/oauth2/code/kakao",
      },
      {
        source: "/accounts/my-profile",
        destination: "https://api.picpin.life/accounts/my-profile",
      },
      {
        source: "/albums",
        destination: "https://api.picpin.life/albums",
      },
      {
        source: "/photo-sections",
        destination: "https://api.picpin.life/photo-sections",
      },
      {
        source: "/photos/upload",
        destination: "https://api.picpin.life/photos/upload",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image-store.picpin.life",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
  output: "standalone",
  trailingSlash: true,
};

module.exports = nextConfig;
