"use client";

import { WhiteButton } from "@/components/common/WhiteButton";

export const FilterTab = () => {
  const classNames =
    "hover:border-none shadow hover:bg-primary-6 hover:text-white transition-colors duration-150 ease-in-out";
  return (
    <div className="w-full flex gap-2 items-start">
      <WhiteButton
        text={"날짜별 보기"}
        classNames={classNames}
        onClick={() => {}}
      />
      <WhiteButton
        text={"앨범별 보기"}
        classNames={classNames}
        onClick={() => {}}
      />
    </div>
  );
};
