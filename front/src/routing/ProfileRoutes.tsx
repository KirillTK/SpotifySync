import React from 'react';
import { PRIVATE_ROUTES } from 'constants/router-path';
import { Route } from 'react-router-dom';
import { ProfileContainer, Search } from 'pages';

export const ProfileRoutes: React.FC = () => {
  return (
    <Route exact path={[PRIVATE_ROUTES.index, PRIVATE_ROUTES.search]}>
      <ProfileContainer>
        <Route path={PRIVATE_ROUTES.search} component={Search} />
      </ProfileContainer>
    </Route>
  );
};
