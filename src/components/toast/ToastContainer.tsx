"use client";

import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { toastAtom } from "@/atoms/toastAtomStore";
import ToastItem from "./ToastItem";

const ToastContainer = () => {
  const [toasts, setToasts] = useAtom(toastAtom);
  const [animatingToast, setAnimatingToast] = useState<string | null>(null); // 애니메이션 상태 관리

  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(() => {
        const toastToAnimate = toasts[0];
        setAnimatingToast(toastToAnimate.id);

        setTimeout(() => {
          setToasts((prev) =>
            prev.filter((toast) => toast.id !== toastToAnimate.id)
          );
          setAnimatingToast(null);
        }, 300); // 애니메이션 종료 시 완전 제거
      }, 3000); // 대기 후 애니메이션 시작

      return () => clearTimeout(timer);
    }
  }, [toasts]);

  const removeToast = (id: string) => {
    setAnimatingToast(id);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
      setAnimatingToast(null);
    }, 300);
  };

  return (
    <div className="fixed left-1/2 top-[62px] z-50 flex -translate-x-1/2 flex-col gap-y-2 pc:top-[104px] pc:gap-y-4 tablet:top-[72px] tablet:gap-y-3">
      {toasts.map((toast) => (
        <ToastItem
          key={toast.id}
          toast={toast}
          isAnimating={animatingToast === toast.id}
          onRemove={removeToast}
        />
      ))}
    </div>
  );
};

export default ToastContainer;
