"use client";

import PhotoCard from "../../(components)/PhotoCard";
import { useGetPhotos } from "@/apis/axios/photos/getPhotos";

export const PhotoList = () => {
  const { data, isLoading, isError } = useGetPhotos();
  return (
    <div className="w-full flex overflow-x-auto gap-2 py-2">
      {data &&
        data.map((item) =>
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
