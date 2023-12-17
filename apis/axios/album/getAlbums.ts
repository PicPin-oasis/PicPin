import { useQuery } from "react-query";
import axiosInstance from "../instance";
import { queryKeyFactory } from "../queryKeyFactory";
import { AlbumProps } from "@/types/types";

export const getAlbums = async () => {
  try {
    const response = await axiosInstance.get<{ albums: AlbumProps[] }>(
      "/albums",
    );
    return response.data.albums;
  } catch (error) {
    console.log(error);
  }
};

export const useGetAlbums = () => {
  return useQuery({
    queryKey: queryKeyFactory.GET_ALBUMS(),
    queryFn: () => getAlbums(),
  });
};
