"use client";
import { PhotoDetailProps } from "@/apis/axios/photos/getPhotoDetail";
import { Error } from "@/components/common/Error";
import { Text } from "@/components/common/Text";
import { WhiteButton } from "@/components/common/WhiteButton";
import Image from "next/image";
import { useState } from "react";

const PhotoDetail = ({ data }: { data: PhotoDetailProps }) => {
  const [toggle, setToggle] = useState(true);
  if (!data) {
    return <Error text="사진 정보가 없습니다." />;
  }
  const { place_name, memo, expose_image_url, taken_photo_date } = data;
  const date = taken_photo_date.replaceAll("-", ".") ?? "날짜 정보가 없습니다.";
  const handleClickMemo = () => setToggle(!toggle);
  return (
    <div className="w-full h-full">
      <div className="w-full flex box-border px-5 justify-between">
        <div className="flex flex-col gap-1">
          <Text text={date} classNames="text-sm" />
          <Text
            text={place_name ?? "사진 정보가 없습니다"}
            classNames="text-lg"
          />
        </div>
        <div className="flex gap-1">
          <WhiteButton
            text="수정"
            classNames="w-9 h-fit text-xs rounded-full"
          />
          <WhiteButton
            text="삭제"
            classNames="w-9 h-fit text-xs rounded-full"
          />
        </div>
      </div>
      <div className="w-full flex flex-col place-items-center relative h-3/4 bg-slate-300">
        <Image
          src={expose_image_url ?? ""}
          alt={expose_image_url ?? "사진 정보가 없습니다"}
          className="object-contain"
          fill
          priority
        />
        {memo && (
          <div
            className={`absolute w-10/12 bottom-3 px-3 py-2 bg-grayscale-5 rounded-md cursor-pointer ${
              toggle && "truncate h-5"
            } `}
            onClick={handleClickMemo}
          >
            {memo}
          </div>
        )}
      </div>
    </div>
  );
};
export default PhotoDetail;
