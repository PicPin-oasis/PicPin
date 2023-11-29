import axios from "axios";
import { GetImageAddressProps } from "@/types/types";

export const getImageBcode = async ({ lat, lon }: GetImageAddressProps) => {
  try {
    const response = await axios.get(
      `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${lon}&y=${lat}&input_coord=WGS84`,
      {
        headers: {
          Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_REST_API_KEY}`,
        },
      },
    );
    return response.data.documents[0];
  } catch (error) {
    console.log(error);
  }
};
