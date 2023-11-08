"use client";

import { ModalWrapperProps } from "@/types/types";

const ModalWrapper = ({ children, onCloseModal }: ModalWrapperProps) => {
  return (
    <>
      <div className="bg-zinc-100 shadow-md w-2/6 h-96 fixed top-1/4 left-1/3 z-10 flex flex-col items-center gap-7 rounded-xl p-5">
        <div className="w-full flex justify-between ">
          <h3>로그인</h3>
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
