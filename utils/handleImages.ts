import { FileWithPreview, ImageInfoProps } from "@/types/types";
import { getImageInfo } from "./getImageInfo";
import { SetStateAction } from "react";

interface Props {
  event: React.ChangeEvent<HTMLInputElement>;
  setImageInfo: React.Dispatch<SetStateAction<ImageInfoProps>>;
  filesAndPreviews: FileWithPreview[];
  setFilesAndPreviews: React.Dispatch<SetStateAction<FileWithPreview[]>>;
}

interface DeleteImageProps {
  target: FileWithPreview;
  setFilesAndPreviews: React.Dispatch<SetStateAction<FileWithPreview[]>>;
}

export const selectImage = ({
  event,
  setImageInfo,
  filesAndPreviews,
  setFilesAndPreviews,
}: Props) => {
  return new Promise((resolve, reject) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const MAX_FILE_SIZE = 10 * 1024 * 1024;
      if (file.size > MAX_FILE_SIZE) {
        alert("파일 크기는 10MB를 초과할 수 없습니다.");
        return;
      }
      if (file) {
        // 이미지 정보(위치/날짜) 받아오는 함수
        getImageInfo(file).then((info) => {
          const formattedDate = info.date
            ? info.date.split(" ")[0].replace(/:/g, "-")
            : "";
          setImageInfo({
            date: formattedDate,
            lat: info.lat,
            lon: info.lon,
          });
          resolve(info);
        });

        const previewUrl = URL.createObjectURL(file);
        setFilesAndPreviews((prev) => [...prev, { file, previewUrl }]);
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
