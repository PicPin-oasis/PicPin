"use client";

import Card from "@/components/common/Card";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  src: string;
  id: string;
}
const PhotoCard = ({ src, id }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const handleImgClick = async (e: React.MouseEvent) => {
    const IID = +(e.target as HTMLImageElement).id;
    router.push(`/photo/${IID}`);
  };
  return (
    <Card
      src={src}
      id={id}
      onClick={handleImgClick}
      size={pathname.includes("album") ? 110 : 85}
    />
  );
};

export default PhotoCard;
