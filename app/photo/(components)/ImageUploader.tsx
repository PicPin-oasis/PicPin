"use client";

import { useRef, useEffect, SetStateAction, Dispatch } from "react";
import addPhoto from "@assets/svg/photo_add.svg";
import { ImageInfoProps, FileWithPreview } from "@/types/types";
import Image from "next/image";
import { PreviewImages } from "./PreviewImages";
import { selectImage, deleteImage } from "@/utils/handleImages";

export interface Props {
  setImageInfo: Dispatch<SetStateAction<ImageInfoProps>>;
  filesAndPreviews: FileWithPreview[];
  setFilesAndPreviews: Dispatch<SetStateAction<FileWithPreview[]>>;
}

export const ImageUploader = ({
  setImageInfo,
  filesAndPreviews,
  setFilesAndPreviews,
}: Props) => {
  const fileInputRef = useRef(null);
  const handleSelectImage = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    await selectImage({
      event,
      setImageInfo,
      filesAndPreviews,
      setFilesAndPreviews,
    }).catch((err) => console.log(err));
  };
  const handleDeleteImage = (target: FileWithPreview) => {
    deleteImage({ target, setFilesAndPreviews });
  };

  useEffect(() => {
    return () => {
      filesAndPreviews.map((item) => URL.revokeObjectURL(item.previewUrl));
    };
  }, []);

  return (
    <div className="flex gap-2 mt-2.5">
      <label htmlFor="image-upload">
        <div className="flex flex-col items-center justify-center text-sm text-center text-primary-6 w-24 h-24 px-1 py-1 rounded-lg border-solid border-[1px] border-primary-6 cursor-pointer bg-white">
          <Image
            src={addPhoto}
            alt={addPhoto}
            width={30}
            height={30}
            priority
          />
          <b className="mt-3">사진 선택</b>
        </div>
      </label>
      <input
        type="file"
        accept="image/*"
        className="hidden"
        id="image-upload" // id를 추가하여 label과 연결
        ref={fileInputRef} // input에 ref 연결
        onChange={handleSelectImage}
        disabled={filesAndPreviews.length >= 10} // 최대 10장
      />
      <PreviewImages
        filesAndPreviews={filesAndPreviews}
        handleDeleteImage={handleDeleteImage}
      />
    </div>
  );
};
