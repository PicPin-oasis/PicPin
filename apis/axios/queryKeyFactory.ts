export const queryKeyFactory = {
  GET_ALBUMS: (): [string] => ["ALBUMS"],
  GET_ALBUMDETAIL: (albumId: number) => ["ALBUMDETAIL", albumId],
  GET_PHOTOS: (): [string] => ["PHOTOS"],
  GET_PHOTODETAIL: (photoId: number) => ["PHOTODETAIL", photoId],
};
