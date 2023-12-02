"use client";

import { WhiteButton } from "@/components/common/WhiteButton";
import addPhoto from "@assets/svg/photo_add.svg";

interface Props {
  onClick: () => void;
}
export const UploaderButton = ({ onClick }: Props) => {
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
