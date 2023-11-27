export const queryKeyFactory = {
  GET_ALBUM_LIST: (accessToken: string): [string, string] => [
    "ALBUM_LIST",
    `${accessToken}`,
  ],
};
