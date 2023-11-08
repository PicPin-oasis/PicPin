export interface ButtonProps {
  text: string;
  onClick: () => void;
  image?: string;
  classNames?: string;
}
export interface LoginFormProps {
  email: string;
  password: string;
}
export interface AccessTokenProps {
  accessToken: string;
}
export interface ChildrenProps {
  children?: React.ReactNode;
}
export interface KaKaoLoginProps {
  onKakaoLogin?: () => void;
}

export interface ModalWrapperProps {
  children?: React.ReactElement;
  onCloseModal: () => void;
}

export interface UserInformationSliceProps {
  username: string;
  profileImageUrl: string;
}
