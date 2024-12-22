import ScrapButton from "@/components/button/ScrapButton";
import ShareButton from "@/components/button/ShareButton";

const ScrapAndShareButton = ({
  isScrapped,
  formId,
}: {
  formId: string;
  isScrapped: boolean;
}) => {
  return (
    <div className="fixed bottom-20 right-10 z-10 flex h-[124px] w-[54px] flex-col justify-between pc:h-[152px] pc:w-[64px]">
      <ScrapButton isScrapped={isScrapped} formId={formId} />
      <ShareButton />
    </div>
  );
};

export default ScrapAndShareButton;
