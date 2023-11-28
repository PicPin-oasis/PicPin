"use client";

import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { PhotoFormProps, FileWithPreview, ImageInfoProps } from "@/types/types";
import { Text } from "@/components/common/Text";
import { Calendar } from "./Calendar";
import { Input } from "@/components/common/Input";
import { WhiteButton } from "@/components/common/WhiteButton";
import { ImageUploader } from "./ImageUploader";
import {
  createAllPresignedURLs,
  createPresignedURL,
} from "@/apis/axios/photos/createPresignedURL";
import { Textarea } from "@/components/common/Textarea";
import { SelectBox } from "@/app/photo/(components)/SelectBox";

export default function PhotoForm() {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { isSubmitting, isSubmitted, errors },
  } = useForm<PhotoFormProps>();
  const { accessToken } = useAppSelector((state) => state.accessToken);
  const [filesAndPreviews, setFilesAndPreviews] = useState<FileWithPreview[]>(
    [],
  );
  const [textValue, setTextValue] = useState<string>("");
  const [imageInfo, setImageInfo] = useState<ImageInfoProps>({
    date: "",
    lat: 0,
    lon: 0,
  });
  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    const filenames = filesAndPreviews.map((item) => item.file.name);
    const presURLs = await createAllPresignedURLs({ filenames, accessToken });
    console.log(presURLs);
  });
  return (
    <div className="grow w-full h-full bg-primary-0">
      <form noValidate className="mx-5 " onSubmit={onSubmit}>
        <Text text="사진 선택" type="essential" />
        <ImageUploader
          register={register}
          setImageInfo={setImageInfo}
          filesAndPreviews={filesAndPreviews}
          setFilesAndPreviews={setFilesAndPreviews}
        />
        <Text text="장소명" type="essential" />
        <Input
          placeholder="어디서 찍으셨나요? ex. 경포해변, 광명동굴"
          register={register}
          name="title"
          rules={{
            required: "포스트 이름을 입력해주세요",
            pattern: {
              value: /^[^\s]{2,10}$/,
              message: "장소 이름은 최소 2글자에서 최대 10글자여야 합니다.",
            },
          }}
        />
        <Text text="위치" type="essential" />
        <label className="text-xs">
          주소가 잘못되었다면 직접 수정해보세요!
        </label>
        <Input
          placeholder="첫번째 사진의 위치 정보를 가져옵니다."
          name="taken_photo_address"
          register={register}
          rules={{
            required: "주소를 입력해주세요",
          }}
        />
        <div className="flex flex-col">
          <Text text="날짜" type="essential" />
          <label className="text-xs">
            날짜가 잘못되었다면 직접 수정해보세요!
          </label>
          <Controller
            control={control}
            name="taken_photo_date"
            render={({ field }) => (
              <Calendar
                imageInfo={imageInfo}
                selectedDate={field.value}
                setSelectedDate={field.onChange}
              />
            )}
          />
        </div>
        <Text text="메모" />
        <Textarea
          placeholder="이 곳에서의 추억을 자유롭게 적어주세요! ex. 엄마랑 오랜만에 바다 여행! 바다 바람 시원하고 좋아~ :)"
          register={register}
          name="memo"
          rules={{ maxLength: 100 }}
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
        />
        <Text text="앨범 선택" />
        <SelectBox />
        <WhiteButton
          text="등록"
          classNames="float-right mt-12 mb-20 hover:border-none shadow hover:bg-primary-6 hover:text-white transition-colors duration-150 ease-in-out"
        />
      </form>
    </div>
  );
}
