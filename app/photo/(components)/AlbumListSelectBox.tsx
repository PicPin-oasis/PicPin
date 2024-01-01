"use client";

import { Dispatch, SetStateAction } from "react";
import Error from "@/components/common/Error";
import Loading from "@/components/common/Loading";
import { SelectBox } from "@/components/common/SelectBox";
import { useGetAlbums } from "@/apis/axios/album/getAlbums";
import { AlbumProps, PhotoUploaderProps } from "@/types/types";

interface Props {
  setSubmitInfo: Dispatch<SetStateAction<PhotoUploaderProps>>;
  defaultTitle?: string;
}

const AlbumListSelectBox = ({ setSubmitInfo, defaultTitle }: Props) => {
  const { data, isLoading, isError } = useGetAlbums();

  if (isLoading) return <Loading />;
  if (isError) return <Error text="잘못된 접근입니다. 다시 시도해주세요." />;
  return (
    <SelectBox
      data={(data ?? ([] as Array<AlbumProps>)).map((album) => ({
        title: album.title,
        payload: album,
      }))}
      initialTitie={defaultTitle ? defaultTitle : "앨범을 선택해주세요"}
      emptyTitle="앨범이 없습니다."
      onChange={defaultTitle ? undefined : setSubmitInfo}
    />
  );
};

export default AlbumListSelectBox;
