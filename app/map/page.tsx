import Header from "@/components/header/Header";
import KakaoMap from "./(componenets)/KaKaoMap";

export default function MapPage() {
  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <Header />
      <KakaoMap />
    </div>
  );
}
