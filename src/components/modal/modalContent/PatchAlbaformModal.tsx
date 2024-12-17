"use client";

import Image from "next/image";
import ModalContainer from "../modalContainer/ModalContainer";
import SolidButton from "@/components/button/SolidButton";
import { useModal } from "@/hooks/useModal";
import { useSetAtom } from "jotai";
import { continueAtom } from "@/atoms/continueAtom";

const PatchAlbaformModal = () => {
  const { closeModal } = useModal();
  const setContinue = useSetAtom(continueAtom);

  const handleNewWriteClick = () => {
    setContinue(false);
    closeModal();
  };

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
        <div className="mt-6 flex w-[327px] flex-col gap-2 pc:w-[360px]">
          <SolidButton
            style="orange300"
            type="button"
            onClick={() => closeModal()}
          >
            이어쓰기
          </SolidButton>
          <SolidButton
            style="outOrange300"
            type="button"
            onClick={handleNewWriteClick}
          >
            새로쓰기
          </SolidButton>
        </div>
      </div>
    </ModalContainer>
  );
};

export default PatchAlbaformModal;
