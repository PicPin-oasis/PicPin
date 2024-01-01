"use client";

import { usePathname } from "next/navigation";
import Error from "@/components/common/Error";
import { useGetAlbumDetail } from "@/apis/axios/album/getAlbumDetail";
import Text from "@/components/common/Text";
import InfoText from "../(components)/InfoText";
import ActionButtons from "./ActionButtons";
import Uploader from "@/components/common/Uploader";
import { useState } from "react";
import PhotoUploader from "@/app/photo/(components)/PhotoUploader";

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
  console.log(data);
  const { title, id, startDate, endDate, photoCount, photos } = data;
  return (
    <div className="w-full h-full flex flex-col items-center gap-1">
      {isFormOpen ? (
        <PhotoUploader handleTogglePhotoForm={handleTogglePhotoForm} />
      ) : (
        <div className="w-full box-border px-4 flex flex-col gap-10">
          <div className="flex justify-between">
            <div className="flex flex-col gap-2">
              {startDate && endDate && (
                <Text text={`${startDate} ~ ${endDate}`} />
              )}
              <Text text={title} classNames="text-lg" />
              <InfoText
                count={photoCount}
                text="의 사진이 있어요."
                fontSize="text-sm"
              />
            </div>
            <ActionButtons />
          </div>
          {photoCount ? (
            <div>포토 목록 추가 예정....</div>
          ) : (
            <div
              onClick={handleTogglePhotoForm}
              className="w-full justify-items-start	"
            >
              <Uploader text="사진 추가" classNames="border-2" />
            </div>
          )}
        </div>
      )}{" "}
    </div>
  );
}

export default AlbumDetailPageLayout;
