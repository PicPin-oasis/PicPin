"use client";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { dateFormatter } from "@/utils/dateFormatter";
import { PhotoUploaderProps } from "@/types/types";
import { Dispatch, SetStateAction } from "react";

interface Props {
  submitInfo: PhotoUploaderProps;
  setSubmitInfo: Dispatch<SetStateAction<PhotoUploaderProps>>;
  calendarPlaceholder: string;
}

export const Calendar = ({
  submitInfo,
  setSubmitInfo,
  calendarPlaceholder,
}: Props) => {
  const { date } = submitInfo;
  const parsedDate = date ? new Date(date) : null;

  const handleChangeDate = (date: Date) => {
    const changedDateFormat = dateFormatter(date);
    setSubmitInfo((prev) => ({ ...prev, date: changedDateFormat })); // '2023-11-08'
  };

  return (
    <DatePicker
      dateFormat="yyyy.MM.dd"
      shouldCloseOnSelect
      minDate={new Date("1900-01-01")}
      maxDate={new Date()}
      selected={parsedDate}
      onChange={handleChangeDate}
      placeholderText={calendarPlaceholder}
      className="box-border focus:outline-none text-sm w-full pl-2 py-3 mt-2.5 focus:border-[1.5px] rounded-md border-solid border-[1px] border-primary-6 shadow"
    />
  );
};
