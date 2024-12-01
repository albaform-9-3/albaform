import Image from "next/image";
import { ToastType } from "@/types/toast";
import closeIcon from "@/../public/icon/close-md.svg";
import closeIconLarge from "@/../public/icon/close-lg.svg";
import userIcon from "@/../public/icon/user-md.svg";
import userIconLarge from "@/../public/icon/user-lg.svg";

const backgroundDefaultColor =
  "bg-[linear-gradient(0deg,rgba(42,44,61,0.9),rgba(42,44,61,0.9)),linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2))]";

const toastTypeStyles = {
  info: `${backgroundDefaultColor} text-white`,
  warning: `${backgroundDefaultColor} text-orange-100`,
  error: `${backgroundDefaultColor} text-red`,
};

const ToastItem = ({
  toast,
  isAnimating,
  onRemove,
}: {
  toast: ToastType;
  isAnimating: boolean;
  onRemove: (id: string) => void;
}) => (
  <div
    className={`flex w-[347px] items-center justify-between rounded-[14px] px-6 py-3 text-[13px] font-medium opacity-95 pc:h-[84px] pc:w-[1165px] pc:px-10 pc:py-6 pc:text-xl ${toastTypeStyles[toast.type || "info"]} ${
      isAnimating ? "animate-toast-out" : "animate-toast-in"
    }`}
  >
    <div className="flex items-center gap-x-1 pc:gap-x-2">
      <Image
        src={userIcon}
        width={24}
        height={24}
        alt="toast icon"
        className="block pc:hidden"
      />
      <Image
        src={userIconLarge}
        width={36}
        height={36}
        alt="toast icon"
        className="hidden pc:block"
      />
      {typeof toast.message === "string" ? (
        <span>{toast.message}</span>
      ) : (
        toast.message
      )}
    </div>
    <button
      className="ml-4 text-sm underline"
      onClick={() => onRemove(toast.id)}
      aria-label="Close"
    >
      <Image
        src={closeIcon}
        width={24}
        height={24}
        alt="close toast"
        className="block pc:hidden"
      />
      <Image
        src={closeIconLarge}
        width={36}
        height={36}
        alt="close toast"
        className="hidden pc:block"
      />
    </button>
  </div>
);

export default ToastItem;
