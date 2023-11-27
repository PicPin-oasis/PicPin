"use client";

import { PreviewImagesProps } from "@/types/types";
import Image from "next/image";
import cancelIcon from "@assets/svg/cancel.svg";

export const PreviewImages = ({
  filesAndPreviews,
  handleDeleteImage,
}: PreviewImagesProps) => {
  return (
    <div className="flex gap-2 w-full overflow-x-auto">
      {filesAndPreviews.map((item) => (
        <div key={item.previewUrl} className="relative">
          <Image
            src={item.previewUrl}
            alt="previewImg"
            width={106}
            height={106}
            priority
            className="object-cover rounded-md"
          />
          <Image
            src={cancelIcon}
            onClick={() => handleDeleteImage(item)}
            alt="cancelIcon"
            className="absolute z-30 top-1 right-1 cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
};
