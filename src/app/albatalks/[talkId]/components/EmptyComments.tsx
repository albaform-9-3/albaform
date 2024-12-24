import writeIcon from "@/../public/icon/modal.svg";
import Image from "next/image";

const EmptyComment = () => {
  return (
    <div className="mx-auto mt-32 flex flex-col items-center justify-center gap-y-6 pb-52 pt-14 pc:pb-[244px] pc:pt-11 tablet:pb-[198px] tablet:pt-10">
      <Image
        src={writeIcon}
        width={80}
        height={80}
        className="pc:size-[120px]"
        alt="빈 댓글 목록"
      />
      <span className="text-center text-md text-gray-400 pc:text-2lg">
        등록된 댓글이 없어요.
        <br />
        댓글을 등록하고 의견을 공유해보세요.
      </span>
    </div>
  );
};

export default EmptyComment;
