import { Reducer } from 'redux';
import {
  SetSearchingSongsAction,
  SET_SEARCHING_SONGS
} from 'actions/spotify-actions';
import { Song } from 'interfaces/Song';

export interface SongsReducer {
  searchSongsList: {
    songs: Song[];
    offset: number;
  };
}

export const initialState = {
  searchSongsList: {
    songs: [],
    offset: 0
  }
};

type SongsActions = SetSearchingSongsAction;

export const songs: Reducer<SongsReducer, SongsActions> = (
  state = initialState,
  action: SongsActions
) => {
  if (action.type === SET_SEARCHING_SONGS) {
    const { songs, offset } = action;
    return {
      ...state,
      searchSongsList: { songs, offset }
    };
  }
  return state;
};
