import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { BottomNavigationBar, ProfileBar } from 'components';
import { getSongsByName } from 'api/api';

interface ProfileContainer {
  children: React.ReactElement;
}

export const ProfileContainer: React.FC<ProfileContainer> = ({
  children
}: ProfileContainer) => {
  useEffect(() => {
    getSongsByName('Nirvana').then((res) => console.log(res));
  }, []);

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
