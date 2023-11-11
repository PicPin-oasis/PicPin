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
      placeholderText="2000.00.00"
      className="focus:outline-none text-sm w-2/3 px-2 py-1 focus:border-[1.5px] rounded-md border-solid border-[1px] border-primary-6 shadow "
    />
  );
};
