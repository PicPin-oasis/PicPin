import { useQuery } from "react-query";
import axiosInstance from "../instance";
import { queryKeyFactory } from "../queryKeyFactory";

interface PhotosProps {
  id: number;
  imageUrl: string;
}
export interface AlbumDetailProps {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
  photoCount: number;
  photos: PhotosProps[];
}

export const getAlbumDetail = async (albumId: number) => {
  const { data } = await axiosInstance.get<AlbumDetailProps>(
    `/albums/${albumId}`,
  );
  return data;
};

export const useGetAlbumDetail = (albumId: number) => {
  return useQuery({
    queryKey: queryKeyFactory.GET_ALBUMDETAIL(albumId),
    queryFn: () => getAlbumDetail(albumId),
  });
};
