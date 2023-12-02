"use client";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { dateFormatter } from "@/utils/dateFormatter";
import { ChangeSubmitInfoProps, PhotoUploaderProps } from "@/types/types";

interface Props {
  submitInfo: PhotoUploaderProps;
  handleChangeSubmitInfo: ({
    targetKey,
    changeValue,
  }: ChangeSubmitInfoProps) => void;
}

export const Calendar = ({ submitInfo, handleChangeSubmitInfo }: Props) => {
  const { date } = submitInfo;
  const parsedDate = date ? new Date(date) : null;

  const handleChangeDate = (date: Date) => {
    const changedDateFormat = dateFormatter(date);
    handleChangeSubmitInfo({
      targetKey: "date",
      changeValue: changedDateFormat,
    }); // '2023-11-08'
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
      className="box-border focus:outline-none text-sm w-full pl-2 py-3 mt-2.5 focus:border-[1.5px] rounded-md border-solid border-[1px] border-primary-6 shadow "
    />
  );
};
