"use client";

import Button from "@/components/common/Button";
import albumImg from "@assets/svg/album.svg";
import postImg from "@assets/svg/post.svg";
import { useRouter } from "next/navigation";

const UploaderButtons = () => {
  const router = useRouter();
  const handlePostButton = () => router.push("/post");
  const classNames =
    "flex flex-row-reverse justify-center items-center w-full gap-1 mb-3";
  return (
    <div className="absolute top-44 z-10 right-3">
      <Button
        text={"앨범 등록"}
        onClick={() => {}}
        image={albumImg}
        classNames={classNames}
      />
      <Button
        text={"포스트 등록"}
        onClick={handlePostButton}
        image={postImg}
        classNames={classNames}
      />
    </div>
  );
};
export default UploaderButtons;
