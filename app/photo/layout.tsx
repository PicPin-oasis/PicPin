"use client";

import { PhotoList } from "./(components)/PhotoList";
import { FilterTab } from "./(components)/FilterTab";
import { UploaderButton } from "./(components)/UploaderButton";
import { useState } from "react";
import PhotoUploader from "./(components)/PhotoUploader";
import { WhiteButton } from "@/components/common/WhiteButton";

const PhotoPageLayout = () => {
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const handleOpenPhotoForm = () => {
    setIsFormOpen(true);
  };
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-1">
      {isFormOpen ? (
        <PhotoUploader />
      ) : (
        <div className="w-full box-border px-2 ">
          <div className="w-full flex justify-between pt-4 ">
            {/* <FilterTab /> */}
            <WhiteButton text={"지역 선택"} onClick={() => {}} />
            <WhiteButton text={"날짜 선택"} onClick={() => {}} />
            <UploaderButton onClick={handleOpenPhotoForm} />
          </div>
          <PhotoList />
        </div>
      )}
    </div>
  );
};
export default PhotoPageLayout;
