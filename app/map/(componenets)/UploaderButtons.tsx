"use client";

import Button from "@/components/common/Button";
import albumImg from "@assets/svg/album.svg";
import postImg from "@assets/svg/post.svg";

const UploaderButtons = () => {
  return (
    <div>
      <Button text={"앨범 등록"} onClick={() => {}} image={albumImg} />
      <Button text={"포스트 등록"} onClick={() => {}} image={postImg} />
    </div>
  );
};
export default UploaderButtons;
