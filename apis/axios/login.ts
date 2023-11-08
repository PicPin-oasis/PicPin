import axiosInstance from "./instance";

interface loginProps {
  code: string;
}

export const login = async ({ code }: loginProps) => {
  try {
    const response = await axiosInstance.get(
      `/oauth2/code/kakao?code=${code}`,
      {},
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
