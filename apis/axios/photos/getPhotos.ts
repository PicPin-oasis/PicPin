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

export const getPhotos = async (accessToken: string) => {
  try {
    const response = await axiosInstance.get<{ photo_sections: Props[] }>(
      "/photo-sections",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    return response.data.photo_sections;
  } catch (error) {
    console.log(error);
  }
};

export const useGetPhotos = (accessToken: string) => {
  return useQuery({
    queryKey: queryKeyFactory.GET_PHOTOS(accessToken),
    queryFn: () => getPhotos(accessToken),
  });
};
