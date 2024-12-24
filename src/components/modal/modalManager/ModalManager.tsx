"use client";

import { useAtomValue } from "jotai";
import { modalAtom } from "@/atoms/modalAtomStore";
import CloseAlbaformModal from "../modalContent/ClosedAlbaformModal";
import DeleteAlbaformModal from "../modalContent/DeleteAlbaformModal";
import NewWriteformModal from "../modalContent/NewWriteformModal";
import GetMyApplicationModal from "../modalContent/GetMyApplicationModal";
import MyApplicationModal from "../modalContent/MyApplicationModal";
import SelectProgressModal from "../modalContent/SelectProgressModal";
import ChangePasswordModal from "../modalContent/ChangePasswordModal";
import ChangeMyInfoModal from "../modalContent/ChangeMyInfoModal";
import ChangeCEOInfoModal from "../modalContent/ChangeCEOInfoModal";
import ShareSNSModal from "../modalContent/ShareSNSModal";
import SelectLocationModal from "../modalContent/SelectLocationModal";
import ApplicantListModal from "../modalContent/ApplicantListModal";

const ModalManager = () => {
  const modalType = useAtomValue(modalAtom);

  if (!modalType) return null;

  switch (modalType) {
    case "ClosedAlbaformModal":
      return <CloseAlbaformModal />;
    case "DeleteAlbaformModal":
      return <DeleteAlbaformModal />;
    case "NewWriteformModal":
      return <NewWriteformModal />;
    case "GetMyApplicationModal":
      return <GetMyApplicationModal />;
    case "MyApplicationModal":
      return <MyApplicationModal />;
    case "SelectProgressModal":
      return <SelectProgressModal />;
    case "ChangePasswordModal":
      return <ChangePasswordModal />;
    case "ChangeMyInfoModal":
      return <ChangeMyInfoModal />;
    case "ChangeCEOInfoModal":
      return <ChangeCEOInfoModal />;
    case "ShareSNSModal":
      return <ShareSNSModal />;
    case "SelectLocationModal":
      return <SelectLocationModal />;
    case "ApplicantListModal":
      return <ApplicantListModal />;
    default:
      return null;
  }
};

export default ModalManager;
