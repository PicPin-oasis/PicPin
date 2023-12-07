import { useMutation, useQueryClient } from "react-query";
import axiosInstance from "../instance";

interface Props {
  upload_file_paths: string[];
  failed_upload_filenames: string[];
}

export const postPhotosUploadS3 = async (formData: FormData) => {
  const res = await axiosInstance.post<Props>("photos/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

export const usePostPhotosUploadS3 = () => {
  const queryClient = useQueryClient();
  return useMutation(postPhotosUploadS3, {
    onSuccess: () => {
      queryClient.invalidateQueries(["PHOTOS"]);
    },
    onError: (err) => {
      console.log("err!!", err);
    },
  });
};
