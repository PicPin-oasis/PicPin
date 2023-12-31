import { useQuery } from "react-query";
import axiosInstance from "../instance";
import { queryKeyFactory } from "../queryKeyFactory";

interface PhotoCardsProps {
  id: number;
  expose_image_url: string;
}
export interface GetPhotosProps {
  taken_photo_date: string;
  photo_cards: PhotoCardsProps[];
}

export const getPhotos = async () => {
  const { data } = await axiosInstance.get<{
    photo_sections: GetPhotosProps[];
  }>("/photo-sections");

  return data.photo_sections;
};

export const useGetPhotos = () => {
  return useQuery({
    queryKey: queryKeyFactory.GET_PHOTOS(),
    queryFn: () => getPhotos(),
  });
};
