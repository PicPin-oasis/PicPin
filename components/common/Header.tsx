"use client";

import Link from "next/link";
import Image from "next/image";
import logoImg from "@assets/svg/logo.svg";
import profile from "@assets/svg/profile_off.svg";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { clearAccessToken } from "@/redux/accessTokenSlice";
import { useRouter } from "next/navigation";
import { getKaKaoLoginURL } from "@/utils/getKakaoLoginURL";
import HeaderNavbar from "./HeaderNavbar";

const Header = () => {
  const { accessToken } = useAppSelector((state) => state.accessToken);
  const route = useRouter();
  const dispatch = useAppDispatch();
  const handleLogo = () => {
    route.push("/");
  };
  const handleLoginButton = () => {
    if (!accessToken) {
      getKaKaoLoginURL();
    } else {
      route.push("/");
      dispatch(clearAccessToken());
    }
  };
  return (
    <div className="box-border w-full h-[80px] flex items-center tablet:justify-between px-4">
      <Image
        className="w-fit absolute left-1/2 -translate-x-1/2 cursor-pointer tablet:relative tablet:left-auto tablet:translate-x-0"
        width="200"
        height="53"
        src={logoImg}
        alt="logoImg"
        priority
        onClick={handleLogo}
      />
      <Image
        className="absolute right-5 cursor-pointer tablet:hidden"
        src={profile}
        alt="profile"
        priority
        onClick={handleLoginButton}
      />
      <HeaderNavbar />
    </div>
  );
};

export default Header;
