"use client";

import { useGetAlbumList } from "@/apis/axios/album/getAlbumList";
import { useAppSelector } from "@/redux/store";
import { AlbumProps } from "@/types/types";
import { useEffect, useState } from "react";
import { CustomSelectBox } from "../../../components/common/CustomSelectBox";

export const SelectBox = () => {
  const { accessToken } = useAppSelector((state) => state.accessToken);
  const { data, isLoading, error } = useGetAlbumList(accessToken);
  const [albumList, setAlbumList] = useState([]);
  useEffect(() => {
    if (accessToken && data) {
      console.log(data);
      console.log(albumList);
      const albumTitles = data.map((album: AlbumProps) => album.title);
      setAlbumList(albumTitles);
    }
  }, [accessToken, data]);

  if (isLoading) return <div>로딩 중... </div>;
  if (error) return <div>잘못된 접근입니다 !</div>;

  return <CustomSelectBox albumList={albumList} />;
};
