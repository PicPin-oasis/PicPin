"use client";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarProps } from "@/types/types";

export const Calendar = ({ selectedDate, setSelectedDate }: CalendarProps) => {
  return (
    <DatePicker
      dateFormat="yyyy.MM.dd" // 날짜 형태
      shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
      minDate={new Date("1900-01-01")} // minDate 이전 날짜 선택 불가
      maxDate={new Date()} // maxDate 이후 날짜 선택 불가
      selected={selectedDate}
      onChange={setSelectedDate}
      className="focus:outline-none text-sm w-2/3 px-2 py-1 focus:border-[1.5px] rounded-md border-solid border-[1px] border-primary-6 shadow "
    />
  );
};
