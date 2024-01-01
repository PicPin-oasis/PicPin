"use client";

import WhiteButton from "@/components/common/WhiteButton";

interface Props {}
const ActionButtons = ({}: Props) => {
  return (
    <div className="flex gap-1">
      <WhiteButton
        text="공유"
        onClick={() => {}}
        classNames="w-fit px-2 text-xs rounded-full h-fit "
      />
      <WhiteButton
        text="수정"
        onClick={() => {}}
        classNames="w-fit px-2 text-xs rounded-full h-fit"
      />
      <WhiteButton
        text="삭제"
        onClick={() => {}}
        classNames="w-fit px-2 text-xs rounded-full h-fit"
      />
    </div>
  );
};

export default ActionButtons;
