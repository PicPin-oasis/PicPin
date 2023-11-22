"use client";

import KakaoMap from "./(componenets)/KaKaoMap";
import FilterTab from "./(componenets)/FilterTab";

const MapPageLayout = () => {
  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center">
      <FilterTab />
      <KakaoMap />
    </div>
  );
};
export default MapPageLayout;
