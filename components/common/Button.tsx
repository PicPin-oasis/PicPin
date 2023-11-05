"use client";

import { ButtonProps } from "@/types/types";
import { useCallback } from "react";

const Button = ({ text, onClick }: ButtonProps) => {
  const onClickCallback = useCallback<
    React.MouseEventHandler<HTMLButtonElement>
  >(() => onClick && onClick(), [onClick]);
  return (
    <button
      className="text-center bg-primary-100 px-7 py-3 text-white rounded-lg border-none	"
      onClick={onClickCallback}
    >
      {text}
    </button>
  );
};

export default Button;
