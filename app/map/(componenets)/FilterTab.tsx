"use client";

import { WhiteButton } from "@/components/common/WhiteButton";

const FilterTab = () => {
  return (
    <div className="w-full absolute top-4 z-10 flex gap-2 items-center justify-center">
      <WhiteButton text={"지역 선택"} onClick={() => {}} />
      <WhiteButton text={"날짜 선택"} onClick={() => {}} />
      <WhiteButton text={"앨범 선택"} onClick={() => {}} />
    </div>
  );
};
export default FilterTab;
