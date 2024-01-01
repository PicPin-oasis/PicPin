"use client";

import Text from "@/components/common/Text";

interface Props {
  count: number;
  text: string;
  fontSize?: string;
}
const InfoText = ({ count, text, fontSize }: Props) => {
  return (
    <div className="flex">
      <Text text="총" classNames={`text-md pr-1 ${fontSize}`} />
      <Text
        text={`${count}개`}
        classNames={`text-md text-primary-6 ${fontSize}`}
      />
      <Text text={text} classNames={`text-md ${fontSize}`} />
    </div>
  );
};

export default InfoText;
