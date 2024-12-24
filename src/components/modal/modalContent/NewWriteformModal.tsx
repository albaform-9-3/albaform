"use client";

import Image from "next/image";
import ModalContainer from "../modalContainer/ModalContainer";
import SolidButton from "@/components/button/SolidButton";
import { useModal } from "@/hooks/useModal";
import { usePathname, useRouter } from "next/navigation";
import { useToast } from "@/hooks/useToast";
import { useSetAtom } from "jotai";
import { newWriteAtom } from "@/atoms/newWrite";

const NewWriteformModal = () => {
  const { closeModal } = useModal();
  const { addToast } = useToast();
  const pathname = usePathname();
  const router = useRouter();
  const setNewWrite = useSetAtom(newWriteAtom);

  const handleContinueWriteClick = () => {
    addToast("작성 중인 폼을 불러왔습니다.", "info");
    closeModal();
  };

  const handleNewWriteClick = () => {
    if (pathname.startsWith("/addform")) {
      const steps = ["stepOne", "stepTwo", "stepThree"];
      steps.forEach((step) => localStorage.removeItem(step));
    }

    if (pathname.startsWith("/apply")) {
      localStorage.removeItem("applyFormData");
    }
    addToast("폼을 새로작성해주세요.", "info");
    closeModal();
    setNewWrite(true);
    router.push(pathname);
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
        <h2 className="modal-title">작성 중인 폼이 있어요!</h2>
        <p className="modal-sub-title">이어서 작성하시겠어요?</p>
        <div className="mt-6 flex w-[327px] flex-col gap-2 pc:w-[360px]">
          <SolidButton
            style="orange300"
            type="button"
            onClick={handleContinueWriteClick}
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

export default NewWriteformModal;
