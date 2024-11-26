"use client";

import Image from "next/image";

interface SolidButtonProps {
  icon?: string;
  children: string;
  size?: "small" | "large";
  style: "orange300" | "orange200" | "outOrange300" | "outOrange200";
  disabled?: boolean;
}

const SolidButton = ({
  icon,
  children,
  size = "small",
  style,
  disabled = false,
  ...rest
}: SolidButtonProps) => {
  // 버튼 스타일 변수 선언
  const styles = {
    buttonOrange300: "bg-orange-300 text-white active:scale-95",
    buttonOrange200: "bg-orange-200 text-white active:scale-95",
    outButtonOrange300:
      "border border-orange-300 bg-transparent text-orange-300 active:scale-95",
    outButtonOrange200:
      "border border-orange-200 bg-transparent text-orange-200 active:scale-95",
    disabledButtonOrange: "bg-gray-100 text-white",
    disabledOutButtonOrange:
      "border border-gray-100 bg-transparent text-gray-100",
  };

  // 활성화 상태 or 비활성화 상태 스타일
  const buttonStyles = {
    orange300: disabled ? styles.disabledButtonOrange : styles.buttonOrange300,
    orange200: disabled ? styles.disabledButtonOrange : styles.buttonOrange200,
    outOrange300: disabled
      ? styles.disabledOutButtonOrange
      : styles.outButtonOrange300,
    outOrange200: disabled
      ? styles.disabledOutButtonOrange
      : styles.outButtonOrange200,
  };

  // 크기별 스타일
  const sizeStyle = {
    small: "w-full max-w-[327px] py-4 text-base",
    large: "w-full max-w-[640px] py-5 text-xl",
  };

  // 공통
  const commonClass = `flex items-center gap-x-2 font-semibold rounded-lg justify-center transition-transform duration-200 ease-out hover:opacity-90}`;

  // 최종 스타일
  const finalClassName = `${commonClass} ${sizeStyle[size]} ${buttonStyles[style]}`;

  return (
    <button className={finalClassName} disabled={disabled} {...rest}>
      {icon && (
        <span>
          <Image
            src={icon}
            alt="buttonIcon"
            width={size === "small" ? 24 : 36}
            height={size === "small" ? 24 : 36}
          />
        </span>
      )}
      {children}
    </button>
  );
};

export default SolidButton;
