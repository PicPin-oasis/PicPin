"use client";

import { ColorPickerProps } from "@/types/types";

export const ColorPicker = ({
  index,
  pickedColorNumber,
  setPickedColorNumber,
}: ColorPickerProps) => {
  const handlePickedColorNumber = (index: number) => {
    if (pickedColorNumber !== index + 1) {
      setPickedColorNumber(index + 1);
    }
  };
  return (
    <button
      type="button"
      key={index}
      onClick={() => handlePickedColorNumber(index)}
      className={`border-none opacity-30 rounded-md focus:opacity-100 w-14 h-14 cursor-pointer z-20 bg-marks-${index}`}
    />
  );
};
