"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import Image from "next/image";
import "@/styles/customCalendar.css";

const CalendarContainer = () => {
  const [dateRange, setDateRange] = useState<Date[] | null>(null); // 시작일과 종료일 관리

  // 범위 내 날짜인지 확인
  const isInRange = (date: Date) => {
    if (!dateRange || dateRange.length !== 2) return false; // 범위가 없으면 false
    const [start, end] = dateRange;
    return date >= start && date <= end; // 시작일과 종료일 사이인지 확인
  };

  return (
    <div className="flex h-[388px] w-[327px] flex-col rounded-[12px] border border-gray-100 p-3 shadow-sm pc:h-[480px] pc:w-[640px]">
      <div className="flex h-[48px] items-center justify-between p-3 pc:h-[60px]">
        <span className="ml-3 flex flex-grow justify-center text-lg text-black-400 pc:ml-8 pc:text-xl">
          기간 선택
        </span>
        <button className="relative size-6 pc:size-9">
          <Image src="/icon/close-md.svg" fill alt="close button" />
        </button>
      </div>
      <Calendar
        selectRange={true} // 범위 선택 활성화
        onChange={(range) => setDateRange(range as Date[])} // 선택 범위를 상태로 설정
        formatMonthYear={(locale, date) => {
          const year = date.getFullYear();
          const month = (date.getMonth() + 1).toString().padStart(2, "0");
          return `${year}. ${month}`; // "." 뒤에 추가 기호 없음
        }}
        formatDay={(locale, date) => `${date.getDate()}`} // 날짜에 숫자만 보이게
        tileClassName={({ date, view }) =>
          view === "month" && isInRange(date) ? "in-range" : null
        }
        prevLabel={
          <Image
            src="/icon/arrow-left.svg"
            width={24}
            height={24}
            alt="prev button"
          />
        }
        nextLabel={
          <Image
            src="/icon/arrow-right.svg"
            width={24}
            height={24}
            alt="next button"
          />
        }
        prev2Label={null} // << 버튼 숨기기
        next2Label={null} // >> 버튼 숨기기
      />
    </div>
  );
};

export default CalendarContainer;
