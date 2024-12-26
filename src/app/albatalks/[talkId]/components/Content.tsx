"use server";

import Image from "next/image";

const Content = ({ content, image }: { content: string; image: string }) => {
  return (
    <div>
      <p className="mt-16 text-md text-gray-500 pc:mt-[88px] pc:text-xl tablet:text-lg">
        {content}
      </p>
      {image && (
        <div className="relative mt-5 h-[184px] w-[327px] pc:mt-10 pc:h-[832px] pc:w-[1480px] tablet:h-[337px] tablet:w-[600px]">
          <Image
            src={image}
            fill
            alt="게시글 이미지"
            className="object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default Content;
