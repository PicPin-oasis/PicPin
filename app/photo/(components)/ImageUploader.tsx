"use client";

import { useRef, useEffect, SetStateAction, Dispatch } from "react";
import addPhoto from "@assets/svg/photo_add.svg";
import { ImageInfoProps, FileWithPreview } from "@/types/types";
import Image from "next/image";
import { PreviewImages } from "./PreviewImages";
import { selectImage, deleteImage } from "@/utils/handleImages";
import Text from "@/components/common/Text";
import Uploader from "@/components/common/Uploader";

export interface Props {
  setImageInfo: Dispatch<SetStateAction<ImageInfoProps>>;
  filesAndPreviews: FileWithPreview[];
  setFilesAndPreviews: Dispatch<SetStateAction<FileWithPreview[]>>;
  maxSize: number;
  text: string;
}

const ImageUploader = ({
  setImageInfo,
  filesAndPreviews,
  setFilesAndPreviews,
  maxSize,
  text,
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
  const disabled = filesAndPreviews.length >= maxSize;
  return (
    <div className="flex gap-2 mt-2.5">
      <label htmlFor="image-upload">
        <Uploader text="사진 선택" disabled={disabled} />
      </label>
      <input
        type="file"
        accept="image/*"
        className="hidden"
        id="image-upload" // id를 추가하여 label과 연결
        ref={fileInputRef} // input에 ref 연결
        onChange={handleSelectImage}
        disabled={disabled} // 최대 사진 갯수
      />
      <PreviewImages
        filesAndPreviews={filesAndPreviews}
        handleDeleteImage={handleDeleteImage}
      />
    </div>
  );
};

export default ImageUploader;
