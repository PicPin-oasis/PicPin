"use client";

import { useGetPhotoDetail } from "@/apis/axios/photos/getPhotoDetail";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  src: string;
  id: string;
}
export const PhotoCard = ({ src, id }: Props) => {
  const router = useRouter();
  const [targetId, setTargetId] = useState<number | null>(null);
  const handleImgClick = async (event: React.MouseEvent) => {
    const IID = +(event.target as HTMLImageElement).id;
    setTargetId(IID);
    router.push("/photo/detail");
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
