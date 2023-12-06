import { useQuery } from "react-query";
import axiosInstance from "../instance";
import { queryKeyFactory } from "../queryKeyFactory";

interface PhotoCardsProps {
  id: number;
  expose_image_url: string;
}
interface Props {
  taken_photo_date: string;
  photo_cards: PhotoCardsProps[];
}

export const getPhotos = async () => {
  try {
    const response = await axiosInstance.get<{ photo_sections: Props[] }>(
      "/photo-sections",
    );
    return response.data.photo_sections;
  } catch (error) {
    console.log(error);
  }
};

export const useGetPhotos = () => {
  return useQuery({
    queryKey: queryKeyFactory.GET_PHOTOS(),
    queryFn: () => getPhotos(),
  });
};
