import { useMutation, useQueryClient } from "react-query";
import axiosInstance from "../instance";

interface Props {
  album_id?: number;
  place_name: string;
  memo?: string;
  taken_photo_address: string;
  taken_photo_date: string;
  photo_urls: string[];
}

export const postPhotos = async ({
  album_id,
  place_name,
  memo,
  taken_photo_address,
  taken_photo_date,
  photo_urls,
}: Props) => {
  const { data } = await axiosInstance.post("/photos", {
    album_id: album_id,
    place_name: place_name,
    memo: memo,
    taken_photo_address: taken_photo_address,
    taken_photo_date: taken_photo_date,
    photo_urls: photo_urls,
  });
  return data;
};

export const usePostPhotosMutation = (
  options: { onSuccess: () => void } | undefined,
) => {
  const queryClient = useQueryClient();
  return useMutation(postPhotos, {
    onSuccess: () => {
      if (options && options.onSuccess) {
        options.onSuccess();
      }
      console.log("성공!!");
      queryClient.invalidateQueries(["PHOTOS"]);
    },
    onError: (error) => {
      console.log("에러!! :: ", error);
    },
  });
};
