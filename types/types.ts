import { Dispatch, SetStateAction } from "react";
import { UseFormRegister, RegisterOptions } from "react-hook-form";
import { Address } from "react-daum-postcode";

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

export interface PhotoFormProps {
  images: string;
  title: string;
  taken_photo_address: string;
  taken_photo_date: string;
  memo?: string;
  album?: string;
}

export interface CalendarProps {
  imageInfo: ImageInfoProps;
  selectedDate: string;
  setSelectedDate: (value: string) => void;
}

export interface InputProps {
  classNames?: string;
  placeholder: string;
  register: UseFormRegister<PhotoFormProps>;
  name: keyof PhotoFormProps;
  rules?: RegisterOptions;
}

export interface FileWithPreview {
  file: File;
  previewUrl: string;
}

export interface ImageUploaderProps {
  register: UseFormRegister<PhotoFormProps>;
  setImageInfo: Dispatch<SetStateAction<ImageInfoProps>>;
  filesAndPreviews: FileWithPreview[];
  setFilesAndPreviews: Dispatch<SetStateAction<FileWithPreview[]>>;
}

export interface PreviewImagesProps {
  filesAndPreviews: FileWithPreview[];
  handleDeleteImage: (value: FileWithPreview) => void;
}

export interface SelectImageProps {
  event: React.ChangeEvent<HTMLInputElement>;
  setImageInfo: Dispatch<SetStateAction<ImageInfoProps>>;
  filesAndPreviews: FileWithPreview[];
  setFilesAndPreviews: Dispatch<SetStateAction<FileWithPreview[]>>;
}

export interface DeleteImageProps {
  target: FileWithPreview;
  setFilesAndPreviews: Dispatch<SetStateAction<FileWithPreview[]>>;
}

export interface GetImageAddressProps {
  longitude: string;
  latitude: string;
}

export interface CreatePresignedURLProps {
  filename: string;
  accessToken: string;
}

export interface CreateAllPresignedURLsProps {
  filenames: string[];
  accessToken: string;
}

export interface UploaderButtonProps {
  onClick: () => void;
}

export interface TextareaProps {
  classNames?: string;
  placeholder: string;
  register: UseFormRegister<PhotoFormProps>;
  name: keyof PhotoFormProps;
  rules?: RegisterOptions;
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

export interface AlbumProps {
  id: number;
  title: string;
  cover_image_url: string;
}

export interface ImageInfoProps {
  date: string;
  lat: number;
  lon: number;
}

export interface Fraction {
  numerator: number;
  denominator: number;
}

export interface DaumPostCodePopupProps {
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  setIsPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
