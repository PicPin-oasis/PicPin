"use client";

import Image from "next/image";
import essentialIcon from "@assets/svg/essential.svg";

interface Props {
  text: string;
  type?: string;
  classNames?: string;
}

export const Text = ({ text, type, classNames }: Props) => {
  return (
    <div className={`flex items-center gap-1 ${classNames}`}>
      <b>{text}</b>
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
