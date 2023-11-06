export interface ButtonProps {
  text: string;
  onClick: () => void;
}
export interface LoginFormValue {
  email: string;
  password: string;
}
export interface User {
  email: string;
  nickname: string;
  profileImage: string;
}
export interface ModalWrapperProps {
  isModalOpen: Boolean;
  onCloseModal: () => void;
  children?: React.ReactElement;
}
export interface KaKaoLoginProps {
  onKakaoLogin?: () => void;
}
