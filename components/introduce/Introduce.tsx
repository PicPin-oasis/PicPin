"use client";

import Button from "../common/Button";

const Introduce = () => {
  const handleButtonClick = () => {
    console.log("로그인 시 지도로 이동 / 비로그인 시 로그인페이지로 이동");
  };
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <div className="bg-grayscale-30 px-28 py-24">서비스 소개 공간</div>
      <Button text="나만의 지도 만들기" onClick={handleButtonClick} />
    </div>
  );
};
export default Introduce;
