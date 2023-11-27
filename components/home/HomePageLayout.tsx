"use client";

import { useRouter } from "next/navigation";
import Button from "../common/Button";
import Image from "next/image";
import mainImg1 from "@assets/svg/main1.svg";
import mainImg2 from "@assets/svg/main2.svg";
import InfoText from "./InfoText";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useEffect } from "react";
import { login } from "@/apis/axios/user/login";
import { setAccessToken } from "@/redux/accessTokenSlice";
import { useModal } from "@/hooks/useModal";
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
        .then((res) => dispatch(setAccessToken(res.access_token.payload)))
        .catch((err) => console.log(err));
    }
  }, [accessToken]);

  return (
    <div className="flex flex-col">
      <div className="relative flex flex-col gap-3">
        <Image className="w-full h-48" src={mainImg1} alt="mainImg1" priority />
        <div className="absolute top-8 left-4 flex flex-col gap-12">
          <InfoText />
        </div>
        <Button
          text="여행 지도 만들기"
          onClick={handleButtonClick}
          image={arrow}
          classNames="ml-4"
        />
        <Image className="w-full h-48" src={mainImg2} alt="mainImg2" priority />
      </div>
    </div>
  );
}
