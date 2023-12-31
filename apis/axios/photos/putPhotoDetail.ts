import { useMutation, useQueryClient } from "react-query";
import axiosInstance from "../instance";

interface Props {
  photoId: number;
  album_id?: number;
  place_name: string;
  memo?: string;
  taken_photo_address: string;
  taken_photo_date: string;
}

export const putPhotoDetail = async ({
  photoId,
  album_id,
  place_name,
  memo,
  taken_photo_address,
  taken_photo_date,
}: Props) => {
  const { data } = await axiosInstance.put(`/photos/${photoId}`, {
    album_id: album_id,
    place_name: place_name,
    memo: memo,
    taken_photo_address: taken_photo_address,
    taken_photo_date: taken_photo_date,
  });
  return data;
};

export const usePutPhotoDetailMutation = (
  options: { onSuccess: () => void } | undefined,
) => {
  const queryClient = useQueryClient();
  return useMutation(putPhotoDetail, {
    onSuccess: () => {
      if (options && options.onSuccess) {
        options.onSuccess();
      }
      queryClient.invalidateQueries(["PHOTOS"]);
      queryClient.invalidateQueries(["PHOTODETAIL"]);
    },
    onError: (error) => {
      console.log("에러!! :: ", error);
    },
  });
};
