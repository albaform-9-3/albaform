"use client";

import Empty from "@/app/albatalk/components/Empty";
import PostCardListSkeleton from "@/app/albatalk/components/PostCardSkeleton";
import useInfinityScroll from "@/hooks/useInfinityScroll";
import { useState } from "react";
import { getMyScraps } from "../getMyScraps";
import AlbarPreview from "@/components/card/AlbarPreview";
import { MyScrap } from "@/types/scrap";

interface ResponseType {
  data?: MyScrap[];
  nextCursor?: number | null;
  status?: number;
  message?: string;
}

const MyScrapList = ({
  myScraps: initialScraps,
  nextCursor: initialCursor,
  orderBy,
  isPublic,
  isRecruiting,
  role,
}: {
  myScraps: MyScrap[];
  nextCursor: number | null;
  orderBy: string;
  isPublic?: boolean;
  isRecruiting?: boolean;
  role: string;
}) => {
  const [myScraps, setMyScraps] = useState(initialScraps);
  const [cursor, setCursor] = useState(initialCursor);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMoreData = async () => {
    if (isLoading) return;

    setIsLoading(true);
    try {
      const response: ResponseType = await getMyScraps({
        limit: 6,
        cursor,
        orderBy,
        isPublic,
        isRecruiting,
      });

      const newScraps = response.data ?? [];
      const newCursor = response.nextCursor ?? null;

      setMyScraps((prevList) => [
        ...prevList,
        ...newScraps.filter(
          (newScrap) => !prevList.some((scrap) => scrap.id === newScrap.id)
        ),
      ]);
      setCursor(newCursor);
    } catch (error) {
      console.error("데이터를 불러오는데 실패했습니다.", error);
    } finally {
      setIsLoading(false);
    }
  };

  const observerRef = useInfinityScroll({
    fetchMoreData,
  });

  return (
    <div>
      {myScraps?.length > 0 ? (
        <ul className="grid grid-cols-1 gap-4 pc:grid-cols-3 pc:gap-x-[25px] pc:gap-y-[48px] tablet:grid-cols-2">
          {myScraps.map((myScrap) => (
            <li key={myScrap.id}>
              <AlbarPreview info={myScrap} role={role} />
            </li>
          ))}
        </ul>
      ) : (
        <Empty />
      )}

      {cursor && <div ref={observerRef} style={{ height: "1px" }} />}

      {isLoading && <PostCardListSkeleton count={3} />}
    </div>
  );
};

export default MyScrapList;
