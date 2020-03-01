import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import { history } from 'store/rootReducer';
import { LoginContainer } from 'pages/Login/LoginContainer';
import { VerificationCode } from 'pages/Login/VerificationCode';
import { ProfileContainer } from 'pages/Profile/ProfileContainer';
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from 'constants/RouterPath';
import { ThemeProvider } from '@material-ui/core';
import { theme } from 'theme';
import App from 'App';

export const MainRouting: React.FC = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path={PUBLIC_ROUTES.root} component={App} />
          <Route path={PUBLIC_ROUTES.login} component={LoginContainer} />
          <Route path={PUBLIC_ROUTES.callback} component={VerificationCode} />
          <Route path={PRIVATE_ROUTES.profile} component={ProfileContainer} />
        </Switch>
      </ConnectedRouter>
    </ThemeProvider>
  </Provider>
);
