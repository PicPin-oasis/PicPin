"use client";

import { PhotoList } from "./PhotoList";
import { FilterTab } from "./FilterTab";
import { UploaderButton } from "./UploaderButton";
import { useState } from "react";
import PhotoUploader from "./PhotoUploader";
import { WhiteButton } from "@/components/common/WhiteButton";

const PhotoPageLayout = () => {
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const handleTogglePhotoForm = () => {
    setIsFormOpen(!isFormOpen);
  };
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-1">
      {isFormOpen ? (
        <PhotoUploader handleTogglePhotoForm={handleTogglePhotoForm} />
      ) : (
        <div className="w-full box-border px-2 ">
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
