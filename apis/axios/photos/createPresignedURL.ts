import axiosInstance from "../instance";
// 백 로직 변경으로 제거된 api
export interface PresignedUrlProps {
  cloud_front_host: string;
  key: string;
  upload_url: string;
}

export const createPresignedURL = async (filename: string) => {
  try {
    const response = await axiosInstance.post<PresignedUrlProps>(
      "/photos/upload-url",
      {
        image_name: filename,
      },
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
  return null;
};

export const createAllPresignedURLs = async (filenames: string[]) => {
  const urls = await Promise.all(
    filenames.map((filename) => createPresignedURL(filename)),
  );
  return urls.filter((input: unknown): input is PresignedUrlProps => !!input);
};
