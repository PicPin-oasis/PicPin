"use client";

import Loading from "@/components/common/Loading";
import Error from "@/components/common/Error";
import PhotoCard from "../../(components)/PhotoCard";
import { useGetPhotos } from "@/apis/axios/photos/getPhotos";

export const PhotoList = () => {
  const { data, isLoading, isError } = useGetPhotos();

  if (isLoading) return <Loading />;
  if (isError || !data)
    return <Error text="잘못된 접근입니다. 다시 시도해주세요." />;

  return (
    <div className="w-full flex overflow-x-auto gap-2 py-2">
      {data.map((item) =>
        item.photo_cards.map((photo) => (
          <PhotoCard
            src={photo.expose_image_url}
            key={photo.id}
            id={photo.id.toString()}
          />
        )),
      )}
    </div>
  );
};
