"use client";

import { CustomSelectBoxProps, AlbumProps } from "@/types/types";
import { useState } from "react";

export const CustomSelectBox = ({
  albumList,
  setAlbumId,
}: CustomSelectBoxProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("앨범 선택");

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (album: AlbumProps) => () => {
    setSelectedOption(album.title);
    setAlbumId(album.id);
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
            albumList.map((album: AlbumProps) => (
              <div
                key={album.title}
                className="pl-2 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={onOptionClicked(album)}
              >
                {album.title}
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
