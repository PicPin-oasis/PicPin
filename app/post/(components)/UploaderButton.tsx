"use client";

import { OrangeButton } from "@/components/common/OrangeButton";
import plusImg from "@assets/svg/plus.svg";
import { UploaderButtonProps } from "@/types/types";

export const UploaderButton = ({ handleOpenModal }: UploaderButtonProps) => {
  const classNames =
    "flex justify-center items-center w-48 gap-1 whitespace-nowrap hover:border-[1.5px]";
  return (
    <OrangeButton
      text={"포스트 등록하기"}
      onClick={handleOpenModal}
      image={plusImg}
      imageWidth={20}
      imageHeight={20}
      classNames={classNames}
    />
  );
};
