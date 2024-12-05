import { cls } from "@/utils/dynamicTailwinds";

interface WritingTagProps {
  currentStep: string;
  value: string;
}

const WritingTag = ({ currentStep, value }: WritingTagProps) => {
  return (
    <span
      className={cls(
        "rounded-full border-[1px] border-gray-100 bg-background-100 px-3 py-[6px] text-lg font-bold text-gray-300 transition-colors group-hover:border-white group-hover:bg-orange-300 group-hover:text-white",
        currentStep === value ? "border-white bg-orange-300 text-white" : ""
      )}
    >
      작성중
    </span>
  );
};

export default WritingTag;
