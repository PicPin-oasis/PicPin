import { useQuery } from "react-query";
import axiosInstance from "../instance";
import { queryKeyFactory } from "../queryKeyFactory";
import { AlbumProps } from "@/types/types";

export const getAlbums = async () => {
  const { data } = await axiosInstance.get<{ albums: AlbumProps[] }>("/albums");
  return data.albums;
};

export const useGetAlbums = () => {
  return useQuery({
    queryKey: queryKeyFactory.GET_ALBUMS(),
    queryFn: () => getAlbums(),
  });
};
