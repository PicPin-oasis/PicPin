"use client";

import Text from "@/components/common/Text";
import AlbumCard from "./AlbumCard";
import { AlbumProps } from "@/types/types";

interface Props {
  data: AlbumProps[];
}

const AlbumList = ({ data }: Props) => {
  return (
    <div className="h-full w-full">
      <div className="w-full h-full grid grid-cols-2 gap-2 tablet:grid-cols-3 laptop:grid-cols-5 ">
        {data.map(({ title, cover_image_url, id }) => (
          <div
            key={title}
            className="relative h-[150px] flex flex-col justify-center items-center"
          >
            <Text
              text={title}
              classNames="absolute w-[130px] py-1 bottom-2 bg-gray-50 rounded-md justify-center"
            />
            <AlbumCard src={cover_image_url} key={title} id={id.toString()} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumList;
