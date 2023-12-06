"use client";

import Image from "next/image";

interface Props {
  src: string;
}
export const PhotoCard = ({ src }: Props) => {
  return (
    <Image
      // src={`https://image-store.picpin.life/${src}`}
      src="https://image-store.picpin.life/images/KakaoTalk_20220201_105518089_01.jpg"
      alt={src}
      width={85}
      height={85}
      className="rounded-lg"
      priority
    />
  );
};
