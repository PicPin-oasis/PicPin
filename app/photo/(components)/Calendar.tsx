"use client";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarProps } from "@/types/types";

export const Calendar = ({ selectedDate, setSelectedDate }: CalendarProps) => {
  const parsedDate = selectedDate ? new Date(selectedDate) : null;
  const handleChangeDate = (date: Date) => {
    setSelectedDate(date ? date.toISOString().split("T")[0] : "");
  };
  return (
    <DatePicker
      dateFormat="yyyy.MM.dd"
      shouldCloseOnSelect
      minDate={new Date("1900-01-01")}
      maxDate={new Date()}
      selected={parsedDate}
      onChange={handleChangeDate}
      placeholderText="첫번째 사진의 날짜 정보를 가져옵니다."
      className="focus:outline-none text-sm w-full py-3 mt-2.5 focus:border-[1.5px] rounded-md border-solid border-[1px] border-primary-6 shadow "
    />
  );
};
