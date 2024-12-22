import ResumInput from "@/components/input/ResumeInput";
import formatExperienceMonth from "@/utils/formatExperienceMonth";
import { MyApplicationData } from "@/types/alba";

const MyApplication = ({ info }: { info: MyApplicationData }) => {
  const formattedExperienceMonth = formatExperienceMonth(
    info?.experienceMonths
  );

  return (
    <div className="flex flex-col gap-4 pb-[8px]">
      <h2 className="text-2lg font-semibold text-black-400 pc:text-2xl">
        제출 내용
      </h2>
      <section>
        <div className="flex justify-between border-b border-b-line-100 py-[14px]">
          <h3 className="text-black-100">이름</h3>
          <span className="text-black-400">{info?.name}</span>
        </div>
        <div className="flex justify-between border-b border-b-line-100 py-[14px]">
          <h3 className="text-black-100">연락처</h3>
          <span className="text-black-400">{info?.phoneNumber}</span>
        </div>
        <div className="flex justify-between border-b border-b-line-100 py-[14px]">
          <h3 className="text-black-100">경력</h3>
          <span className="text-black-400">{formattedExperienceMonth}</span>
        </div>
      </section>
      <section className="mt-4 flex flex-col gap-[14px]">
        <h3 className="text-black-100">이력서</h3>
        <ResumInput title={info?.resumeName} />
      </section>
      <section className="mt-4 flex flex-col gap-[14px]">
        <h3 className="text-black-100">자기소개</h3>
        <span className="h-[244px] w-full resize-none overflow-scroll rounded-lg border border-gray-200 p-[14px]">
          {info?.introduction}
        </span>
      </section>
    </div>
  );
};

export default MyApplication;
