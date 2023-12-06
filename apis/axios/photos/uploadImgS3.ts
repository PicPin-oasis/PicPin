import axios from "axios";
import { PresignedUrlProps } from "./createPresignedURL";

interface Props {
  presignedUrl: string;
  uploadFile: File;
}

export const uploadImgS3 = async ({ presignedUrl, uploadFile }: Props) => {
  await axios
    .put(presignedUrl, uploadFile, {
      headers: {
        "Content-Type": uploadFile.type, // 업로드할 파일의 콘텐츠 유형 지정
      },
    })
    .then((response) => console.log("res:: ", response))
    .catch((error) => console.error("err:: ", error));
};

export const uploadAllImgsS3 = async (presignedUrls: Props[]) => {
  const urls = await Promise.all(
    presignedUrls.map((item) =>
      uploadImgS3({
        presignedUrl: item.presignedUrl,
        uploadFile: item.uploadFile,
      }),
    ),
  );
  return urls.filter((input: unknown): input is PresignedUrlProps => !!input);
};
