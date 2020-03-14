import { Route } from 'react-router';
import { PUBLIC_ROUTES } from 'constants/router-path';
import { LoginContainer, VerificationCode } from 'pages';
import React from 'react';

export const PublicRoutes: React.FC = () => {
  return (
    <>
      <Route path={PUBLIC_ROUTES.login} component={LoginContainer} />
      <Route path={PUBLIC_ROUTES.callback} component={VerificationCode} />
    </>
  );
};
