"use client";

import { publicStatusAtom } from "@/atoms/dropdownAtomStore";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/dropdown/DropdownMenu";
import { useAtom } from "jotai";

// import한 컴포넌트에서 useAtomValue로 publicStatus 값을 받으세요.
const PublicDropdown = () => {
  const [publicStatus, setPublicStatus] = useAtom(publicStatusAtom);

  const handleClick = (status: boolean | undefined) => {
    setPublicStatus(status);
  };

  const valueArr = [
    { value: "전체", status: undefined },
    { value: "공개", status: true },
    { value: "비공개", status: false },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        checkedValue={
          valueArr.find((item) => item.status === publicStatus)?.value
        }
        id="public"
      />
      <DropdownMenuContent id="public">
        {valueArr.map((item) => (
          <DropdownMenuItem
            key={item.value}
            onClick={() => handleClick(item.status)}
          >
            {item.value}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PublicDropdown;
