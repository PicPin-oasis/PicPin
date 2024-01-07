"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ImageUploader from "@/app/photo/(components)/ImageUploader";
import Text from "@/components/common/Text";
import { AlbumProps, FileWithPreview, ImageInfoProps } from "@/types/types";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import { usePostAlbumMutation } from "@/apis/axios/album/postAlbum";
import { usePostImagesUploadS3 } from "@/apis/axios/photos/postImagesUploadS3";
import Toast from "@/components/common/Toast";
import { usePutAlbumMutation } from "@/apis/axios/album/putAlbum";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { setEditStatus } from "@/redux/editStatusSlice";

interface Props {
  handleToggleAlbumForm?: () => void;
  editData?: AlbumProps;
}

export default function AddAlbumForm({
  handleToggleAlbumForm,
  editData,
}: Props) {
  const dispatch = useAppDispatch();
  const { isEditing, type } = useAppSelector((state) => state.editStatus);
  const [title, setTitle] = useState<string>("");
  const [imageInfo, setImageInfo] = useState<ImageInfoProps>({
    date: "",
    lat: null,
    lon: null,
  });
  const [filesAndPreviews, setFilesAndPreviews] = useState<FileWithPreview[]>(
    [],
  );
  const [toast, setToast] = useState(false);
  const { mutate, isLoading, isError } = usePostAlbumMutation({
    onSuccess: () => {
      setToast(true);
      setTimeout(() => {
        handleToggleAlbumForm && handleToggleAlbumForm();
      }, 2000);
    },
  });
  const {
    mutateAsync: uploadS3Mutate,
    isSuccess: isUploadS3Success,
    isLoading: isUploadS3Loading,
  } = usePostImagesUploadS3();
  const {
    mutate: putMutation,
    isSuccess: isPutSuccess,
    isLoading: isPutLoading,
  } = usePutAlbumMutation({
    onSuccess: () => {
      setToast(true);
      setTimeout(() => {
        dispatch(setEditStatus({ isEditing: false, type: "" }));
      }, 2000);
    },
  });

  const onSubmit = async () => {
    // 1. postPhotoUploadS3 요청
    const formData = new FormData();
    filesAndPreviews.forEach((item) => formData.append("files", item.file));
    const data = await uploadS3Mutate(formData);
    // 2. 응답값에서 upload_file_paths 을 mutate 에 담아서 앨범 등록
    mutate({
      title: title,
      cover_image_url: data.upload_file_paths[0],
    });
  };
  const onCompleteEdit = async () => {
    const formData = new FormData();
    filesAndPreviews.forEach((item) => formData.append("files", item.file));
    const data = await uploadS3Mutate(formData);
    putMutation({
      albumId: editData?.id as number,
      title: title,
      cover_image_url: data.upload_file_paths[0],
    });
  };

  useEffect(() => {
    if (editData) {
      setTitle(editData.title);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [setToast]);

  return (
    <div className="relative flex flex-col justify-between w-full h-full bg-primary-0 box-border px-5">
      <div>
        <Text text="앨범 이름" type="essential" classNames="mt-8" />
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="앨범 테마는 무엇인가요? ex. 강릉 여행"
        />
        <Text text="앨범 커버 선택" type="essential" classNames="mt-8" />
        <ImageUploader
          setImageInfo={setImageInfo}
          filesAndPreviews={filesAndPreviews}
          setFilesAndPreviews={setFilesAndPreviews}
          maxSize={1}
          text="앨범 선택"
        />
      </div>
      <Button
        text="등록"
        onClick={isEditing ? onCompleteEdit : onSubmit}
        classNames="self-end text-md rounded-md float-right mb-20"
      />
      {toast && <Toast text="등록되었습니다." />}
    </div>
  );
}
