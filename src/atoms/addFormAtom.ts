import { AddFormStepProps } from "@/types/addform";
import { atom } from "jotai";

interface AlbaformCreateStep {
  title?: string;
  value: string;
  stepNum?: number;
}

export const addFormStepAtom = atom<AlbaformCreateStep>({
  title: "모집 내용",
  value: "stepOne",
  stepNum: 1,
});

export const currentImageListAtom = atom<File[]>([]);

export const temporaryDataByStepAtom = atom<AddFormStepProps>({});

export const addFormLoadingAtom = atom<boolean>(false);
