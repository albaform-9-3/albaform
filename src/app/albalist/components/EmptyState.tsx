import Image from "next/image";
import emptyIcon from "@/../public/icon/empty-md.svg";
import emptyIconLarge from "@/../public/icon/empty-lg.svg";

const EmptyState = ({ role }: { role: string }) => {
  return (
    <div className="mx-auto mt-32 flex flex-col items-center gap-y-6 pc:mt-[178px] pc:gap-y-8 tablet:mt-[205px]">
      <Image
        src={emptyIcon}
        width={80}
        height={80}
        alt="null icon"
        className="pc:hidden"
      />
      <Image
        src={emptyIconLarge}
        width={120}
        height={120}
        alt="null icon"
        className="hidden pc:block"
      />
      {role === "OWNER" ? (
        <span className="text-center text-md text-gray-400 pc:text-2lg">
          등록된 알바폼이 없어요.
          <br />
          1분만에 등록하고 알바를 구해보세요!
        </span>
      ) : (
        <span className="text-center text-md text-gray-400 pc:text-2lg">
          등록된 알바폼이 없어요.
          <br />
          좋은 알바를 소개해드리기 위해 노력 중이랍니다!
        </span>
      )}
    </div>
  );
};

export default EmptyState;
