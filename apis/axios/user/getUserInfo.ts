import axiosInstance from "../instance";

export const getUserInfo = async () => {
  try {
    const response = await axiosInstance.get("/accounts/my-profile");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
