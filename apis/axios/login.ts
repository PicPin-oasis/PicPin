import axiosInstance from "./instance";

interface loginProps {
  code: string;
}

export const login = async ({ code }: loginProps) => {
  try {
    const response = await axiosInstance.get(
      `https://www.picpin.life/api/kakao/callback?code=${code}`,
      {},
    );

    if (response.data.accessToken) {
      localStorage.setItem("token", response.data.accessToken);
    }
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
