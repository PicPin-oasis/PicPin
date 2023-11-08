export interface ButtonProps {
  text: string;
  onClick: () => void;
  image?: string;
}
export interface LoginFormValue {
  email: string;
  password: string;
}
export interface User {
  access_token: string;
}
export interface ChildrenProps {
  children?: React.ReactElement;
}
export interface KaKaoLoginProps {
  onKakaoLogin?: () => void;
}

export interface ModalWrapperProps {
  children?: React.ReactElement;
  onCloseModal: () => void;
}
