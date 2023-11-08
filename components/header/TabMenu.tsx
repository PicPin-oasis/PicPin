"use client";

import Link from "next/link";
import { clearAccessToken } from "@/redux/accessTokenSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useState, useEffect } from "react";
import KakaoLoginModal from "../login/KaKaoLoginModal";
import { useModal } from "@/hooks/useModal";
import { useRouter } from "next/navigation";

const TabMenu = () => {
  const links = [
    { href: "/map", text: "지도" },
    { href: "/album", text: "앨범" },
    { href: "/post", text: "포스트" },
  ];
  const { accessToken } = useAppSelector((state) => state.accessToken);
  const { username } = useAppSelector((state) => state.userInformaion);
  const dispatch = useAppDispatch();
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();
  const router = useRouter();
  const handleLoginButton = () => {
    if (!accessToken) {
      handleOpenModal();
    } else {
      router.push("/");
      dispatch(clearAccessToken());
    }
  };
  const [loginState, setLoginState] = useState("로그인");

  useEffect(() => {
    setLoginState(accessToken ? `${username}님` : "로그인");
  }, [accessToken]);

  return (
    <div className="flex gap-2 justify-center items-center mr-3">
      {links.map(({ href, text }) => (
        <Link
          key={href}
          href={href}
          className="text-current hover:text-primary-6 focus:text-primary-6 focus:font-semibold no-underline"
        >
          {text}
        </Link>
      ))}
      <div className="relative flex flex-col items-center group">
        <div
          onClick={handleLoginButton}
          className="hover:text-primary-6 focus:text-primary-6 cursor-pointer"
        >
          {loginState}
        </div>
      </div>
      {isModalOpen && <KakaoLoginModal onCloseModal={handleCloseModal} />}
    </div>
  );
};
export default TabMenu;
