"use client";

import { PostCardProps } from "@/types/post";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getArticles } from "../getArticles";

interface AlbatalkResponse {
  data: PostCardProps[];
  nextCursor: number | null;
}

const useFetchAlbatalkData = ({
  initialPosts,
  initialCursor,
}: {
  initialPosts: PostCardProps[];
  initialCursor: number | null;
}) => {
  const [posts, setPosts] = useState(initialPosts);
  const [cursor, setCursor] = useState(initialCursor);
  const [isLoading, setIsLoading] = useState(false);

  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword") || "";
  const orderBy = searchParams.get("albatalkOrderBy") || "mostRecent";

  const fetchArticles = async ({ isReset = false }: { isReset: boolean }) => {
    if (isLoading) return;

    setIsLoading(true);
    try {
      const response: AlbatalkResponse = await getArticles({
        limit: 6,
        cursor: isReset ? 0 : cursor,
        keyword,
        orderBy,
      });

      setPosts((prevList) =>
        isReset
          ? response.data
          : [
              ...prevList,
              ...response.data.filter(
                (newPost) => !prevList.some((post) => post.id === newPost.id)
              ),
            ]
      );
      setCursor(response.nextCursor);
    } catch (error) {
      console.error("데이터를 불러오는데 실패했습니다.", error);
    } finally {
      setIsLoading(false);
    }
  };

  // 검색, 드랍다운 기능 사용 시 요청
  useEffect(() => {
    fetchArticles({ isReset: true });
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [orderBy, keyword]);

  return {
    posts,
    cursor,
    isLoading,
    fetchArticles,
  };
};

export default useFetchAlbatalkData;
