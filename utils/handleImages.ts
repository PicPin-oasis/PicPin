import { SelectImageProps, DeleteImageProps } from "@/types/types";
import { getImageInformation } from "./getImageInformation";

export const selectImage = ({
  event,
  filesAndPreviews,
  setFilesAndPreviews,
}: SelectImageProps) => {
  return new Promise((resolve, reject) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];

      if (file) {
        // 이미지 정보(위치/날짜) 받아오는 함수
        // getImageInformation(file).then(info => {
        //   console.log(info);
        //   resolve(info);
        // });

        const previewUrl = URL.createObjectURL(file);
        setFilesAndPreviews((prev) => [...prev, { file, previewUrl }]);
        console.log(filesAndPreviews);
      }
      if (filesAndPreviews.length >= 10) {
        alert("사진은 최대 10장까지 업로드 가능합니다.");
      }
    } else {
      reject(new Error("No files selected"));
    }
  });
};

export const deleteImage = ({
  target,
  setFilesAndPreviews,
}: DeleteImageProps) => {
  setFilesAndPreviews((prev) =>
    prev.filter((item) => item.previewUrl !== target.previewUrl),
  );
};
