"use client";

import { useGetAlbumList } from "@/apis/axios/album/getAlbumList";
import { SelectBox } from "@/components/common/SelectBox";
import { useAppSelector } from "@/redux/store";
import { AlbumProps, ChangeSubmitInfoProps } from "@/types/types";

interface Props {
  handleChangeSubmitInfo: ({
    targetKey,
    changeValue,
  }: ChangeSubmitInfoProps) => void;
}

export const AlbumListSelectBox = ({ handleChangeSubmitInfo }: Props) => {
  const { accessToken } = useAppSelector((state) => state.accessToken);
  const { data, isLoading, isError } = useGetAlbumList(accessToken);

  if (isLoading) return <div>로딩 중... </div>;
  if (isError) return <div>잘못된 접근입니다 !</div>;

  return (
    <SelectBox
      data={(data ?? ([] as Array<AlbumProps>)).map((album) => ({
        title: album.title,
        payload: album,
      }))}
      initialTitie="앨범을 선택해주세요"
      emptyTitle="앨범이 없습니다."
      onChange={handleChangeSubmitInfo}
    />
  );
};
