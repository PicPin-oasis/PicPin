"use client";

import Text from "@/components/common/Text";
import AlbumCard from "./AlbumCard";
import { AlbumProps } from "@/types/types";

interface Props {
  data: AlbumProps[];
}

const AlbumList = ({ data }: Props) => {
  // 앨범 미선택 추가 예정
  // data = data.unshift({ title: "", id: "", cover_image_url: "" });
  return (
    <div className="h-[670px] w-full overflow-y-auto">
      <div className="flex flex-col gap-7 mt-5">
        <div className="w-full grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 place-items-center">
          {data.map((item) => (
            <div key={item.title} className="relative">
              <Text
                text={item.title}
                classNames="w-4/5 py-1 absolute left-1/2 -translate-x-1/2 bottom-3 bg-gray-50 rounded-md justify-center"
              />
              <AlbumCard
                src={item.cover_image_url}
                key={item.title}
                id={item.id.toString()}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlbumList;
