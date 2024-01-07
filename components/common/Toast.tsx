"use client";

import Image from "next/image";
import Text from "./Text";
import checkIcon from "@assets/svg/check.svg";
interface Props {
  text: string;
}
const Toast = ({ text }: Props) => {
  return (
    <div className="absolute w-80 pl-4 py-2 flex gap-2 bg-primary-6 left-1/2 -translate-x-1/2 bottom-10">
      <Image src={checkIcon} alt="checkIcon" />
      <Text text={text} classNames="text-white" />
    </div>
  );
};
export default Toast;
