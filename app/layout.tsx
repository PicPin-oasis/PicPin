import type { Metadata } from "next";
import "./globals.css";
import Provider from "./Provider";
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
      <body className="mobile:w-full tablet:w-11/12">
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
