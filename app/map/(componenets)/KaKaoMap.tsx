"use client";

import Script from "next/script";
import { useState, useEffect } from "react";
import { Map } from "react-kakao-maps-sdk";

const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_API_KEY}&autoload=false`;

const KakaoMap = () => {
  const [location, setLocation] = useState({ lat: 33.450701, lng: 126.570667 });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude; // 위도
        const lng = position.coords.longitude; // 경도
        setLocation({ lat, lng });
      });
    }
  }, []);

  return (
    <div className="w-4/6 h-5/6 py-7">
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <Map center={location} style={{ width: "100%", height: "90%" }}></Map>
    </div>
  );
};

export default KakaoMap;
