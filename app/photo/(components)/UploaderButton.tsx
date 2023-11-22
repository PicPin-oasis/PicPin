"use client";

import { WhiteButton } from "@/components/common/WhiteButton";
import addPhoto from "@assets/svg/photo_add.svg";
import { UploaderButtonProps } from "@/types/types";

export const UploaderButton = ({ onClick }: UploaderButtonProps) => {
  const classNames = "flex justify-center items-center gap-1 whitespace-nowrap";
  return (
    <WhiteButton
      text={"사진 등록"}
      image={addPhoto}
      imageWidth={20}
      imageHeight={20}
      classNames={classNames}
      onClick={onClick}
    />
  );
};
