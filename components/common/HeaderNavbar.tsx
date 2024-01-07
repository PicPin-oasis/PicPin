"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Text from "./Text";

const HeaderNavbar = () => {
  const links = [
    { href: "/map", text: "지도" },
    { href: "/album", text: "앨범" },
    { href: "/photo", text: "사진" },
  ];
  const pathname = usePathname();
  const isActivePath = (href: string) => pathname.includes(href);

  return (
    <div className="h-[48px] z-10 bg-white hidden tablet:flex  tablet:gap-7">
      {links.map(({ href, text }) => (
        <Link
          key={href}
          href={href}
          className="h-full flex justify-center items-center no-underline"
        >
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

export default HeaderNavbar;
