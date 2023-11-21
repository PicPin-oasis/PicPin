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
      className={`flex items-center justify-center gap-1 text-center text-xs font-bold w-36 py-2 rounded-lg shadow bg-primary-6 text-white border-none cursor-pointer ${classNames}`}
      onClick={onClickCallback}
    >
      {text}
      {image && (
        <Image
          width="15"
          height="15"
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
