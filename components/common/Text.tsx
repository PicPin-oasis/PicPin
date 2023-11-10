"use client";

import { TextProps } from "@/types/types";
import Image from "next/image";
import essentialIcon from "@assets/svg/essential.svg";

export const Text = ({ text, type, classNames }: TextProps) => {
  return (
    <div className={`flex items-center gap-1 ${classNames}`}>
      <h3>{text}</h3>
      {type === "essential" && (
        <Image
          width="8"
          height="10"
          src={essentialIcon}
          alt={essentialIcon}
          priority
          className="pb-2"
        />
      )}
    </div>
  );
};
