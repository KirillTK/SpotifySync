import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

export const history = createBrowserHistory();

export const rootReducer = combineReducers({
  router: connectRouter(history)
});
