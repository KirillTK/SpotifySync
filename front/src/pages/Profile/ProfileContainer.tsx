import React from 'react';
import { Container, Grid } from '@material-ui/core';
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
      wrap="nowrap"
      className="full-height"
    >
      <ProfileBar />
      <Container>{children}</Container>
      <BottomNavigationBar />
    </Grid>
  );
};
