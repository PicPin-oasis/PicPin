import type { Metadata } from "next";
import "./globals.css";
import Provider from "./Provider";
import Header from "@/components/common/Header";
import BottomNavbar from "@/components/common/BottomNavbar";
import { ChildrenProps } from "@/types/types";

export const metadata: Metadata = {
  title: "PICPIN",
  description: "지도 기반 사진첩 서비스, 픽핀",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en">
      <body className="w-full">
        <Provider>
          <meta
            httpEquiv="Content-Security-Policy"
            content="upgrade-insecure-requests"
          />
          <div className="min-w-[390px] flex flex-col w-full h-full">
            <Header />
            {children}
            <BottomNavbar />
          </div>
        </Provider>
      </body>
    </html>
  );
}
