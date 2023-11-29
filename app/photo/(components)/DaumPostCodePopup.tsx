"use client";

import { DaumPostCodePopupProps } from "@/types/types";
import { useRef, useEffect } from "react";
import DaumPostcode, { Address } from "react-daum-postcode";

export const DaumPostCodePopup = ({
  setAddress,
  setIsPopupOpen,
}: DaumPostCodePopupProps) => {
  const popupRef = useRef<HTMLDivElement>(null);
  const handleComplete = (data: Address) => {
    setAddress(data.address);
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
