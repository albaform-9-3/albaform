"use client";

import { orderByAtom } from "@/atoms/dropdownAtomStore";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/dropdown/DropdownMenu";
import { useAtom } from "jotai";
import Image from "next/image";

// title은 화면에 표출되는 명칭, value는 실제 서버로 전달되는 값입니다.
// orderBy.value, orderBy.title 형식으로 사용해주세요.
// 이 드롭다운은 트리거 역할을 하는 children 요소가 고정요소여서 해당 요소를 넣어놨습니다.
const OrderByDropdown = () => {
  const [orderBy, setOrderBy] = useAtom(orderByAtom);

  const handleClick = (value: string, title: string) => {
    setOrderBy({ value, title });
  };

  const valueArr = [
    { title: "최신 순", value: "mostRecent" },
    { title: "시급높은순", value: "highestWage" },
    { title: "지원자 많은순", value: "mostApplied" },
    { title: "스크랩 많은순", value: "mostScrapped" },
  ];

  return (
    <DropdownMenu className="bg-transparent">
      <DropdownMenuTrigger
        asChild
        checkedValue={orderBy.value}
        id="orderBy"
        className="rounded-lg"
      >
        <div className="flex items-center space-x-1">
          <span className="text-xs pc:text-base">{orderBy.title}</span>
          <Image
            src="/icon/arrow-bottom.svg"
            alt="정렬 드롭다운"
            width={16}
            height={16}
            sizes="(max-width: 768px) 16px, 24px"
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        id="orderBy"
        className="w-24 translate-x-[-45px] items-center bg-white p-1 shadow-lg pc:w-[132px] pc:translate-x-[-70px]"
      >
        {valueArr.map((item) => (
          <DropdownMenuItem
            key={item.value}
            onClick={() => handleClick(item.value, item.title)}
            className="rounded-lg px-3 py-2 text-center tracking-tighter pc:text-base"
          >
            {item.title}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default OrderByDropdown;
