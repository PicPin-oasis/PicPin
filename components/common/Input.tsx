"use client";

import { InputProps } from "@/types/types";
import { useCallback } from "react";
import Image from "next/image";

export const Input = ({
  classNames,
  placeholder,
  register,
  name,
  rules,
}: InputProps) => {
  return (
    <input
      className={`text-sm w-2/3 px-2 py-1 focus:outline-none focus:border-[1.5px] rounded-md border-solid border-[1px] border-primary-6 shadow ${classNames}`}
      placeholder={placeholder}
      {...register(name, rules)}
    />
  );
};
