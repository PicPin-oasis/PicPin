"use client";

import { WhiteButton } from "@/components/common/WhiteButton";
import plusImg from "@assets/svg/plus.svg";

export const UploaderButton = () => {
  const classNames =
    "flex justify-center items-center w-48 gap-1 whitespace-nowrap hover:border-[1.5px]";
  return (
    <WhiteButton
      text={"포스트 등록하기"}
      image={plusImg}
      imageWidth={20}
      imageHeight={20}
      classNames={classNames}
    />
  );
};
