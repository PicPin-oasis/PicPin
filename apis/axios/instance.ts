import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.picpin.life",
  headers: {
    "content-type": "application/x-www-form-urlencoded;charset=utf-8",
  },
  withCredentials: true,
});

// axiosInstance.interceptors.request.use(
//   config => {
//     // 요청을 보내기 전에 수행할 일
//     // 예: 토큰을 헤더에 추가하는 로직
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   error => {
//     // 요청 에러 처리
//     return Promise.reject(error);
//   }
// );

// axiosInstance.interceptors.response.use(
//   response => {
//     // 응답 데이터를 처리
//     return response;
//   },
//   error => {
//     // 응답 에러 처리
//     // 예: 401 상태 코드일 경우 로그아웃 처리
//     if (error.response && error.response.status === 401) {
//       // 로그아웃 처리 로직
//       // 예: 토큰 제거 및 로그인 페이지로 리디렉트
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
