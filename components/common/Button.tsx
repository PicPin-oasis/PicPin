"use client";

import { ButtonProps } from "@/types/types";
import { useCallback } from "react";
import Image from "next/image";

const Button = ({ text, onClick, image, classNames }: ButtonProps) => {
  const onClickCallback = useCallback<
    React.MouseEventHandler<HTMLButtonElement>
  >(() => onClick && onClick(), [onClick]);
  return (
    <button
      className={`flex items-center justify-center gap-1 text-center text-xs font-bold w-fit px-3 py-2 rounded-md shadow bg-primary-6 text-white border-none cursor-pointer ${classNames}`}
      onClick={onClickCallback}
    >
      {text}
      {image && (
        <Image
          width="12"
          height="12"
          src={image}
          alt={image}
          priority
          className=""
        />
      )}
    </button>
  );
};

export default Button;
