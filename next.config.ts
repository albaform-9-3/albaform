import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["www.w3.org", "search.pstatic.net", "velog.velcdn.com"], // 외부 이미지 도메인 추가
  },
};

export default nextConfig;
