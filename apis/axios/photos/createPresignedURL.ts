import axiosInstance from "../instance";
import {
  CreatePresignedURLProps,
  CreateAllPresignedURLsProps,
} from "@/types/types";

export const createPresignedURL = async ({
  filename,
  accessToken,
}: CreatePresignedURLProps) => {
  try {
    const response = await axiosInstance.post("/photos/upload-url", {
      image_name: filename,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
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
  return urls;
};
