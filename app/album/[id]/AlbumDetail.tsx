"use client";

import { AlbumDetailProps } from "@/apis/axios/album/getAlbumDetail";
import InfoText from "../(components)/InfoText";
import ActionButtons from "./ActionButtons";
import PhotoList from "./PhotoList";
import Text from "@/components/common/Text";
import { useAppSelector } from "@/redux/store";
import AddAlbumForm from "../(components)/AddAlbumForm";

interface Props {
  data: AlbumDetailProps;
  albumId: number;
  handleTogglePhotoForm: () => void;
}

const AlbumDetail = ({ data, albumId, handleTogglePhotoForm }: Props) => {
  const { title, startDate, endDate, photoCount, photos } = data;
  const { isEditing, type } = useAppSelector((state) => state.editStatus);
  return (
    <div className="w-full h-full box-border p-4">
      {isEditing && type === "album" ? (
        <AddAlbumForm />
      ) : (
        <>
          <div className="flex justify-between">
            <div className="flex flex-col gap-2">
              {startDate && endDate && (
                <Text text={`${startDate} ~ ${endDate}`} />
              )}
              <Text text={title} classNames="text-lg" />
              <InfoText
                count={photoCount}
                text="의 사진이 있어요."
                fontSize="text-sm"
              />
            </div>
            <ActionButtons albumId={albumId} />
          </div>
          <PhotoList
            photos={photos}
            handleTogglePhotoForm={handleTogglePhotoForm}
          />
        </>
      )}
    </div>
  );
};
export default AlbumDetail;
