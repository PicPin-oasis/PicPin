"use client";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  classNames?: string;
}
const Input = ({ value, onChange, placeholder, classNames }: Props) => {
  return (
    <div
      className={`w-full rounded-md mt-2.5 bg-white focus:border-[1.5px] border-solid border-[1px] border-primary-6 shadow ${classNames}`}
    >
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="text-sm w-11/12 py-3 pl-2 rounded-md  border-0 p-0 focus:ring-0 focus:border-0 focus:outline-none"
      />
    </div>
  );
};

export default Input;
