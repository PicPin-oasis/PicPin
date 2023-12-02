export const queryKeyFactory = {
  GET_ALBUMS: (accessToken: string): [string, string] => [
    "ALBUMS",
    `${accessToken}`,
  ],
  GET_PHOTOS: (accessToken: string): [string, string] => [
    "PHOTOS",
    `${accessToken}`,
  ],
};
