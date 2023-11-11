"use client";

import { useCallback, useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { PostFormProps, FileWithPreview } from "@/types/types";
import { Text } from "@/components/common/Text";
import { Calendar } from "./Calendar";
import { ColorMarker } from "./ColorMarker";
import { Input } from "@/components/common/Input";
import { OrangeButton } from "@/components/common/OrangeButton";
import { ImageUploader } from "./ImageUploader";

export default function PostForm() {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { isSubmitting, isSubmitted, errors },
  } = useForm<PostFormProps>();
  // const [imageDate, setImageDate] = useState(new Date());
  const [pickedColorNumber, setPickedColorNumber] = useState(0);
  const [filesAndPreviews, setFilesAndPreviews] = useState<FileWithPreview[]>(
    [],
  );
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  useEffect(() => {
    setValue("marker_color_id", pickedColorNumber);
  }, [pickedColorNumber, setValue]);

  return (
    <form noValidate className="w-11/12 h-full pb-8 " onSubmit={onSubmit}>
      <Text text="사진" type="essential" />
      <ImageUploader
        register={register}
        filesAndPreviews={filesAndPreviews}
        setFilesAndPreviews={setFilesAndPreviews}
      />
      <Text text="포스트 이름" type="essential" />
      <Input
        placeholder="사진 속 장소는 어디인가요? ex. 강문해변, 광안리"
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
      <Text text="주소" type="essential" />
      <Input
        placeholder="사진 속 주소는 어디인가요? ex. 강문해변, 광안리"
        name="taken_photo_address"
        register={register}
        rules={{
          required: "주소를 입력해주세요",
        }}
      />
      <Text text="날짜" type="essential" />
      <Controller
        control={control}
        name="taken_photo_date"
        render={({ field }) => (
          <Calendar
            selectedDate={field.value}
            setSelectedDate={field.onChange}
          />
        )}
      />
      <Text text="메모" />
      <Input
        placeholder="사진 속 장소에서의 추억을 자유롭게 적어주세요 !"
        register={register}
        name="memo"
        rules={{ maxLength: 100 }}
        classNames="text-start h-28"
      />
      <Text text="마커 색상" type="essential" />
      <input type="hidden" {...register("marker_color_id")} />
      <ColorMarker
        pickedColorNumber={pickedColorNumber}
        setPickedColorNumber={setPickedColorNumber}
      />
      <OrangeButton
        text="등록"
        classNames="absolute top-24 right-14 hover:border-none shadow hover:bg-primary-6 hover:text-white transition-colors duration-150 ease-in-out"
      />
    </form>
  );
}
