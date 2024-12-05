"use client";

import Image from "next/image";

interface SolidButtonProps {
  icon?: string;
  children: string;
  style:
    | "orange300"
    | "orange200"
    | "gray100"
    | "outOrange300"
    | "outOrange200";
  disabled?: boolean;
  [key: string]: any;
}

const SolidButton = ({
  icon,
  children,
  style,
  disabled = false,
  ...rest
}: SolidButtonProps) => {
  // 버튼 스타일 변수 선언
  const styles = {
    buttonOrange300: "bg-orange-300 text-white active:scale-95",
    buttonOrange200: "bg-orange-200 text-white active:scale-95",
    buttonGray100: "bg-gray-100 text-white active:scale-95",
    outButtonOrange300:
      "border border-orange-300 bg-transparent text-orange-300 active:scale-95",
    outButtonOrange200:
      "border border-orange-200 bg-transparent text-orange-200 active:scale-95",
    disabledButtonOrange: "bg-gray-100 text-white",
    disabledButtonGray: "bg-gray-100 text-white",
    disabledOutButtonOrange:
      "border border-gray-100 bg-transparent text-gray-100",
  };

  // 활성화 상태 or 비활성화 상태 스타일
  const buttonStyles = {
    orange300: disabled ? styles.disabledButtonOrange : styles.buttonOrange300,
    orange200: disabled ? styles.disabledButtonOrange : styles.buttonOrange200,
    gray100: disabled ? styles.disabledButtonGray : styles.buttonGray100,
    outOrange300: disabled
      ? styles.disabledOutButtonOrange
      : styles.outButtonOrange300,
    outOrange200: disabled
      ? styles.disabledOutButtonOrange
      : styles.outButtonOrange200,
  };

  // 공통
  const commonClass = `w-full max-w-[327px] py-4 text-base pc:max-w-[640px] pc:py-5 pc:text-xl flex items-center gap-x-2 font-semibold rounded-lg justify-center transition-transform duration-200 ease-out hover:opacity-90`;

  // 최종 스타일
  const finalClassName = `${commonClass} ${buttonStyles[style]}`;

  return (
    <button className={finalClassName} disabled={disabled} {...rest}>
      {icon && (
        <span>
          <Image
            src={icon}
            alt="buttonIcon"
            width={24}
            height={24}
            className="pc:size-9"
          />
        </span>
      )}
      {children}
    </button>
  );
};

export default SolidButton;
