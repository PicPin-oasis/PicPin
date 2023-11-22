"use client";

import Script from "next/script";
import { useState, useEffect } from "react";
import { Map } from "react-kakao-maps-sdk";

const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_API_KEY}&autoload=false`;

const KakaoMap = () => {
  const [location, setLocation] = useState({ lat: 33.450701, lng: 126.570667 });
  const [mapLoaded, setMapLoaded] = useState(false);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        setLocation({ lat, lng });
      });
    }
  }, []);

  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      window.kakao.maps.load(() => {
        setMapLoaded(true);
      });
    }
  }, []);
  return (
    <div className="w-full h-full">
      <Script
        src={KAKAO_SDK_URL}
        strategy="afterInteractive"
        onLoad={() => {
          window.kakao &&
            window.kakao.maps &&
            window.kakao.maps.load(() => {
              setMapLoaded(true);
            });
        }}
      />
      {mapLoaded && <Map center={location} style={{ height: "85vh" }}></Map>}
    </div>
  );
};

export default KakaoMap;
