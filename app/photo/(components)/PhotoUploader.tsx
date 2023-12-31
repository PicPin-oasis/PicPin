"use client";

import {
  FileWithPreview,
  ImageInfoProps,
  PhotoUploaderProps,
} from "@/types/types";
import { useState, useEffect } from "react";
import Text from "@/components/common/Text";
import Input from "@/components/common/Input";
import DaumPostCodePopup from "./DaumPostCodePopup";
import Textarea from "@/components/common/Textarea";
import Button from "@/components/common/Button";
import ImageUploader from "./ImageUploader";
import Calendar from "./Calendar";
import AlbumListSelectBox from "./AlbumListSelectBox";
import { getImageAddress } from "@/apis/axios/photos/getImageAddress";
import { usePostPhotosMutation } from "@/apis/axios/photos/postPhotos";
import { usePostPhotosUploadS3 } from "@/apis/axios/photos/postPhotosUploadS3";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { setEditStatus } from "@/redux/editStatusSlice";
import { PhotoDetailProps } from "@/apis/axios/photos/getPhotoDetail";
import { usePutPhotoDetailMutation } from "@/apis/axios/photos/putPhotoDetail";

interface Props {
  handleTogglePhotoForm?: () => void;
  editData?: PhotoDetailProps;
}

export default function PhotoUploader({
  handleTogglePhotoForm,
  editData,
}: Props) {
  // console.log(editData);
  const { editStatus } = useAppSelector((state) => state.editStatus);
  const dispatch = useAppDispatch();
  const {
    mutate: postMutation,
    isSuccess: isPostSuccess,
    isLoading: isPostLoading,
  } = usePostPhotosMutation();
  const {
    mutateAsync: uploadS3Mutate,
    isSuccess: isUploadS3Success,
    isLoading: isUploadS3Loading,
  } = usePostPhotosUploadS3();
  const {
    mutate: putMutation,
    isSuccess: isPutSuccess,
    isLoading: isPutLoading,
  } = usePutPhotoDetailMutation();
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
  const [memo, setMemo] = useState<string>("");
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
    postMutation({
      place_name: title,
      taken_photo_address: address,
      taken_photo_date: date,
      photo_urls: data.upload_file_paths,
      ...(memo.length ? { memo: memo } : {}),
      ...(albumId !== undefined ? { album_id: albumId } : {}),
    });
  };
  const onCompleteEdit = () => {
    putMutation({
      photoId: (editData as PhotoDetailProps).id,
      place_name: title,
      taken_photo_address: address,
      taken_photo_date: date,
      ...(albumId !== undefined ? { album_id: albumId } : {}),
      ...(memo && memo.length ? { memo: memo } : {}),
    });
    dispatch(setEditStatus(false));
  };
  useEffect(() => {
    if (isPostSuccess) {
      handleTogglePhotoForm && handleTogglePhotoForm();
    }
  }, [isPostSuccess]);

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

  useEffect(() => {
    if (editData) {
      setTitle(editData.place_name);
      setSubmitInfo((prev) => ({
        ...prev,
        address: editData.taken_photo_address,
        date: editData.taken_photo_date,
      }));
      setCalendarPlaceholder(editData.taken_photo_date);
      editData.memo && setMemo(editData.memo);
    }
  }, []);

  return (
    <div className="grow w-full h-full bg-primary-0 box-border px-5">
      {editStatus ? (
        <div className="h-1"></div>
      ) : (
        <>
          <Text text="사진 선택" type="essential" classNames="mt-8" />
          <ImageUploader
            setImageInfo={setImageInfo}
            filesAndPreviews={filesAndPreviews}
            setFilesAndPreviews={setFilesAndPreviews}
          />
        </>
      )}
      <Text text="장소명" type="essential" classNames="mt-8" />
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="어디서 찍으셨나요? ex. 경포해변, 광명동굴"
      />
      <Text text="주소" type="essential" classNames="mt-8" />
      <label className="text-sm">주소가 잘못되었다면 직접 수정해보세요!</label>
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
        <label className="text-sm">
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
        onChange={(e) => setMemo(e.target.value)}
        limit={300}
      />
      <Text text="앨범 선택" classNames="mt-8" />
      <AlbumListSelectBox setSubmitInfo={setSubmitInfo} />
      <Button
        text={editStatus ? "수정" : "등록"}
        onClick={editStatus ? onCompleteEdit : onSubmit}
        classNames="text-md rounded-md float-right my-8"
      />
    </div>
  );
}
