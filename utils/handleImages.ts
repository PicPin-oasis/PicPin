import { SelectImageProps, DeleteImageProps } from "@/types/types";
// import { getImageInformation } from "./getImageInformation";

export const selectImage = ({
  event,
  previewImage,
  setPreviewImage,
}: SelectImageProps) => {
  return new Promise((resolve, reject) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];

      if (file) {
        // getImageInformation(file).then(info => {
        //   console.log(info);
        //   resolve(info);
        // });
        const imageUrl = URL.createObjectURL(file);
        setPreviewImage((prev) => [...prev, imageUrl]);
      }
      if (previewImage.length >= 10) {
        alert("사진은 최대 10장까지 업로드 가능합니다.");
      }
    } else {
      reject(new Error("No files selected"));
    }
  });
};

export const deleteImage = ({ url, setPreviewImage }: DeleteImageProps) => {
  setPreviewImage((prevImages) => prevImages.filter((item) => item !== url));
};
