import { useQuery } from "react-query";
import axiosInstance from "../instance";
import { queryKeyFactory } from "../queryKeyFactory";
export interface PhotoDetailProps {
  id: number;
  place_name: string;
  memo: string;
  expose_image_url: string;
  taken_photo_date: string;
  taken_photo_address: string;
}

export const getPhotoDetail = async (photoId: number) => {
  const { data } = await axiosInstance.get<PhotoDetailProps>(
    `/photos/${photoId}`,
  );
  return data;
};

export const useGetPhotoDetail = (photoId: number) => {
  return useQuery({
    queryKey: queryKeyFactory.GET_PHOTODETAIL(photoId),
    queryFn: () => getPhotoDetail(photoId),
  });
};
