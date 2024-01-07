"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Error from "@/components/common/Error";
import PhotoUploader from "@/app/photo/(components)/PhotoUploader";
import { useGetAlbumDetail } from "@/apis/axios/album/getAlbumDetail";
import AlbumDetail from "./AlbumDetail";

function AlbumDetailPageLayout() {
  const albumId = parseInt(usePathname().split("/")[2]);
  const { data, isLoading, isError } = useGetAlbumDetail(albumId);
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const handleTogglePhotoForm = () => {
    setIsFormOpen(!isFormOpen);
  };
  if (!data) {
    return <Error text="사진 정보가 없습니다." />;
  }
  return (
    <div className="w-full h-full flex flex-col items-center gap-1">
      {isFormOpen ? (
        <PhotoUploader
          handleTogglePhotoForm={handleTogglePhotoForm}
          defalutAlbumTitle={data.title}
          defaultAlbumId={albumId}
        />
      ) : (
        <AlbumDetail
          data={data}
          albumId={albumId}
          handleTogglePhotoForm={handleTogglePhotoForm}
        />
      )}
    </div>
  );
}

export default AlbumDetailPageLayout;
