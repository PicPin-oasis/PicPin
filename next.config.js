/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        // OAuth 인증 코드를 카카오 서버로 전달하기 위한 프록시 설정
        source: "/oauth2/code/kakao",
        destination: "https://api.picpin.life/oauth2/code/kakao",
      },
    ];
  },
  trailingSlash: true,
};

module.exports = nextConfig;
