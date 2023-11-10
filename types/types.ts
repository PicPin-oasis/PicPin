import { SetStateAction } from "react";
import { UseFormRegister, RegisterOptions } from "react-hook-form";

export interface TextProps {
  text: string;
  type?: string;
  classNames?: string;
}
export interface ButtonProps {
  text?: string;
  onClick?: () => void;
  image?: string;
  classNames?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageClassNames?: string;
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
  title?: string;
  children?: React.ReactElement;
  onCloseModal: () => void;
  classNames?: string;
}

export interface UserInformationSliceProps {
  username: string;
  profileImageUrl: string;
}

export interface UploaderButtonProps {
  handleOpenModal: () => void;
}

export interface PostFormProps {
  images: string;
  title: string;
  taken_photo_address: string;
  taken_photo_date: string;
  memo?: string;
  marker_color_id: number;
  album?: string;
}

export interface CalendarProps {
  selectedDate: Date | null;
  setSelectedDate: (date: Date | null) => void;
}

export interface ColorMarkerProps {
  pickedColorNumber: number;
  setPickedColorNumber: (value: number) => void;
}

export interface ColorPickerProps extends ColorMarkerProps {
  color: string;
  index: number;
}

export interface InputProps {
  classNames?: string;
  placeholder: string;
  register: UseFormRegister<PostFormProps>;
  name: keyof PostFormProps;
  rules?: RegisterOptions;
}

export interface ImageUploaderProps {
  register: UseFormRegister<PostFormProps>;
}

export interface PreviewImagesProps {
  previewImage: string[];
  handleDeleteImage: (value: string) => void;
}

export interface SelectImageProps {
  event: React.ChangeEvent<HTMLInputElement>;
  previewImage: string[];
  setPreviewImage: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface DeleteImageProps {
  url: string;
  setPreviewImage: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface getImageAddressProps {
  longitude: string;
  latitude: string;
}
