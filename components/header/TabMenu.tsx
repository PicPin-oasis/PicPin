"use client";

import Link from "next/link";

const TabMenu = () => {
  return (
    <div className="flex gap-2 justify-center items-center mr-3">
      <Link href="/map" className="no-underline	">
        지도
      </Link>
      <Link href="/album" className="no-underline	">
        앨범
      </Link>
      <Link href="/post" className="no-underline	">
        포스트
      </Link>
      <Link href="/login" className="no-underline	">
        로그인
      </Link>
    </div>
  );
};
export default TabMenu;
