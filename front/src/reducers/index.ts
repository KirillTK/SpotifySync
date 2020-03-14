import { createBrowserHistory } from 'history';
import { combineReducers } from 'redux';
import { profile, ProfileReducer } from './profile-reducer';

export const history = createBrowserHistory();

export type RootReducer = {
  profile: ProfileReducer;
};

export const rootReducer = combineReducers<RootReducer>({
  profile
});
