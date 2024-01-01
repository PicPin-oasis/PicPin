"use client";

import { useState } from "react";
import Loading from "@/components/common/Loading";
import Error from "@/components/common/Error";
import AddAlbumButton from "./AddAlbumButton";
import AlbumList from "./AlbumList";
import { useGetAlbums } from "@/apis/axios/album/getAlbums";
import AddAlbumForm from "./AddAlbumForm";
import InfoText from "./InfoText";

const AlbumPageLayout = () => {
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const handleToggleAlbumForm = () => {
    setIsFormOpen(!isFormOpen);
  };
  const { data, isLoading, isError } = useGetAlbums();
  console.log(data);

  if (isLoading) return <Loading />;
  if (isError || !data)
    return <Error text="잘못된 접근입니다. 다시 시도해주세요." />;

  return (
    <div className="grow w-full h-full flex flex-col justify-center items-center gap-1">
      {isFormOpen ? (
        <AddAlbumForm handleToggleAlbumForm={handleToggleAlbumForm} />
      ) : (
        <div className="w-full box-border px-4 ">
          <div className="flex justify-between">
            <AddAlbumButton onClick={handleToggleAlbumForm} />
            <InfoText count={data.length + 1} text="의 앨범을 만들었어요!" />
          </div>
          <AlbumList data={data} />
        </div>
      )}
    </div>
  );
};
export default AlbumPageLayout;
