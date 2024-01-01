import { useMutation, useQueryClient } from "react-query";
import axiosInstance from "../instance";
import { queryKeyFactory } from "../queryKeyFactory";

interface Props {
  title: string;
  cover_image_url: string;
}

export const postAlbum = async ({ title, cover_image_url }: Props) => {
  const { data } = await axiosInstance.post("/albums", {
    title: title,
    cover_image_url: cover_image_url,
  });
  return data;
};

export const usePostAlbumMutation = (
  options?: { onSuccess: () => void } | undefined,
) => {
  const queryClient = useQueryClient();
  return useMutation(postAlbum, {
    onSuccess: () => {
      if (options && options.onSuccess) {
        options.onSuccess();
      }
      console.log("성공!!");
      queryClient.invalidateQueries(queryKeyFactory.GET_ALBUMS());
    },
    onError: (error) => {
      console.log("에러!! :: ", error);
    },
  });
};
