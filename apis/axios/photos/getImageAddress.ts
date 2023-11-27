import axiosInstance from "../instance";
import { GetImageAddressProps } from "@/types/types";

export const getImageAddress = async ({
  longitude,
  latitude,
}: GetImageAddressProps) => {
  try {
    const response = await axiosInstance.get(
      `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${longitude}&y=${latitude}`,
      {
        headers: {
          Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_REST_API_KEY}`,
        },
      },
    );
    return response.data.documents[0].address;
  } catch (error) {
    console.log(error);
  }
};
