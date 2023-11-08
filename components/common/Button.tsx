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
      className={`text-lg text-center w-80 px-7 py-3 rounded-lg bg-white border-solid border-[1px] border-slate-200 hover:border-none shadow hover:bg-primary-6 hover:text-white transition-colors duration-150 ease-in-out cursor-pointer ${classNames}`}
      onClick={onClickCallback}
    >
      {text}
      {image && (
        <Image
          width="25"
          height="25"
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
