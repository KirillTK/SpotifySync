import React from 'react';
import { Switch, Redirect, Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'store';
import { history } from 'reducers';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { theme } from 'theme';
import { PUBLIC_ROUTES } from 'constants/router-path';
import { ProfileRoutes } from './ProfileRoutes';
import { LoginContainer, VerificationCode } from 'pages';

export const MainRouting: React.FC = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router history={history}>
        <Switch>
          <Redirect exact from={PUBLIC_ROUTES.root} to={PUBLIC_ROUTES.login} />
          <Route path={PUBLIC_ROUTES.login} component={LoginContainer} />
          <Route path={PUBLIC_ROUTES.callback} component={VerificationCode} />
          <ProfileRoutes />
        </Switch>
      </Router>
    </ThemeProvider>
  </Provider>
);
