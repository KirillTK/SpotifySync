import React from 'react';
import { Switch, Redirect, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'store';
import { history } from 'reducers';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { theme } from 'theme';
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from 'constants/router-path';
import { LoginContainer } from 'pages/Login/LoginContainer';
import { VerificationCode } from 'pages/Login/VerificationCode';
import { ProfileContainer } from 'pages/Profile/ProfileContainer';
import { Route } from './Route';

export const MainRouting: React.FC = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router history={history}>
        <Switch>
          <Redirect exact from={PUBLIC_ROUTES.root} to={PUBLIC_ROUTES.login} />
          <Route path={PUBLIC_ROUTES.login} component={LoginContainer} />
          <Route path={PUBLIC_ROUTES.callback} component={VerificationCode} />
          <Route path={PRIVATE_ROUTES.profile} component={ProfileContainer} />
        </Switch>
      </Router>
    </ThemeProvider>
  </Provider>
);
