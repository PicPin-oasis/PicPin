"use client";

import { useRouter } from "next/navigation";
import Button from "../common/Button";
import Image from "next/image";
import mainImg1 from "@assets/svg/main1.svg";
import mainImg2 from "@assets/svg/main2.svg";
import Header from "@/components/header/Header";
import InfoText from "./InfoText";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useEffect } from "react";
import KakaoLoginModal from "../login/KaKaoLoginModal";
import { login } from "@/apis/axios/login";
import { loginUser } from "@/redux/userSlice";
import { useModal } from "@/hooks/useModal";

const HomePageLayout = () => {
  const router = useRouter();
  const userInfo = useAppSelector((state) => state.userInfo);
  console.log("userInfo:: ", userInfo);
  const dispatch = useAppDispatch();
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();
  const handleButtonClick = () => {
    if (!userInfo.access_token) {
      handleOpenModal();
    } else {
      router.push("/map");
    }
  };

  const handleKaKaoLogin = async (code: string) => {
    try {
      const res = await login({ code });
      // console.log("res:: ", res.access_token.payload);
      if (res.access_token.payload) {
        dispatch(loginUser(res.access_token.payload));
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    // 현재 URL에서 인가 코드(code) 추출
    const params = new URL(window.location.href).searchParams;
    const code = params.get("code");

    if (code) {
      handleKaKaoLogin(code);
    }
  }, []);
  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <div className="relative flex flex-col justify-center items-center gap-3">
        <Image
          className="w-full h-min"
          src={mainImg1}
          alt="mainImg1"
          priority
        />
        <div className="absolute top-16 left-14 flex flex-col gap-12">
          <InfoText />
          <Button text="나만의 지도 만들기 >" onClick={handleButtonClick} />
        </div>
        <h2 className="w-full text-left">OOO님의 여행 지도</h2>
        <Image
          className="w-full h-min"
          src={mainImg2}
          alt="mainImg2"
          priority
        />
      </div>
      {isModalOpen && <KakaoLoginModal onCloseModal={handleCloseModal} />}
    </div>
  );
};
export default HomePageLayout;
