import React from 'react';
import { Switch, Redirect, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'store';
import { history } from 'reducers';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { theme } from 'theme';
import { PUBLIC_ROUTES } from 'constants/router-path';
import { ProfileRoutes } from './ProfileRoutes';
import { PublicRoutes } from './PublicRoutes';

export const MainRouting: React.FC = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router history={history}>
        <Switch>
          <Redirect exact from={PUBLIC_ROUTES.root} to={PUBLIC_ROUTES.login} />
          <ProfileRoutes />
          <PublicRoutes />
        </Switch>
      </Router>
    </ThemeProvider>
  </Provider>
);
