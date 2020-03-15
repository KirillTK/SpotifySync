import { Song } from 'interfaces/Song';

export const FIND_SONGS = '@@SPOTIFY/FIND_SONGS';
export const SET_SEARCHING_SONGS = '@@SPOTIFY/SET_SEARCHING_SONGS';

export interface FindSongsAction {
  type: string;
  query: {
    q: string;
    offset: number;
  };
}

export interface SetSearchingSongsAction {
  type: string;
  songs: Song[];
  offset: number;
}

export const findSongs = (q: string, offset: number): FindSongsAction => ({
  type: FIND_SONGS,
  query: {
    q,
    offset
  }
});

export const setSearchSongs = (
  songs: Song[],
  offset: number
): SetSearchingSongsAction => ({
  type: SET_SEARCHING_SONGS,
  songs,
  offset
});
