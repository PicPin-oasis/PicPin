"use client";

import { PostList } from "./(components)/PhotoList";
import { FilterTab } from "./(components)/FilterTab";
import { UploaderButton } from "./(components)/UploaderButton";

const PhotoPageLayout = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4">
      <div className="w-full flex justify-between">
        <FilterTab />
        <UploaderButton />
      </div>
      <PostList />
    </div>
  );
};
export default PhotoPageLayout;
