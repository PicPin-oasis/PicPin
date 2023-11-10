"use client";

import Link from "next/link";
import Image from "next/image";
import logoImg from "@assets/svg/logo.svg";
import TabMenu from "./TabMenu";

export const Header = () => {
  return (
    <div className="w-full flex justify-between">
      <Link href="/">
        <Image width="160" height="80" src={logoImg} alt="logoImg" priority />
      </Link>
      <TabMenu />
    </div>
  );
};
