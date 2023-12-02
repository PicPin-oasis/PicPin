import { AccessTokenProps } from "@/types/types";
import axiosInstance from "../instance";

interface PresignedUrlProps {
  cloud_front_host: string;
  key: string;
  upload_url: string;
}
interface CreatePresignedURLProps extends AccessTokenProps {
  filename: string;
}

interface CreateAllPresignedURLsProps extends AccessTokenProps {
  filenames: string[];
}

export const createPresignedURL = async ({
  filename,
  accessToken,
}: CreatePresignedURLProps) => {
  try {
    const response = await axiosInstance.post<PresignedUrlProps>(
      "/photos/upload-url",
      {
        image_name: filename,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
  return null;
};

export const createAllPresignedURLs = async ({
  filenames,
  accessToken,
}: CreateAllPresignedURLsProps) => {
  const urls = await Promise.all(
    filenames.map((filename: string) =>
      createPresignedURL({ filename, accessToken }),
    ),
  );
  return urls.filter((input: unknown): input is PresignedUrlProps => !!input);
};
