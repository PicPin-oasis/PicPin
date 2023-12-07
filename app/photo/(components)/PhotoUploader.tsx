"use client";

import {
  FileWithPreview,
  ImageInfoProps,
  PhotoUploaderProps,
} from "@/types/types";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { ImageUploader } from "./ImageUploader";
import { Text } from "@/components/common/Text";
import { getImageAddress } from "@/apis/axios/photos/getImageAddress";
import { Input } from "@/components/common/Input";
import { DaumPostCodePopup } from "./DaumPostCodePopup";
import { Calendar } from "./Calendar";
import { Textarea } from "@/components/common/Textarea";
import { AlbumListSelectBox } from "./AlbumListSelectBox";
import { WhiteButton } from "@/components/common/WhiteButton";
import { usePostPhotosMutation } from "@/apis/axios/photos/postPhotos";
import { usePostPhotosUploadS3 } from "@/apis/axios/photos/postPhotosUploadS3";

interface Props {
  handleTogglePhotoForm: () => void;
}

export default function PhotoUploader({ handleTogglePhotoForm }: Props) {
  const {
    mutate: updateMutate,
    isSuccess: isUpdateSuccess,
    isLoading: updateLoading,
  } = usePostPhotosMutation();
  const {
    mutateAsync: uploadS3Mutate,
    isSuccess: isUploadS3Success,
    isLoading: uploadS3Loading,
  } = usePostPhotosUploadS3();
  const [submitInfo, setSubmitInfo] = useState<PhotoUploaderProps>({
    address: "첫번째 사진의 위치 정보를 가져옵니다.",
    date: "",
    albumId: undefined,
  });
  const { address, date, albumId } = submitInfo;
  const [imageInfo, setImageInfo] = useState<ImageInfoProps>({
    date: "",
    lat: null,
    lon: null,
  });
  const [filesAndPreviews, setFilesAndPreviews] = useState<FileWithPreview[]>(
    [],
  );
  const [calendarPlaceholder, setCalendarPlaceholder] = useState<string>(
    "첫번째 사진의 날짜 정보를 가져옵니다.",
  );
  const [title, setTitle] = useState<string>("");
  const [memo, SetMemo] = useState<string>("");
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };
  const onSubmit = async () => {
    // 1. postPhotoUploadS3 요청
    const formData = new FormData();
    filesAndPreviews.forEach((item) => formData.append("files", item.file));
    const data = await uploadS3Mutate(formData);
    // 2. 응답값에서 upload_file_paths 을 usePostPhotosMutation 에 담아서 게시글 등록
    updateMutate({
      place_name: title,
      taken_photo_address: address,
      taken_photo_date: date,
      photo_urls: data.upload_file_paths,
      ...(memo.length ? { memo: memo } : {}),
      ...(albumId !== undefined ? { album_id: albumId } : {}),
    });
  };
  useEffect(() => {
    if (isUpdateSuccess) {
      handleTogglePhotoForm();
    }
  }, [isUpdateSuccess]);

  useEffect(() => {
    if (imageInfo.date) {
      setSubmitInfo((prev) => ({
        ...prev,
        date: imageInfo.date,
      }));
    }
    if (imageInfo.lat !== null && imageInfo.lon !== null) {
      // 메타데이터에 위치 없을 경우
      if (imageInfo.lat + imageInfo.lon === 0) {
        setSubmitInfo((prev) => ({
          ...prev,
          address: "주소를 검색하세요.",
        }));
        setCalendarPlaceholder("날짜를 입력하세요.");
      } else {
        // 메타데이터에 위치 있는 경우 > 좌표를 주소로 변환
        getImageAddress({
          lat: imageInfo.lat,
          lon: imageInfo.lon,
        })
          .then((res) => {
            setSubmitInfo((prev) => ({
              ...prev,
              address: res.address.address_name,
            }));
          })
          .catch((err) => console.log(err));
      }
    }
  }, [imageInfo]);
  return (
    <div className="grow w-full h-full bg-primary-0 box-border px-5">
      <Text text="사진 선택" type="essential" classNames="mt-8" />
      <ImageUploader
        setImageInfo={setImageInfo}
        filesAndPreviews={filesAndPreviews}
        setFilesAndPreviews={setFilesAndPreviews}
      />
      <Text text="장소명" type="essential" classNames="mt-8" />
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="어디서 찍으셨나요? ex. 경포해변, 광명동굴"
      />
      <Text text="주소" type="essential" classNames="mt-8" />
      <label className="text-xs">주소가 잘못되었다면 직접 수정해보세요!</label>
      <div
        className="box-border text-sm w-full pl-2 py-3 rounded-md mt-2.5 bg-white focus:border-[1.5px] border-solid border-[1px] border-primary-6 shadow cursor-pointer"
        onClick={handleOpenPopup}
      >
        {address}
      </div>
      {isPopupOpen && (
        <DaumPostCodePopup
          setSubmitInfo={setSubmitInfo}
          setIsPopupOpen={setIsPopupOpen}
        />
      )}
      <div className="flex flex-col mt-8">
        <Text text="날짜" type="essential" />
        <label className="text-xs">
          날짜가 잘못되었다면 직접 수정해보세요!
        </label>
        <Calendar
          submitInfo={submitInfo}
          setSubmitInfo={setSubmitInfo}
          calendarPlaceholder={calendarPlaceholder}
        />
      </div>
      <Text text="메모" classNames="mt-8" />
      <Textarea
        placeholder="이 곳에서의 추억을 자유롭게 적어주세요! ex. 엄마랑 오랜만에 바다 여행! 바다 바람 시원하고 좋아~ :)"
        value={memo}
        onChange={(e) => SetMemo(e.target.value)}
        limit={300}
      />
      <Text text="앨범 선택" classNames="mt-8" />
      <AlbumListSelectBox setSubmitInfo={setSubmitInfo} />
      <WhiteButton
        text="등록"
        onClick={onSubmit}
        classNames="float-right mt-12 mb-20 hover:border-none shadow hover:bg-primary-6 hover:text-white transition-colors duration-150 ease-in-out"
      />
    </div>
  );
}
