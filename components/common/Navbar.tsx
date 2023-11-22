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

export const Navbar = () => {
  const links = [
    { href: "/map", src: [mapOff, mapOn] },
    { href: "/album", src: [bookmarkOff, bookmarkOn] },
    { href: "/photo", src: [photoOff, photoOn] },
  ];
  const pathname = usePathname();
  const isActivePath = (href: string) => pathname.includes(href);

  return (
    <div className="w-full h-12 flex justify-around items-center fixed bottom-0">
      {links.map(({ href, src }) => (
        <Link key={href} href={href}>
          <Image
            src={isActivePath(href) ? src[1] : src[0]}
            alt={src[0]}
            priority
          />
        </Link>
      ))}
    </div>
  );
};
