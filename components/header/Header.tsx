"use client";

import Link from "next/link";
import Image from "next/image";
import logoImg from "@assets/svg/logo.svg";
import TabMenu from "./TabMenu";

const Header = () => {
  return (
    <div className="w-screen flex justify-between bg-grayscale-5">
      <Link href="/">
        <Image
          width="100"
          className="ml-3"
          height="50"
          src={logoImg}
          alt="logoImg"
          priority
        />
      </Link>
      <TabMenu />
    </div>
  );
};

export default Header;
