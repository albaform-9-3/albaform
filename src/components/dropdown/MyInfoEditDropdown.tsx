"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/dropdown/DropdownMenu";
import Image from "next/image";

const MyInfoEditDropdown = ({
  onMyInfoEdit,
  onPasswordEdit,
}: {
  onMyInfoEdit: () => void;
  onPasswordEdit: () => void;
}) => {
  const itemArr = [
    { text: "내 정보 수정", onClick: onMyInfoEdit },
    { text: "비밀번호 변경", onClick: onPasswordEdit },
  ];

  return (
    <DropdownMenu className="bg-transparent pc:hidden">
      <DropdownMenuTrigger
        asChild
        id="myInfoEdit"
        checkedValue={undefined}
        className="rounded-lg"
      >
        <Image
          src="/icon/kebab-lg.svg"
          alt="정보 수정 드롭다운"
          width={24}
          height={24}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        id="myInfoEdit"
        className="w-fit translate-x-[-70px] items-center bg-white p-1"
      >
        {itemArr.map((item) => (
          <DropdownMenuItem
            key={item.text}
            onClick={item.onClick}
            className="rounded-lg px-3 py-2 text-center font-semibold text-gray-400 hover:text-black-400 pc:text-base"
          >
            {item.text}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MyInfoEditDropdown;
