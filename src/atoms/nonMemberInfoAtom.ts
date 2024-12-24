import { atom } from "jotai";

export const nonMemberInfoAtom = atom({
  id: 0,
  name: "",
  phoneNumber: "",
  experienceMonths: 0,
  resumeId: 0,
  resumeName: "",
  introduction: "",
  status: "",
  createdAt: "",
  updatedAt: "",
  applicantId: null,
});
