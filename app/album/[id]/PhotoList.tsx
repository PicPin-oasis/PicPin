"use client";

import Text from "@/components/common/Text";
import { PhotosProps } from "@/apis/axios/album/getAlbumDetail";
import PhotoCard from "@/app/photo/(components)/PhotoCard";
import Uploader from "@/components/common/Uploader";

interface Props {
  photos: PhotosProps[];
  handleTogglePhotoForm: () => void;
}

const PhotoList = ({ photos, handleTogglePhotoForm }: Props) => {
  return (
    <div className="h-full w-full mt-5">
      <div className="w-full grid grid-cols-3 tablet:grid-cols-5 laptop:grid-cols-6 place-items-center gap-y-1">
        {photos.map(({ id, imageUrl }) => (
          <PhotoCard src={imageUrl} key={id} id={id.toString()} />
        ))}
        <div onClick={handleTogglePhotoForm} className="justify-items-start	">
          <Uploader text="사진 추가" classNames="border-2" />
        </div>
      </div>
    </div>
  );
};

export default PhotoList;
