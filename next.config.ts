import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https", // 프로토콜 (http 또는 https)
        hostname: "cdn.pixabay.com", // 허용할 호스트
        port: "", // 포트 (생략 가능)
        pathname: "/**", // 허용할 경로 (와일드카드 사용 가능)
      },
    ],
  },
};

export default nextConfig;
