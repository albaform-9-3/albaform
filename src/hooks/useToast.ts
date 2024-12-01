import { useSetAtom } from "jotai";
import { ToastType } from "@/types/toast";
import { toastAtom } from "@/atoms/toastAtomStore";

export const useToast = () => {
  const setToasts = useSetAtom(toastAtom);

  const addToast = (
    message: string | JSX.Element,
    type: ToastType["type"] = "info"
  ) => {
    // ID 생성
    const id = Math.random().toString(36).slice(2, 11);

    const newToast = { id, message, type };

    setToasts((prev) => {
      // Toast 개수 제한 - 최대 3개
      const updatedToasts = [...prev, newToast];
      return updatedToasts.length > 3
        ? updatedToasts.slice(updatedToasts.length - 3)
        : updatedToasts;
    });
  };

  return { addToast };
};
