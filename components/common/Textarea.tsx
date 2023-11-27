"use client";

import { TextareaProps } from "@/types/types";

export const Textarea = ({
  classNames,
  placeholder,
  register,
  name,
  rules,
  value,
  onChange,
}: TextareaProps) => {
  return (
    <textarea
      className={`text-sm w-full h-24 text-start pl-2 py-3 mt-2.5 focus:outline-none focus:border-[1.5px] rounded-md border-solid border-[1px] border-primary-6 shadow resize-none ${classNames}`}
      placeholder={placeholder}
      {...register(name, rules)}
      value={value}
      onChange={onChange}
    />
  );
};
