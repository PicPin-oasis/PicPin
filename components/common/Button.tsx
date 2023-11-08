"use client";

import { ButtonProps } from "@/types/types";
import { useCallback } from "react";
import Image from "next/image";

const Button = ({ text, onClick, image }: ButtonProps) => {
  const onClickCallback = useCallback<
    React.MouseEventHandler<HTMLButtonElement>
  >(() => onClick && onClick(), [onClick]);
  return (
    <button
      className="text-center w-80 px-7 py-3 rounded-lg bg-white border-solid border-[1px] border-slate-200 hover:border-none shadow hover:bg-primary-6 hover:text-white transition-colors duration-150 ease-in-out cursor-pointer"
      onClick={onClickCallback}
    >
      {text}
      {image && (
        <Image width="30" height="30" src={image} alt={image} priority />
      )}
    </button>
  );
};

export default Button;
