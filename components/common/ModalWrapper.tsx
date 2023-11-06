"use client";

import { ModalWrapperProps } from "@/types/types";

const ModalWrapper = ({
  isModalOpen,
  onCloseModal,
  children,
}: ModalWrapperProps) => {
  return (
    <>
      {isModalOpen && (
        <div className="bg-zinc-100 w-2/6 h-96 fixed flex flex-col items-center gap-7 rounded-xl p-5">
          <div className="w-full flex justify-between ">
            <h3>로그인</h3>
            <button
              className="text-lg border-none bg-transparent"
              onClick={onCloseModal}
            >
              X
            </button>
          </div>
          {children}
        </div>
      )}
    </>
  );
};
export default ModalWrapper;
