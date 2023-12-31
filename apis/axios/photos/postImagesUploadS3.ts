import { useMutation, useQueryClient } from "react-query";
import axiosInstance from "../instance";
import { queryKeyFactory } from "../queryKeyFactory";

interface Props {
  upload_file_paths: string[];
  failed_upload_filenames: string[];
}

export const postImagesUploadS3 = async (formData: FormData) => {
  const { data } = await axiosInstance.post<Props>("photos/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};

export const usePostImagesUploadS3 = () => {
  const queryClient = useQueryClient();
  return useMutation(postImagesUploadS3, {
    onSuccess: () => {
      queryClient.invalidateQueries(queryKeyFactory.GET_PHOTOS());
    },
    onError: (err) => {
      console.log("err!!", err);
    },
  });
};
