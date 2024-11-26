"use client";

import { useModal } from "@/hooks/useModal";
import React, { useState } from "react";
import SortButton from "@/components/button/SortButton";

const ModalPage = () => {
  const { openModal } = useModal();
  const [sortOption, setSortOption] = useState("");

  const handleSortSelect = (value: string) => {
    setSortOption(value);
  };

  const sortItems = [
    { title: "최신순", value: "mostRecent" },
    { title: "시급높은순", value: "highestWage" },
    { title: "지원자 많은순", value: "mostApplied" },
    { title: "스크랩 많은순", value: "mostScrapped" },
    {
      title: "fffffffffffffffffffffffffffffffffffffffffff",
      value: "23423",
    },
  ];
  return (
    <div className="mt-[50px] flex flex-col gap-[60px] pl-[30px]">
      <div className="flex justify-between">
        <button onClick={() => openModal("ClosedAlbaformModal")}>
          모집 마감 모달
        </button>
        <SortButton
          size="large"
          items={sortItems}
          onSelect={handleSortSelect}
        />
      </div>
      <div>
        <button onClick={() => openModal("DeleteAlbaformModal")}>
          알바폼 삭제 모달
        </button>
      </div>
      <div>
        <button onClick={() => openModal("PatchAlbaformModal")}>
          이어쓰기 모달
        </button>
      </div>
      <div>
        <button onClick={() => openModal("SelectProgressModal")}>
          진행상태 선택
        </button>
      </div>
    </div>
  );
};

export default ModalPage;
