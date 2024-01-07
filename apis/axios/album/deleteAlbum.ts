import { useMutation, useQueryClient } from "react-query";
import axiosInstance from "../instance";
import { queryKeyFactory } from "../queryKeyFactory";

const deleteAlbum = async (albumId: number) => {
  const { data } = await axiosInstance.delete(`/albums/${albumId}`);
  return data;
};

export const useDeleteAlbumMutation = (
  options: { onSuccess: () => void } | undefined,
) => {
  const queryClient = useQueryClient();
  return useMutation(deleteAlbum, {
    onSuccess: () => {
      if (options && options.onSuccess) {
        options.onSuccess();
      }
      queryClient.invalidateQueries(queryKeyFactory.GET_ALBUMS());
    },
    onError: (err) => {
      console.log("에러!:: ", err);
    },
  });
};
