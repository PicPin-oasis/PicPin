"use client";

import Link from "next/link";
import Image from "next/image";
import logoImg from "@assets/svg/logo.svg";
import profile from "@assets/svg/profile_off.svg";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { clearAccessToken } from "@/redux/accessTokenSlice";
import { useRouter } from "next/navigation";

export const Header = () => {
  const { accessToken } = useAppSelector((state) => state.accessToken);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleLoginButton = () => {
    if (!accessToken) {
      const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}&response_type=code`;
      window.location.href = kakaoURL;
    } else {
      router.push("/");
      dispatch(clearAccessToken());
    }
  };
  return (
    <div className="w-full h-20 grid grid-cols-4 items-center">
      <div></div>
      <Link href="/">
        <Image
          className="col-span-2"
          width="200"
          height="53"
          src={logoImg}
          alt="logoImg"
          priority
        />
      </Link>
      <Image
        className="col-start-4 ml-10"
        src={profile}
        alt="profile"
        priority
        onClick={handleLoginButton}
      />
    </div>
  );
};
