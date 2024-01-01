"use client";
import addPhoto from "@assets/svg/photo_add.svg";
import Image from "next/image";
import Text from "./Text";
interface Props {
  text: string;
  disabled?: boolean;
  classNames?: string;
}
const Uploader = ({ text, disabled, classNames }: Props) => {
  return (
    <div
      className={`flex flex-col items-center justify-center text-sm text-center text-primary-6 w-24 h-24 px-1 py-1 rounded-lg border border-solid border-primary-6 cursor-pointer bg-white
    ${disabled && "cursor-not-allowed"} ${classNames}`}
    >
      <Image src={addPhoto} alt={addPhoto} width={30} height={30} priority />
      <Text text={text} classNames="mt-3" />
    </div>
  );
};

export default Uploader;
