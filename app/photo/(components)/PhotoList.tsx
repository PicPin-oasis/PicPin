"use client";

import { useGetPhotos } from "@/apis/axios/photos/getPhotos";
import { Text } from "@/components/common/Text";
import { useAppSelector } from "@/redux/store";
import { PhotoCard } from "./PhotoCard";

export const PhotoList = () => {
  const { accessToken } = useAppSelector((state) => state.accessToken);
  const { data, isLoading, isError } = useGetPhotos(accessToken);

  if (isLoading) return <div>로딩 중... </div>;
  if (isError) return <div>잘못된 접근입니다 !</div>;

  const sortedArr = data?.sort((a, b) =>
    b.taken_photo_date.localeCompare(a.taken_photo_date),
  );
  console.log("data::", data);
  console.log("sortedArr:: ", sortedArr);

  return (
    <div className="grow w-full">
      {sortedArr?.length ? (
        <div className="flex flex-col gap-7 mt-5">
          {sortedArr.map((item) => (
            <div key={item.taken_photo_date}>
              <Text text={item.taken_photo_date} />
              <div className="grid grid-cols-4">
                {item.photo_cards.map((photo) => (
                  <PhotoCard
                    src={photo.expose_image_url}
                    key={photo.expose_image_url}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>사진이 없습니다 !</div>
      )}
    </div>
  );
};
