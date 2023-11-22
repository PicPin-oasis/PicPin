"use client";

import { ButtonProps } from "@/types/types";
import { useCallback } from "react";
import Image from "next/image";

export const WhiteButton = ({
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
      className={`text-sm text-center text-primary-6 w-fit px-2 py-1 rounded-md bg-white border-solid border-[1px] border-primary-6  cursor-pointer ${classNames}`}
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
      {text}
    </button>
  );
};
