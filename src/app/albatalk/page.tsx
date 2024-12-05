"use server";

import { PostCardProps } from "@/types/post";
import { getArticles } from "./getArticles";
import AlbatalkList from "./components/AlbatalkList";
import { Suspense } from "react";

const AlbaTalkPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ orderBy?: string; keyword?: string }>;
}) => {
  const { orderBy = "mostRecent", keyword = "" } = await searchParams;

  const response = await getArticles({
    limit: 6,
    cursor: 0,
    orderBy,
    keyword,
  });
  const nextCursor: number | null = response.nextCursor;
  const posts: PostCardProps[] = response.data;

  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <AlbatalkList posts={posts} nextCursor={nextCursor} />
    </Suspense>
  );
};

export default AlbaTalkPage;
