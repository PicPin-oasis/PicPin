import dayjs from "dayjs";

export const dateFormatter = (date: Date) => {
  const dateObject = dayjs(date);
  return dateObject.format("YYYY-MM-DD");
};
