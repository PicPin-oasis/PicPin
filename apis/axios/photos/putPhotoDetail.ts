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
  const res = await axiosInstance.put(`/photos/${photoId}`, {
    album_id: album_id,
    place_name: place_name,
    memo: memo,
    taken_photo_address: taken_photo_address,
    taken_photo_date: taken_photo_date,
  });
  console.log(res);
  return res.data;
};

export const usePutPhotoDetailMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(putPhotoDetail, {
    onSuccess: () => {
      console.log("성공!!");
      queryClient.invalidateQueries(["PHOTOS"]);
      queryClient.invalidateQueries(["PHOTODETAIL"]);
    },
    onError: (error) => {
      console.log("에러!! :: ", error);
    },
  });
};
