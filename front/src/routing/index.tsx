import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import { history } from 'store/rootReducer';
import { LoginContainer } from 'login/LoginContainer';
import { VerificationCode } from 'login/VerificationCode';
import { ProfileContainer } from 'Profile/ProfileContainer';
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from 'constants/RouterPath';

export const MainRouting: React.FC = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path={PUBLIC_ROUTES.login} component={LoginContainer} />
        <Route path={PUBLIC_ROUTES.callback} component={VerificationCode} />
        <Route path={PRIVATE_ROUTES.profile} component={ProfileContainer} />
      </Switch>
    </ConnectedRouter>
  </Provider>
);
