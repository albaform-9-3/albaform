"use client";

import Image from "next/image";
import ModalContainer from "../modalContainer/ModalContainer";
import SolidButton from "@/components/button/SolidButton";
import useViewPort from "@/hooks/useViewport";
import { useRouter } from "next/navigation";
import { useModal } from "@/hooks/useModal";

const PatchAlbaformModal = () => {
  const router = useRouter();
  const { closeModal } = useModal();
  const viewPort = useViewPort();

  return (
    <ModalContainer>
      <div className="flex flex-col items-center pc:mx-10">
        <div className="modal-image-container">
          <Image
            src="/image/document-edit-orange.svg"
            fill
            alt="작성 중"
            className="object-cover"
          />
        </div>
        <h2 className="modal-title">작성 중인 알바폼이 있어요!</h2>
        <p className="modal-sub-title">이어서 작성하시겠어요?</p>
        <div className="mt-6 h-[56px] w-[327px] pc:h-[72px] pc:w-[360px]">
          <SolidButton
            size={viewPort === "pc" ? "large" : "small"}
            style="orange300"
            type="button"
            onClick={() => {
              closeModal();
              router.push("/addform");
            }}
          >
            이어쓰기
          </SolidButton>
        </div>
      </div>
    </ModalContainer>
  );
};

export default PatchAlbaformModal;
