import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PICPIN",
  description: "지도 기반 사진첩 서비스, 픽핀",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
