"use client";
import { MARK_COLORS } from "@/constants/colors";
import { ColorMarkerProps } from "@/types/types";
import { colorPicker } from "./ColorPicker";

export const ColorMarker = ({
  pickedColorNumber,
  setPickedColorNumber,
}: ColorMarkerProps) => {
  return (
    <div className="flex gap-1">
      {MARK_COLORS.map((color, index) =>
        colorPicker({ color, index, pickedColorNumber, setPickedColorNumber }),
      )}
    </div>
  );
};
