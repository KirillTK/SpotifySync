export interface Song {
  name: string;
  id: string;
  artist: {
    id: string;
    name: string;
  };
  previewAlbum: {
    name: string;
    releaseDay: string;
    height: number;
    width: number;
    url: string;
  };
}