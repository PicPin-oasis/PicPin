"use client";

import Link from "next/link";
import { logoutUser } from "@/redux/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useState, useEffect } from "react";
import KakaoLoginModal from "../login/KaKaoLoginModal";
import { useModal } from "@/hooks/useModal";

const TabMenu = () => {
  const userInfo = useAppSelector((state) => state.userInfo);
  const dispatch = useAppDispatch();
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();

  const handleLoginButton = () => {
    if (!userInfo.access_token) {
      handleOpenModal();
    } else {
      dispatch(logoutUser());
    }
  };
  const [loginState, setLoginState] = useState("로그인");
  useEffect(() => {
    if (!userInfo.access_token) {
      setLoginState("로그인");
    } else {
      setLoginState("로그아웃");
    }
  }, [userInfo.access_token]);
  return (
    <div className="flex gap-2 justify-center items-center mr-3">
      <Link href="/map" className="no-underline	">
        지도
      </Link>
      <Link href="/album" className="no-underline	">
        앨범
      </Link>
      <Link href="/post" className="no-underline	">
        포스트
      </Link>
      <button onClick={handleLoginButton}>{loginState}</button>
      {isModalOpen && <KakaoLoginModal onCloseModal={handleCloseModal} />}
    </div>
  );
};
export default TabMenu;
