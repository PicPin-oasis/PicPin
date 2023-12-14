import { useQuery } from "react-query";
import axiosInstance from "../instance";
import { queryKeyFactory } from "../queryKeyFactory";
interface Props {
  id: number;
  place_name: string;
  memo: string;
  expose_image_url: string;
  taken_photo_date: string;
}
export const getPhotoDetail = async (photoId: number) => {
  const res = await axiosInstance.get<Props>(`/photos/${photoId}`);
  return res.data;
};

export const useGetPhotoDetail = (photoId: number) => {
  return useQuery({
    queryKey: queryKeyFactory.GET_PHOTODETAIL(),
    queryFn: () => getPhotoDetail(photoId),
  });
};