"use client";

import useViewPort from "@/hooks/useViewport";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  const viewport = useViewPort();

  return (
    <h1 className="relative h-[30px] w-[45px] pc:h-[40px] pc:w-[284px] tablet:h-[30px] tablet:w-[177px]">
      <Link href="/">
        <Image
          src={
            viewport === "mobile"
              ? "/logo/main-logo.svg"
              : "/logo/albaform-with-logo.svg"
          }
          fill
          alt="logo"
          loading="eager"
        />
      </Link>
    </h1>
  );
};

export default Logo;
