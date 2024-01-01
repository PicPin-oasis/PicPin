"use client";

import { useState } from "react";

interface Props {
  data: Array<{ title: string; payload: any }>;
  initialTitie?: string;
  emptyTitle?: string;
  onChange?: (target: any) => void;
}

export const SelectBox = ({
  data,
  initialTitie,
  emptyTitle,
  onChange,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selIndex, setSelIndex] = useState(-1);
  const [displayTitle, setDisplayTitle] = useState<string>(
    data.length ? initialTitie ?? "" : emptyTitle ?? "",
  );

  const toggling = () => {
    if (!data.length) return;
    setIsOpen(!isOpen);
  };

  const onOptionClicked = (index: number) => () => {
    if (selIndex === index) return;
    if (onChange) {
      setSelIndex(index);
      setDisplayTitle(data[index].title);
      onChange(data[index].payload);
      toggling();
    }
  };

  return (
    <div className="relative w-full mt-2.5">
      <div
        onClick={onChange && toggling}
        className=" pl-2 py-3 border-[1px] bg-white border-primary-6 shadow rounded-md border-solid cursor-pointer"
      >
        {displayTitle}
      </div>
      {isOpen && (
        <div className="absolute w-full bg-white border-[1px] border-solid border-primary-6 rounded-md shadow-lg z-10 mt-1">
          {data.map((item, index) => (
            <div
              key={item.title}
              className="pl-2 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={onOptionClicked(index)}
            >
              {item.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
