import axios from "axios";

interface Props {
  lat: number;
  lon: number;
}

export const getImageAddress = async ({ lat, lon }: Props) => {
  const response = await axios.get(
    `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lon}&y=${lat}&input_coord=WGS84`,
    {
      headers: {
        Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_REST_API_KEY}`,
      },
    },
  );
  return response.data.documents[0];
};
