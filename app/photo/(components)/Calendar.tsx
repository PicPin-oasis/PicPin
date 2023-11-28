"use client";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarProps } from "@/types/types";
import { useEffect } from "react";
import { dateFormatter } from "@/utils/dateFormatter";

export const Calendar = ({
  imageInfo,
  selectedDate,
  setSelectedDate,
}: CalendarProps) => {
  const parsedDate = selectedDate ? new Date(selectedDate) : null;
  const handleChangeDate = (date: Date) => {
    const changedDateFormat = dateFormatter(date);
    setSelectedDate(changedDateFormat); // '2023-11-08'
  };
  useEffect(() => {
    // imageInfo.date가 유효하고, selectedDate가 null인 경우
    if (imageInfo.date && !selectedDate) {
      setSelectedDate(imageInfo.date);
    }
  }, [imageInfo, selectedDate, setSelectedDate]);
  return (
    <DatePicker
      dateFormat="yyyy.MM.dd"
      shouldCloseOnSelect
      minDate={new Date("1900-01-01")}
      maxDate={new Date()}
      selected={parsedDate}
      onChange={handleChangeDate}
      placeholderText="첫번째 사진의 날짜 정보를 가져옵니다."
      className="focus:outline-none text-sm w-full pl-2 py-3 mt-2.5 focus:border-[1.5px] rounded-md border-solid border-[1px] border-primary-6 shadow "
    />
  );
};
