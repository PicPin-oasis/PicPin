"use client";

import WhiteButton from "@/components/common/WhiteButton";
import { useRouter } from "next/navigation";

const FilterTab = () => {
  const route = useRouter();
  return (
    <div className="w-full absolute top-4 z-10 flex gap-2 items-center justify-center">
      <WhiteButton
        text={"지역 선택"}
        onClick={() => {
          route.push("/map/detail");
        }}
        classNames="rounded-md"
      />
      <WhiteButton
        text={"날짜 선택"}
        onClick={() => {}}
        classNames="rounded-md"
      />
      <WhiteButton
        text={"앨범 선택"}
        onClick={() => {}}
        classNames="rounded-md"
      />
    </div>
  );
};
export default FilterTab;
