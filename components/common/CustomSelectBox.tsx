"use client";

import { useGetAlbumList } from "@/apis/axios/album/getAlbumList";
import { useAppSelector } from "@/redux/store";
import { AlbumProps } from "@/types/types";
import { useState } from "react";

interface Props {
  albumList: string[];
}

export const CustomSelectBox = ({ albumList }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("앨범 선택");

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (albumTitle: string) => () => {
    setSelectedOption(albumTitle);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full mt-2.5">
      <div
        onClick={toggling}
        className=" pl-2 py-3 border-[1px] bg-white border-primary-6 shadow focus:outline-none focus:border-[1.5px] rounded-md border-solid cursor-pointer"
      >
        {selectedOption}
      </div>
      {isOpen && (
        <div className="absolute w-full bg-white border-[1px] border-solid border-primary-6 rounded-md shadow-lg z-10 mt-1">
          {albumList.length ? (
            albumList.map((albumTitle: string) => (
              <div
                key={albumTitle}
                className="pl-2 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={onOptionClicked(albumTitle)}
              >
                {albumTitle}
              </div>
            ))
          ) : (
            <div className="pl-2 py-2">앨범이 없습니다</div>
          )}
        </div>
      )}
    </div>
  );
};
