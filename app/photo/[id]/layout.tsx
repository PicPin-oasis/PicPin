"use client";

import { usePathname } from "next/navigation";
import { PhotoDetail } from "./(components)/PhotoDetail";
import { PhotoList } from "./(components)/PhotoList";
import PhotoUploader from "../(components)/PhotoUploader";
import { useAppSelector } from "@/redux/store";
import { useGetPhotoDetail } from "@/apis/axios/photos/getPhotoDetail";
import Error from "@/components/common/Error";

function PhotoDetailPageLayout() {
  const id = parseInt(usePathname().split("/")[2]);
  const { data, isLoading, isError } = useGetPhotoDetail(id);
  const { editStatus } = useAppSelector((state) => state.editStatus);

  if (!data) {
    return <Error text="사진 정보가 없습니다." />;
  }

  return (
    <>
      {editStatus ? (
        <PhotoUploader editData={data} />
      ) : (
        <div className="w-full h-full flex flex-col items-center gap-1">
          <PhotoDetail data={data} />
          <PhotoList />
        </div>
      )}
    </>
  );
}

export default PhotoDetailPageLayout;
