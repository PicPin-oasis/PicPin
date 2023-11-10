"use client";

import { useRef, useState, useEffect } from "react";
import plusImg from "@assets/svg/plus.svg";
import { ImageUploaderProps } from "@/types/types";
import Image from "next/image";
import { PreviewImages } from "./PreviewImages";
import { selectImage, deleteImage } from "@/utils/handleImages";

export const ImageUploader = ({ register }: ImageUploaderProps) => {
  const [previewImage, setPreviewImage] = useState<string[]>([]);
  const fileInputRef = useRef(null);
  const handleSelectImage = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    try {
      const imageInformation = await selectImage({
        event,
        previewImage,
        setPreviewImage,
      });
    } catch (error) {
      console.error(error);
    }
  };
  const handleDeleteImage = (url: string) => {
    deleteImage({ url, setPreviewImage });
  };

  useEffect(() => {
    return () => {
      previewImage.map((url) => URL.revokeObjectURL(url));
    };
  }, []);

  return (
    <div className="flex gap-2">
      <label htmlFor="image-upload">
        <div className="flex flex-col items-center justify-center text-sm text-center text-primary-6 w-24 h-24 px-2 py-1 pt-5 rounded-md border-solid border-[1px] border-primary-6 focus:border-[1.5px] cursor-pointer">
          <Image src={plusImg} alt={plusImg} width={63} height={63} priority />
          <p className="my-2">사진 추가하기</p>
        </div>
      </label>
      <input
        {...register("images")}
        type="file"
        accept="image/*"
        className="hidden"
        id="image-upload" // id를 추가하여 label과 연결
        ref={fileInputRef} // input에 ref 연결
        onChange={handleSelectImage}
        disabled={previewImage.length >= 10} // 최대 10장
      />
      <PreviewImages
        previewImage={previewImage}
        handleDeleteImage={handleDeleteImage}
      />
    </div>
  );
};