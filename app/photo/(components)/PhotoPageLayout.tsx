"use client";

import { useState } from "react";
import PhotoList from "./PhotoList";
import FilterTab from "./FilterTab";
import UploaderButton from "./UploaderButton";
import PhotoUploader from "./PhotoUploader";

const PhotoPageLayout = () => {
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const handleTogglePhotoForm = () => {
    setIsFormOpen(!isFormOpen);
  };
  return (
    <div className="relative w-full flex flex-col justify-start items-center gap-1">
      {isFormOpen ? (
        <PhotoUploader handleTogglePhotoForm={handleTogglePhotoForm} />
      ) : (
        <div className="w-full box-border px-4 ">
          <div className="w-full flex justify-between pt-4 ">
            <FilterTab />
            {/* <WhiteButton
              text={"지역 선택"}
              onClick={() => {}}
              classNames="rounded-md"
            />
            <WhiteButton
              text={"날짜 선택"}
              onClick={() => {}}
              classNames="rounded-md"
            /> */}
            <UploaderButton onClick={handleTogglePhotoForm} />
          </div>
          <PhotoList />
        </div>
      )}
    </div>
  );
};
export default PhotoPageLayout;
