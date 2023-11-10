"use client";

import { PreviewImagesProps } from "@/types/types";
import Image from "next/image";
import cancelIcon from "@assets/svg/cancel.svg";

export const PreviewImages = ({
  previewImage,
  handleDeleteImage,
}: PreviewImagesProps) => {
  return (
    <div className="flex gap-2 w-full overflow-x-auto">
      {previewImage.map((url) => (
        <div key={url} className="relative">
          <Image
            src={url}
            alt="previewImg"
            width={113}
            height={121}
            priority
            className="object-cover rounded-md"
          />
          <Image
            src={cancelIcon}
            onClick={() => handleDeleteImage(url)}
            alt="cancelIcon"
            className="absolute z-30 top-1 right-1 cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
};
