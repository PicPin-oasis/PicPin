"use client";

import Card from "@/components/common/Card";
import { useRouter } from "next/navigation";

interface Props {
  src: string;
  id: string;
}
const PhotoCard = ({ src, id }: Props) => {
  const router = useRouter();
  const handleImgClick = async (e: React.MouseEvent) => {
    const IID = +(e.target as HTMLImageElement).id;
    router.push(`/photo/${IID}`);
  };
  return <Card src={src} id={id} onClick={handleImgClick} size={85} />;
};

export default PhotoCard;
