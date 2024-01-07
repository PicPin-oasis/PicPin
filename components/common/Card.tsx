"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  src: string;
  id: string;
  onClick: (e: React.MouseEvent) => void;
  size: number;
}
const Card = ({ src, id, onClick, size }: Props) => {
  return (
    <div onClick={onClick} className={`w-[${size}px] h-[${size}px]`}>
      <Image
        src={src}
        alt={src}
        width={size}
        height={size}
        className="rounded-lg cursor-pointer"
        priority
        id={id}
      />
    </div>
  );
};

export default Card;
