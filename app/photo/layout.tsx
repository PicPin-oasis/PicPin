"use client";

import { PhotoList } from "./(components)/PhotoList";
import { FilterTab } from "./(components)/FilterTab";
import { UploaderButton } from "./(components)/UploaderButton";
import { useState } from "react";
import PhotoUploader from "./(components)/PhotoUploader";

const PhotoPageLayout = () => {
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const handleOpenPhotoForm = () => {
    setIsFormOpen(true);
  };
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4">
      {isFormOpen ? (
        <PhotoUploader />
      ) : (
        <>
          <div className="flex justify-between mobile:justify-around mobile:gap-2 ">
            <div className="flex justify-between items-start gap-2">
              <FilterTab />
            </div>
            <UploaderButton onClick={handleOpenPhotoForm} />
          </div>
          <PhotoList />
        </>
      )}
    </div>
  );
};
export default PhotoPageLayout;
