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
    ];
  },
  output: 'standalone',
  trailingSlash: true,
};

module.exports = nextConfig;
