"use client";
import { ColorMarkerProps } from "@/types/types";
import { ColorPicker } from "./ColorPicker";

export const ColorMarker = ({
  pickedColorNumber,
  setPickedColorNumber,
}: ColorMarkerProps) => {
  return (
    <div className="flex gap-1">
      {[0, 1, 2, 3, 4, 5, 6].map((index) =>
        ColorPicker({ index, pickedColorNumber, setPickedColorNumber }),
      )}
    </div>
  );
};
