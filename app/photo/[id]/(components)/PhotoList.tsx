import axiosInstance from "@/apis/axios/instance";
import { GetPhotosProps } from "@/apis/axios/photos/getPhotos";
import { PhotoCard } from "../../(components)/PhotoCard";

export const PhotoList = async () => {
  const { data } = await axiosInstance.get<{
    photo_sections: GetPhotosProps[];
  }>("/photo-sections");
  return (
    <div className="w-full flex overflow-x-auto gap-2 py-2">
      {data.photo_sections.map((item) =>
        item.photo_cards.map((photo) => (
          <PhotoCard
            src={photo.expose_image_url}
            key={photo.id}
            id={photo.id.toString()}
          />
        )),
      )}
    </div>
  );
};
