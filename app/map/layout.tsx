"use client";

import Header from "@/components/header/Header";
import KakaoMap from "./(componenets)/KaKaoMap";
import FilterTab from "./(componenets)/FilterTab";
import UploaderButtons from "./(componenets)/UploaderButtons";

const MapPageLayout = () => {
  return (
    <div className="relative w-full flex flex-col justify-center items-center">
      <Header />
      <FilterTab />
      <UploaderButtons />
      <KakaoMap />
    </div>
  );
};
export default MapPageLayout;
