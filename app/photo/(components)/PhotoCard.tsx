"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  src: string;
  id: string;
}
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
        className="rounded-lg cursor-pointer"
        priority
        id={id}
      />
    </div>
  );
};
