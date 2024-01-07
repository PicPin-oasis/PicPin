"use client";

import { useDeleteAlbumMutation } from "@/apis/axios/album/deleteAlbum";
import Toast from "@/components/common/Toast";
import WhiteButton from "@/components/common/WhiteButton";
import { setEditStatus } from "@/redux/editStatusSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  albumId: number;
}
const ActionButtons = ({ albumId }: Props) => {
  const [toast, setToast] = useState(false);
  const route = useRouter();
  const dispatch = useAppDispatch();
  const {
    mutate: deleteMutation,
    isSuccess: isDeleteSuccess,
    isError: isDeleteError,
  } = useDeleteAlbumMutation({
    onSuccess: () => {
      setToast(true);
      setTimeout(() => {
        route.push("/album");
      }, 2000);
    },
  });
  const handleUpdateAlbum = () => {
    dispatch(setEditStatus({ isEditing: true, type: "album" }));
  };
  const handleDeleteAlbum = () => {
    deleteMutation(albumId);
  };
  return (
    <div className="flex gap-1">
      <WhiteButton
        text="공유"
        onClick={() => {}}
        classNames="w-fit px-2 text-xs rounded-full h-fit "
      />
      <WhiteButton
        text="수정"
        onClick={handleUpdateAlbum}
        classNames="w-fit px-2 text-xs rounded-full h-fit"
      />
      <WhiteButton
        text="삭제"
        onClick={handleDeleteAlbum}
        classNames="w-fit px-2 text-xs rounded-full h-fit"
      />
      {toast && <Toast text="삭제되었습니다." />}
    </div>
  );
};

export default ActionButtons;
