import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import { profile } from './profile-reducer';

export const history = createBrowserHistory();

export const rootReducer = combineReducers({
  router: connectRouter(history),
  profile
});
