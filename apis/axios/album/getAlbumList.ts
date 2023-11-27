import { useQuery } from "react-query";
import axiosInstance from "../instance";
import { queryKeyFactory } from "../queryKeyFactory";

export const getAlbumList = async (accessToken: string) => {
  try {
    const response = await axiosInstance.get("/albums", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data.albums;
  } catch (error) {
    console.log(error);
  }
};

export const useGetAlbumList = (accessToken: string) => {
  return useQuery({
    queryKey: queryKeyFactory.GET_ALBUM_LIST(accessToken),
    queryFn: () => getAlbumList(accessToken),
  });
};
