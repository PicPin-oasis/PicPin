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
import { setAccessToken } from "@/redux/accessTokenSlice";
import { useModal } from "@/hooks/useModal";
import { getUserInfo } from "@/apis/axios/getUserInfo";
import { setUserInformation } from "@/redux/userInformationSlice";

const HomePageLayout = () => {
  const router = useRouter();
  const { accessToken } = useAppSelector((state) => state.accessToken);
  const dispatch = useAppDispatch();
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();
  const handleButtonClick = () => {
    if (!accessToken) {
      handleOpenModal();
    } else {
      router.push("/map");
    }
  };
  useEffect(() => {
    // 현재 URL에서 인가 코드(code) 추출
    const params = new URL(window.location.href).searchParams;
    const code = params.get("code");

    if (code && !accessToken) {
      login({ code })
        .then((res) => dispatch(setAccessToken(res.access_token.payload)))
        .catch((err) => console.log(err));
    }
  }, [accessToken]);

  useEffect(() => {
    if (accessToken) {
      getUserInfo({ accessToken })
        .then((res) => dispatch(setUserInformation(res)))
        .catch((err) => console.log(err));
    }
  }, [accessToken]);

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
