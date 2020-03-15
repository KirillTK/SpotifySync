import { User } from 'interfaces/User';
import { RootReducer } from 'reducers';
import { SearchSongsList, SongsReducer } from 'reducers/songs-reducer';

// USER

export const getUser = (state: RootReducer): User | undefined =>
  state.profile.user;

// SPOTIFY

export const getSongsState = (state: RootReducer): SongsReducer => state.songs;

export const getSearchTrackList = (state: RootReducer): SearchSongsList =>
  getSongsState(state).searchSongsList;
