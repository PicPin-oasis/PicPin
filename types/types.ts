import { Dispatch, SetStateAction } from "react";
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
  lat: number;
  lon: number;
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

export interface GetImageInfoProps {
  date: string;
  lat: number | null;
  lon: number | null;
}

export interface ImageInfoProps extends GetImageInfoProps {
  bcode: number | null;
}

export interface Fraction {
  numerator: number;
  denominator: number;
}

export interface DaumPostCodePopupProps {
  setAddress: Dispatch<React.SetStateAction<string>>;
  setIsPopupOpen: Dispatch<React.SetStateAction<boolean>>;
  setImageInfo: Dispatch<SetStateAction<ImageInfoProps>>;
}

export interface PostPhotosProps {
  accessToken: string;
  place_name: string;
  memo?: string;
  x: string;
  y: string;
  bcode: number;
  taken_photo_address: string;
  taken_photo_date: string;
  photo_urls: string[];
  album_id?: number;
}

export interface SelectBoxProps {
  setAlbumId: Dispatch<SetStateAction<number>>;
}
export interface CustomSelectBoxProps extends SelectBoxProps {
  albumList: AlbumProps[];
}
