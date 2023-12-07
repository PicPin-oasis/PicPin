"use client";

import { PhotoUploaderProps } from "@/types/types";
import { useRef, useEffect, Dispatch, SetStateAction } from "react";
import DaumPostcode, { Address } from "react-daum-postcode";

export interface Props {
  setSubmitInfo: Dispatch<SetStateAction<PhotoUploaderProps>>;
  setIsPopupOpen: Dispatch<SetStateAction<boolean>>;
}

export const DaumPostCodePopup = ({ setSubmitInfo, setIsPopupOpen }: Props) => {
  const popupRef = useRef<HTMLDivElement>(null);
  const handleComplete = (data: Address) => {
    setSubmitInfo((prev) => ({ ...prev, address: data.address }));
    setIsPopupOpen(false);
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      setIsPopupOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsPopupOpen]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div ref={popupRef} className="p-4 bg-white">
        <DaumPostcode
          onComplete={handleComplete}
          autoClose
          className="w-full max-w-sm"
        />
      </div>
    </div>
  );
};
