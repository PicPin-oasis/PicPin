"use client";

import { useGetPhotos } from "@/apis/axios/photos/getPhotos";
import { Text } from "@/components/common/Text";
import { PhotoCard } from "./PhotoCard";
import { Loading } from "@/components/common/Loading";
import { Error } from "@/components/common/Error";

export const PhotoList = () => {
  const { data, isLoading, isError } = useGetPhotos();
  const sortedArr = data?.sort((a, b) =>
    b.taken_photo_date.localeCompare(a.taken_photo_date),
  );
  if (isLoading) return <Loading />;
  if (isError) return <Error text="잘못된 접근입니다. 다시 시도해주세요." />;
  if (!data?.length) return <div>등록된 사진이 없습니다.</div>;
  return (
    <div className="grow w-full">
      <div className="flex flex-col gap-7 mt-5">
        {sortedArr?.map((item) => (
          <div key={item.taken_photo_date}>
            <Text text={item.taken_photo_date} />
            <div className="w-full grid grid-cols-4 place-items-center">
              {item.photo_cards.map((photo) => (
                <PhotoCard
                  src={photo.expose_image_url}
                  key={photo.id}
                  id={photo.id.toString()}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
