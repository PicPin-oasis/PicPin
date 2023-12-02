import { useQuery } from "react-query";
import axiosInstance from "../instance";
import { queryKeyFactory } from "../queryKeyFactory";
import { AlbumProps } from "@/types/types";

export const getAlbums = async (accessToken: string) => {
  try {
    const response = await axiosInstance.get<{ albums: AlbumProps[] }>(
      "/albums",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    return response.data.albums;
  } catch (error) {
    console.log(error);
  }
};

export const useGetAlbums = (accessToken: string) => {
  return useQuery({
    queryKey: queryKeyFactory.GET_ALBUMS(accessToken),
    queryFn: () => getAlbums(accessToken),
  });
};
