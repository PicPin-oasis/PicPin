"use client";

import { useAppSelector } from "@/redux/store";
import {
  ChangeSubmitInfoProps,
  FileWithPreview,
  ImageInfoProps,
  PhotoUploaderProps,
} from "@/types/types";
import { useState, useEffect, useCallback } from "react";
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
import { createAllPresignedURLs } from "@/apis/axios/photos/createPresignedURL";

export default function PhotoUploader() {
  const { mutate: updateMutate, isLoading: updateLoading } =
    usePostPhotosMutation();
  const { accessToken } = useAppSelector((state) => state.accessToken);
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
  const [title, setTitle] = useState<string>("");
  const [memo, SetMemo] = useState<string>("");
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleChangeSubmitInfo = useCallback(
    ({ targetKey, changeValue }: ChangeSubmitInfoProps) => {
      setSubmitInfo((prev) => ({ ...prev, [targetKey]: changeValue }));
    },
    [setSubmitInfo],
  );

  const onSubmit = async () => {
    const filenames = filesAndPreviews.map((item) => item.file.name);
    const presURLs = await createAllPresignedURLs({ filenames, accessToken });
    const upload_urls = presURLs.map(({ key }) => key);
    updateMutate({
      accessToken,
      place_name: title,
      taken_photo_address: address,
      taken_photo_date: date,
      photo_urls: upload_urls,
      ...(memo.length ? { memo: memo } : {}),
      ...(albumId !== undefined ? { album_id: albumId } : {}),
    });
  };

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
        handleChangeSubmitInfo({
          targetKey: "address",
          changeValue: "위치 정보가 없습니다. 직접 검색해보세요 !",
        });
        // 날짜 탭도 위와 같이 변경해야함. 추후 작업 예정
      } else {
        // 메타데이터에 위치 있는 경우 > 좌표를 주소로 변환
        getImageAddress({
          lat: imageInfo.lat,
          lon: imageInfo.lon,
        })
          .then((res) => {
            handleChangeSubmitInfo({
              targetKey: "address",
              changeValue: res.address.address_name,
            });
          })
          .catch((err) => console.log(err));
      }
    }
  }, [imageInfo]);
  return (
    <div className="grow w-full h-full bg-primary-0 box-border px-5">
      <div>
        <Text text="사진 선택" type="essential" />
        <ImageUploader
          setImageInfo={setImageInfo}
          filesAndPreviews={filesAndPreviews}
          setFilesAndPreviews={setFilesAndPreviews}
        />
      </div>
      <div>
        <Text text="장소명" type="essential" />
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="어디서 찍으셨나요? ex. 경포해변, 광명동굴"
        />
      </div>
      <div>
        <Text text="주소" type="essential" />
        <label className="text-xs">
          주소가 잘못되었다면 직접 수정해보세요!
        </label>
        <div
          className="box-border text-sm w-full pl-2 py-3 rounded-md mt-2.5 bg-white focus:border-[1.5px] border-solid border-[1px] border-primary-6 shadow cursor-pointer"
          onClick={handleOpenPopup}
        >
          {address}
        </div>
        {isPopupOpen && (
          <DaumPostCodePopup
            handleChangeSubmitInfo={handleChangeSubmitInfo}
            setIsPopupOpen={setIsPopupOpen}
          />
        )}
      </div>
      <div className="flex flex-col">
        <Text text="날짜" type="essential" />
        <label className="text-xs">
          날짜가 잘못되었다면 직접 수정해보세요!
        </label>
        <Calendar
          submitInfo={submitInfo}
          handleChangeSubmitInfo={handleChangeSubmitInfo}
        />
      </div>
      <div>
        <Text text="메모" />
        <Textarea
          placeholder="이 곳에서의 추억을 자유롭게 적어주세요! ex. 엄마랑 오랜만에 바다 여행! 바다 바람 시원하고 좋아~ :)"
          value={memo}
          onChange={(e) => SetMemo(e.target.value)}
          limit={300}
        />
      </div>
      <div>
        <Text text="앨범 선택" />
        <AlbumListSelectBox handleChangeSubmitInfo={handleChangeSubmitInfo} />
      </div>
      <WhiteButton
        text="등록"
        onClick={onSubmit}
        classNames="float-right mt-12 mb-20 hover:border-none shadow hover:bg-primary-6 hover:text-white transition-colors duration-150 ease-in-out"
      />
    </div>
  );
}