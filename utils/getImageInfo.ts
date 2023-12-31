import EXIF from "exif-js";
import { ImageInfoProps } from "@/types/types";

interface Props {
  numerator: number;
  denominator: number;
}
export const convertDMSArrayToDD = (dmsArray: Props[]) => {
  const degrees = dmsArray[0].numerator / dmsArray[0].denominator;
  const minutes = dmsArray[1].numerator / dmsArray[1].denominator;
  const seconds = dmsArray[2].numerator / dmsArray[2].denominator;

  return degrees + minutes / 60 + seconds / 3600;
};

// EXIF 데이터를 처리하는 함수
export const getImageInfo = (file: any): Promise<ImageInfoProps> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = function () {
      EXIF.getData(file, function (this: File) {
        const date = EXIF.getTag(this, "DateTimeOriginal");
        const latArray = EXIF.getTag(this, "GPSLatitude");
        const lonArray = EXIF.getTag(this, "GPSLongitude");

        // 위도와 경도를 십진수 형식으로 변환
        const lat = latArray ? convertDMSArrayToDD(latArray) : 0;
        const lon = lonArray ? convertDMSArrayToDD(lonArray) : 0;

        resolve({ date, lat, lon });
      });
    };
    reader.readAsDataURL(file);
  });
};
