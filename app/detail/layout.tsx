"use client";
import { useGetPhotoDetail } from "@/apis/axios/photos/getPhotoDetail";
import { Text } from "@/components/common/Text";
import { WhiteButton } from "@/components/common/WhiteButton";
import Image from "next/image";

const DetailPageLayout = () => {
  const { data, isLoading, isError } = useGetPhotoDetail(50);
  const date = data
    ? data.taken_photo_date.replaceAll("-", ".")
    : "날짜 정보가 없습니다.";
  return (
    <div className="w-full h-full">
      <div className="w-full flex box-border px-5 justify-between">
        <div className="flex flex-col gap-1">
          <b className="text-sm">{date}</b>
          <Text
            text={data ? data.place_name : "사진 정보가 없습니다"}
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
          src={data ? data.expose_image_url : ""}
          alt={data ? data.expose_image_url : "사진 정보가 없습니다"}
          fill
          priority
          objectFit="contain"
        />
        {data?.memo ? (
          <div className="absolute w-10/12 bottom-3 px-3 py-2 bg-grayscale-5 rounded-md">
            {data.memo}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
export default DetailPageLayout;
