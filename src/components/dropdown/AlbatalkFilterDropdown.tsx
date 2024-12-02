"use client";

import { albatalkFilterAtom } from "@/atoms/dropdownAtomStore";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/dropdown/DropdownMenu";
import { useAtom } from "jotai";
import Image from "next/image";

const AlbatalkFilterDropdown = () => {
  const [albatalkFilter, setAlbatalkFilter] = useAtom(albatalkFilterAtom);

  const handleClick = (value: string, title: string) => {
    setAlbatalkFilter({ value, title });
  };

  const valueArr = [
    { title: "최신 순", value: "mostRecent" },
    { title: "댓글많은순", value: "mostCommented" },
    { title: "좋아요순", value: "mostLiked" },
  ];

  return (
    <DropdownMenu className="bg-transparent">
      <DropdownMenuTrigger
        asChild
        checkedValue={albatalkFilter.value}
        id="albatalkFilter"
        className="rounded-lg"
      >
        <div className="flex items-center space-x-1">
          <span className="text-xs pc:text-base">{albatalkFilter.title}</span>
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
        id="albatalkFilter"
        className="w-24 translate-x-[-45px] items-center bg-white p-1 shadow-lg pc:w-[132px] pc:translate-x-[-70px]"
      >
        {valueArr.map((item) => (
          <DropdownMenuItem
            key={item.value}
            onClick={() => handleClick(item.value, item.title)}
            className="rounded-lg px-3 py-2 text-center font-semibold tracking-tighter text-gray-400 hover:text-black-400 pc:text-base"
          >
            {item.title}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AlbatalkFilterDropdown;
