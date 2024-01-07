import { useMutation, useQueryClient } from "react-query";
import axiosInstance from "../instance";
import { queryKeyFactory } from "../queryKeyFactory";

interface Props {
  albumId: number;
  title: string;
  cover_image_url: string;
}

export const putAlbum = async ({ title, cover_image_url, albumId }: Props) => {
  const { data } = await axiosInstance.put(`/photos/${albumId}`, {
    title: title,
    cover_image_url: cover_image_url,
  });
  return data;
};

export const usePutAlbumMutation = (
  options: { onSuccess: () => void } | undefined,
) => {
  const queryClient = useQueryClient();
  return useMutation(putAlbum, {
    onSuccess: () => {
      if (options && options.onSuccess) {
        options.onSuccess();
      }
      queryClient.invalidateQueries(queryKeyFactory.GET_ALBUMS());
    },
    onError: (error) => {
      console.log("에러!! :: ", error);
    },
  });
};
