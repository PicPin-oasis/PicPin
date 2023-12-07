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

export interface ModalWrapperProps {
  title?: string;
  children?: React.ReactElement;
  onCloseModal: () => void;
  classNames?: string;
}

export interface PhotoFormProps {
  images: Array<string>;
  title: string;
  taken_photo_address: string;
  taken_photo_date: string;
  memo?: string;
  album?: string;
}

export interface FileWithPreview {
  file: File;
  previewUrl: string;
}

export interface PreviewImagesProps {
  filesAndPreviews: FileWithPreview[];
  handleDeleteImage: (value: FileWithPreview) => void;
}

export interface AlbumProps {
  id: number;
  title: string;
  cover_image_url: string;
}

export interface ImageInfoProps {
  date: string;
  lat: number | null;
  lon: number | null;
}

export interface PhotoUploaderProps {
  address: string;
  date: string;
  albumId?: number;
}
