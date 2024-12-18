"use client";

import CancelButton from "@/components/button/CancelButton";
import { useParams, useRouter } from "next/navigation";

const Title = () => {
  const router = useRouter();
  const params = useParams();

  const handleCancel = () => {
    const isConfirm = confirm("작성을 취소하시겠습니까?"); // 모달 변경 필요
    if (isConfirm) {
      const keys = ["stepOne", "stepTwo", "stepThree"];

      keys.forEach((key) => {
        localStorage.removeItem(key);
      });
      router.push("/albalist");
    }
  };

  return (
    <div className="flex w-full items-center justify-between p-6 pc:m-0 pc:pt-0">
      <h2 className="text-xl font-semibold text-black-500 pc:text-3xl">
        {params.id ? "알바폼 수정하기" : "알바폼 만들기"}
      </h2>
      <CancelButton onClick={handleCancel}>작성 취소</CancelButton>
    </div>
  );
};

export default Title;
