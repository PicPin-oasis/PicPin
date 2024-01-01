"use client";

import { ButtonProps } from "@/types/types";
import { useCallback } from "react";
import Image from "next/image";

const WhiteButton = ({
  text,
  onClick,
  image,
  classNames,
  imageWidth,
  imageHeight,
}: ButtonProps) => {
  const onClickCallback = useCallback<
    React.MouseEventHandler<HTMLButtonElement>
  >(() => onClick && onClick(), [onClick]);
  return (
    <button
      className={`flex justify-center items-center text-sm font-bold text-primary-6 w-28 p-1 bg-white border border-solid border-primary-6 cursor-pointer ${classNames}`}
      onClick={onClickCallback}
    >
      {image && (
        <Image
          width={imageWidth}
          height={imageHeight}
          src={image}
          alt={image}
          priority
        />
      )}
      <div>{text}</div>
    </button>
  );
};

export default WhiteButton;
