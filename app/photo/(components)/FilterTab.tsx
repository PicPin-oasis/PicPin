"use client";

import { WhiteButton } from "@/components/common/WhiteButton";

export const FilterTab = () => {
  return (
    <div className="flex justify-between tablet:items-start gap-2">
      <WhiteButton text={"지역 선택"} onClick={() => {}} />
      <WhiteButton text={"날짜 선택"} onClick={() => {}} />
    </div>
  );
};
