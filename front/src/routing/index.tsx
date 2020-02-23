import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { history } from '../store/rootReducer';
import { LoginContainer } from '../login/LoginContainer';

export const MainRouting = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="login">
            <LoginContainer />
          </Route>
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
};
