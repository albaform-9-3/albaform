import { atom } from "jotai";
import { ToastType } from "@/types/toast";

export const toastAtom = atom<ToastType[]>([]);
