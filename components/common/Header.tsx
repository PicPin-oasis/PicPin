"use client";

import Image from "next/image";
import logoIcon from "@assets/svg/logo.svg";
import profileIcon from "@assets/svg/profile_off.svg";
import loginIcon from "@assets/svg/profile_on.svg";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { clearAccessToken } from "@/redux/accessTokenSlice";
import { useRouter } from "next/navigation";
import { getKaKaoLoginURL } from "@/utils/getKakaoLoginURL";
import HeaderNavbar from "./HeaderNavbar";

const Header = () => {
  const { accessToken } = useAppSelector((state) => state.accessToken);
  const route = useRouter();
  const dispatch = useAppDispatch();
  const handleClickLogo = () => {
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
    <div className="box-border w-full h-[80px] flex items-center tablet:justify-between px-4 my-6">
      <Image
        className="w-fit absolute left-1/2 -translate-x-1/2 cursor-pointer tablet:relative tablet:left-auto tablet:translate-x-0"
        width="200"
        height="53"
        src={logoIcon}
        alt="logo-icon"
        priority
        onClick={handleClickLogo}
      />
      <Image
        className="absolute right-5 cursor-pointer tablet:hidden"
        src={accessToken ? loginIcon : profileIcon}
        alt="profile"
        priority
        onClick={handleLoginButton}
      />
      <HeaderNavbar />
    </div>
  );
};

export default Header;
