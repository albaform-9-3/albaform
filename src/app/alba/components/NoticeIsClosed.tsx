"use client";

import { useEffect } from "react";
import { useModal } from "@/hooks/useModal";
import isPast from "@/utils/isPast";

const NoticeIsClosed = ({ closedDate }: { closedDate: string }) => {
  const { openModal } = useModal();

  useEffect(() => {
    if (isPast(closedDate)) openModal("ClosedAlbaformModal");
  }, [openModal, closedDate]);

  return null;
};

export default NoticeIsClosed;
