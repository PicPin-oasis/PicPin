"use client";

import { OrangeButton } from "@/components/common/OrangeButton";

export const FilterTab = () => {
  const classNames =
    "hover:border-none shadow hover:bg-primary-6 hover:text-white transition-colors duration-150 ease-in-out";
  return (
    <div className="w-full flex gap-2 items-start">
      <OrangeButton
        text={"날짜별 보기"}
        classNames={classNames}
        onClick={() => {}}
      />
      <OrangeButton
        text={"앨범별 보기"}
        classNames={classNames}
        onClick={() => {}}
      />
    </div>
  );
};
