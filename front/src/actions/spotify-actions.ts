import { Song } from 'interfaces/Song';

export const FIND_SONGS = '@@SPOTIFY/FIND_SONGS';
export const SET_SEARCHING_SONGS = '@@SPOTIFY/SET_SEARCHING_SONGS';
export const PLAY_MUSIC = '@@SPOTIFY/PLAY_MUSIC';

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

export interface PlaySongAction {
  type: string;
  songName: string;
  id: string;
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

export const playSong = (songName: string, id: string): PlaySongAction => ({
  type: PLAY_MUSIC,
  songName,
  id
});
