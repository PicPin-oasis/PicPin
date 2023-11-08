import ModalWrapper from "../common/ModalWrapper";
import KaKaoLoginButton from "./KaKaoLoginButton";
import { ModalWrapperProps } from "@/types/types";

const KakaoLoginModal = ({ onCloseModal }: ModalWrapperProps) => {
  const handleKakaoLogin = () => {
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}&response_type=code`;
    window.location.href = kakaoURL;
  };
  return (
    <ModalWrapper onCloseModal={onCloseModal}>
      <KaKaoLoginButton onKakaoLogin={handleKakaoLogin} />
    </ModalWrapper>
  );
};

export default KakaoLoginModal;
