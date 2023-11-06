"use client";
import message from "@assets/png/message.png";
import Image from "next/image";
import { KaKaoLoginProps } from "@/types/types";

const KakaoLogin = ({ onKakaoLogin }: KaKaoLoginProps) => {
  return (
    <div
      onClick={onKakaoLogin}
      className="mt-10 px-9 w-3/6 h-11 bg-[#F7E600] flex justify-center items-center gap-3 rounded-md"
    >
      <Image alt="카카오 로그인" className="w-6 h-6" src={message} priority />
      <b>카카오로 시작하기</b>
    </div>
  );
};

export default KakaoLogin;
