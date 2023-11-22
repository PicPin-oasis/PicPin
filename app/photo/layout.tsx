"use client";

import { PhotoList } from "./(components)/PhotoList";
import { FilterTab } from "./(components)/FilterTab";
import { UploaderButton } from "./(components)/UploaderButton";
import { useState } from "react";
import PhotoForm from "./(components)/PhotoForm";

const PhotoPageLayout = () => {
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const handleOpenPhotoForm = () => {
    setIsFormOpen(true);
  };
  return (
    <div className="w-11/12 h-full flex flex-col justify-center items-center gap-4 px-2">
      {isFormOpen ? (
        <PhotoForm />
      ) : (
        <>
          <div className="w-full flex justify-between mobile:justify-around">
            <FilterTab />
            <UploaderButton onClick={handleOpenPhotoForm} />
          </div>
          <PhotoList />
        </>
      )}
    </div>
  );
};
export default PhotoPageLayout;
