import React from 'react';
import { Grid } from '@material-ui/core';
import { BottomNavigationBar, ProfileBar } from 'components';

interface ProfileContainer {
  children: React.ReactElement;
}

export const ProfileContainer: React.FC<ProfileContainer> = ({
  children
}: ProfileContainer) => {
  return (
    <Grid
      container
      direction="column"
      justify="space-between"
      alignItems="center"
      className="full-height"
    >
      <ProfileBar />
      {children}
      <BottomNavigationBar />
    </Grid>
  );
};
