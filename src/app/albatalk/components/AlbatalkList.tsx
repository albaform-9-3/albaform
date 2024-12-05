"use client";

import PostCard from "@/components/card/PostCard";
import { PostCardProps } from "@/types/post";
import useInfinityScroll from "@/hooks/useInfinityScroll";
import useFetchAlbatalkData from "../hooks/useFetchAlbatalkData";
import Image from "next/image";

const AlbatalkList = ({
  posts: initialPosts,
  nextCursor: initialCursor,
}: {
  posts: PostCardProps[];
  nextCursor: number | null;
}) => {
  const { posts, cursor, fetchArticles } = useFetchAlbatalkData({
    initialPosts,
    initialCursor,
  });

  // 무한스크롤 요청
  const fetchMoreData = () => {
    fetchArticles({ isReset: false });
  };

  // 무한 스크롤 훅 사용
  const observerRef = useInfinityScroll({
    fetchMoreData,
  });

  return (
    <div>
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 pc:grid-cols-3 pc:gap-x-[25px] pc:gap-y-[48px]">
          {posts.map((post) => (
            <PostCard key={post.id} info={post} />
          ))}
        </div>
      ) : (
        <div>게시글이 없습니다</div> //빈페이지 필요
      )}

      {cursor && (
        <>
          <div className="mt-[60px] flex h-[200px] flex-col items-center tablet:hidden mobile:hidden">
            더보기를 원하시면 스크롤을 내려주세요
            <Image
              src="/icon/arrow-fill-bottom.svg"
              width={50}
              height={50}
              alt="더보기"
            />
          </div>
          <div ref={observerRef} className="h-1"></div>
        </>
      )}
    </div>
  );
};

export default AlbatalkList;
