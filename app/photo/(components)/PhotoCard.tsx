"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  src: string;
  id: string;
}
// 포토 카드 클릭 시 targetId를 url로 넘긴다.
// 넘긴 주소로 라우터로 이동하기
// 넘긴 디테일 페이지에서 디테일 api 요청하기
export const PhotoCard = ({ src, id }: Props) => {
  const router = useRouter();
  const handleImgClick = async (event: React.MouseEvent) => {
    const IID = +(event.target as HTMLImageElement).id;
    router.push(`/photo/${IID}`);
  };
  return (
    <div onClick={handleImgClick}>
      <Image
        src={src}
        alt={src}
        width={85}
        height={85}
        className="rounded-lg"
        priority
        id={id}
      />
    </div>
  );
};
