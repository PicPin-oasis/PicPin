"use client";

import { useRouter } from "next/navigation";
import Button from "../common/Button";
import Image from "next/image";
import mainImg1 from "@assets/svg/main1.svg";
import mainImg2 from "@assets/svg/main2.svg";
import tutorial from "@assets/svg/tutorial.svg";
import InfoText from "./InfoText";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useEffect } from "react";
import { login } from "@/apis/axios/user/login";
import { setAccessToken } from "@/redux/accessTokenSlice";
import arrow from "@assets/svg/arrow.svg";
import { getKaKaoLoginURL } from "@/utils/getKakaoLoginURL";

export default function HomePageLayout() {
  const router = useRouter();
  const { accessToken } = useAppSelector((state) => state.accessToken);
  const dispatch = useAppDispatch();
  const handleButtonClick = () => {
    if (!accessToken) {
      getKaKaoLoginURL();
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
        .then((res) => {
          dispatch(setAccessToken(res.access_token.payload));
          localStorage.setItem("accessToken", res.access_token.payload);
        })
        .catch((err) => console.log(err));
    }
  }, [accessToken]);

  return (
    <div className="min-w-[390px] w-full flex flex-col">
      <div className="w-full h-full flex flex-col gap-3 tablet:relative">
        <Image
          className="w-full  h-60 tablet:h-[450px] laptop:object-cover"
          src={mainImg1}
          alt="mainImg1"
          priority
        />
        <InfoText />
        <Button
          text="여행 지도 만들기"
          onClick={handleButtonClick}
          image={arrow}
          classNames="ml-4"
        />
        <div className="w-full h-60 tablet:h-[450px] bg-primary-1 tablet:hidden">
          <Image
            className=" w-full h-64 objectfit-cover tablet:hidden"
            src={tutorial}
            alt="tutorial"
            priority
          />
        </div>
        <Image
          className="tablet:block w-full h-60 tablet:h-[450px] object-cover"
          src={mainImg2}
          alt="mainImg2"
          priority
        />
      </div>
    </div>
  );
}
