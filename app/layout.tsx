import type { Metadata } from "next";
import "./globals.css";
import Provider from "./Provider";
import { ChildrenProps } from "@/types/types";
import { Header } from "@/components/common/Header";
import { Navbar } from "@/components/common/Navbar";

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
      <body className="mobile:w-full tablet:w-11/12">
        <Provider>
          <meta
            httpEquiv="Content-Security-Policy"
            content="upgrade-insecure-requests"
          />
          <div className="flex flex-col w-full h-full">
            <Header />
            <div className="grow">{children}</div>
            <Navbar />
          </div>
        </Provider>
      </body>
    </html>
  );
}
