import { atom } from "jotai";
import { atomFamily } from "jotai/utils";

export const dropdownTriggerAtom = atomFamily((id: string) => atom(false));
