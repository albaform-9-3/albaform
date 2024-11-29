"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import Image from "next/image";
import "./customCalendar.css";

const Test = () => {
  const [dateRange, setDateRange] = useState<Date[] | null>(null); // 시작일과 종료일 관리

  // 범위 내 날짜인지 확인
  const isInRange = (date: Date) => {
    if (!dateRange || dateRange.length !== 2) return false; // 범위가 없으면 false
    const [start, end] = dateRange;
    return date >= start && date <= end; // 시작일과 종료일 사이인지 확인
  };

  return (
    <div>
      <Calendar
        selectRange={true} // 범위 선택 활성화
        onChange={(range) => setDateRange(range as Date[])} // 선택 범위를 상태로 설정
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

export default Test;
