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
        source: "/photos",
        destination: "https://api.picpin.life/photos",
      },
    ];
  },
  output: "standalone",
  trailingSlash: true,
};

module.exports = nextConfig;
