"use client";

import WhiteButton from "@/components/common/WhiteButton";
import addPhoto from "@assets/svg/photo_add.svg";

interface Props {
  onClick: () => void;
}
const UploaderButton = ({ onClick }: Props) => {
  return (
    <WhiteButton
      text={"사진 등록"}
      image={addPhoto}
      imageWidth={20}
      imageHeight={20}
      classNames="flex justify-center items-center gap-1 whitespace-nowrap rounded-md"
      onClick={onClick}
    />
  );
};

export default UploaderButton;
