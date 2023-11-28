"use client";

import { InputProps } from "@/types/types";

export const Input = ({
  classNames,
  placeholder,
  register,
  name,
  rules,
}: InputProps) => {
  return (
    <div
      className={`w-full rounded-md mt-2.5 bg-white focus:border-[1.5px] border-solid border-[1px] border-primary-6 shadow ${classNames}`}
    >
      <input
        className="text-sm w-11/12 py-3 pl-2 rounded-md  border-0 p-0 focus:ring-0 focus:border-0 focus:outline-none"
        placeholder={placeholder}
        {...register(name, rules)}
      />
    </div>
  );
};
