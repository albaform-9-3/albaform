"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import arrowIcon from "@/../public/icon/arrow-bottom.svg";

interface SortButtonItem {
  title: string;
  value: string;
}

interface SortButtonProps {
  size?: "small" | "large";
  items: SortButtonItem[]; // 항목 리스트
  onSelect: (item: string) => void;
}

interface SortItemProps {
  item: SortButtonItem;
  onSelect: (item: SortButtonItem) => void;
  size: "small" | "large";
}

const SortButtonItem = ({ item, onSelect, size }: SortItemProps) => {
  const sizeLiStyle =
    size === "small" ? "h-7 py-1 text-xs" : "h-[38px] py-[6px] text-base";

  return (
    <li
      onClick={() => onSelect(item)}
      className={`cursor-pointer rounded-lg text-center ${sizeLiStyle} font-medium text-gray-400 hover:bg-[#fff7eb] hover:font-semibold hover:text-gray-700`}
    >
      {item.title}
    </li>
  );
};

const SortButton = ({
  size = "small",
  items,
  onSelect,
  ...rest
}: SortButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string>(
    items[0]?.title || ""
  );

  const dropdownRef = useRef<HTMLUListElement | null>(null);

  const handleToggle = () => setIsOpen((prev) => !prev);

  const handleSelect = (item: SortButtonItem) => {
    setSelectedItem(item.title);
    onSelect(item.value);
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const sizeFontStyle = size === "small" ? "text-xs" : "text-base";
  const sizeUlStyle =
    size === "small"
      ? "w-20 p-[3px] gap-y-[6px] mt-[6px]"
      : "w-[132px] p-2 gap-y-[14px] mt-2";

  const buttonClass = `flex items-center bg-white ${sizeFontStyle} font-semibold text-black-300`;
  const ulClass = `absolute right-0 z-10 flex ${sizeUlStyle} flex-col rounded-lg border border-line-100 bg-white shadow-md`;

  return (
    <div className="relative inline-block">
      {/* Sort 버튼 */}
      <button onClick={handleToggle} className={buttonClass} {...rest}>
        {selectedItem}
        <Image src={arrowIcon} alt="sortIcon" width={24} height={24} />
      </button>

      {/* 드롭다운 메뉴 */}
      {isOpen && (
        <ul ref={dropdownRef} className={ulClass}>
          {items.map((item) => (
            <SortButtonItem
              key={item.value}
              item={item}
              onSelect={handleSelect}
              size={size}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default SortButton;
