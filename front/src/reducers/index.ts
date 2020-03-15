import { createBrowserHistory } from 'history';
import { combineReducers } from 'redux';
import { profile, ProfileReducer } from './profile-reducer';
import { songs, SongsReducer } from './songs-reducer';

export const history = createBrowserHistory();

export type RootReducer = {
  profile: ProfileReducer;
  songs: SongsReducer;
};

export const rootReducer = combineReducers<RootReducer>({
  profile,
  songs
});
