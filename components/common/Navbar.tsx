"use client";

import Link from "next/link";
import Image from "next/image";
import mapOff from "@assets/svg/map_off.svg";
import mapOn from "@assets/svg/map_on.svg";
import bookmarkOff from "@assets/svg/bookmark_off.svg";
import bookmarkOn from "@assets/svg/bookmark_on.svg";
import photoOff from "@assets/svg/photo_off.svg";
import photoOn from "@assets/svg/photo_on.svg";
import { usePathname } from "next/navigation";
import { Text } from "./Text";

export const Navbar = () => {
  const links = [
    { href: "/map", src: [mapOff, mapOn], text: "지도" },
    { href: "/album", src: [bookmarkOff, bookmarkOn], text: "앨범" },
    { href: "/photo", src: [photoOff, photoOn], text: "사진" },
  ];
  const pathname = usePathname();
  const isActivePath = (href: string) => pathname.includes(href);

  return (
    <div className="w-full h-[48px] z-10 bg-white flex place-items-center">
      {links.map(({ href, src, text }) => (
        <Link
          key={href}
          href={href}
          className={`w-1/3 h-full flex justify-center items-center gap-1 no-underline ${
            isActivePath(href) && "bg-primary-1"
          }`}
        >
          <Image
            src={isActivePath(href) ? src[1] : src[0]}
            alt={src[0]}
            priority
          />
          <Text
            text={text}
            classNames={`${
              isActivePath(href) ? "text-primary-6" : "text-grayscale-50"
            }`}
          />
        </Link>
      ))}
    </div>
  );
};
