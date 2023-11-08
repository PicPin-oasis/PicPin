import axiosInstance from "./instance";
import { AccessTokenProps } from "@/types/types";

export const getUserInfo = async ({ accessToken }: AccessTokenProps) => {
  try {
    const response = await axiosInstance.get("/accounts/my-profile", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
