import { atom } from "jotai";
import { atomFamily } from "jotai/utils";

export const dropdownTriggerAtom = atomFamily((id: string) => atom(false));

// 전체 - 모집 중 - 모집 마감 드롭다운 (isRecruiting)
export const applicationStatusAtom = atom<boolean | undefined>(undefined);

// 전체 - 공개 - 비공개 드롭다운 (isPublic)
export const publicStatusAtom = atom<boolean | undefined>(undefined);

// 전체 - 거절 - 면접 대기 - 면접 완료 - 채용 완료 드롭다운 (status)
export const recruitStatusAtom = atom<string | undefined>(undefined);

// 최신 순 - 시급 높은 순 - 지원자 많은 순 - 스크랩 많은 순 (orderBy)
interface OrderBy {
  title: string;
  value: string;
}

export const orderByAtom = atom<OrderBy>({
  title: "최신 순",
  value: "mostRecent",
});
