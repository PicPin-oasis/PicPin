"use client";

interface Props {
  classNames?: string;
  placeholder: string;
  value: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  limit: number;
}

const Textarea = ({
  classNames,
  placeholder,
  value,
  onChange,
  limit,
}: Props) => {
  return (
    <textarea
      className={`box-border text-sm w-full h-24 text-start pl-2 py-3 mt-2.5 focus:outline-none focus:border-[1.5px] rounded-md border-solid border-[1px] border-primary-6 shadow resize-none ${classNames}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      maxLength={limit}
    />
  );
};
export default Textarea;
