"use client";

import { ModalWrapperProps } from "@/types/types";

const ModalWrapper = ({
  title,
  children,
  onCloseModal,
  classNames,
}: ModalWrapperProps) => {
  return (
    <>
      <div
        className={`bg-primary-0 shadow-md w-2/6 h-fit fixed mx-auto my-auto left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center gap-1 rounded-xl p-5 ${classNames}`}
      >
        <div className="w-full flex justify-between">
          <h3>{title}</h3>
          <button
            className="text-lg border-none bg-transparent cursor-pointer"
            onClick={onCloseModal}
          >
            X
          </button>
        </div>
        {children}
      </div>
    </>
  );
};
export default ModalWrapper;
