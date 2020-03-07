import React from 'react';
import { AppBar, Avatar, Grid, Theme, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { InputSearch } from 'components/InputSearch/InputSearch';
import { BottomNavigationBar } from 'components/BottomNavigation/BottomNavigation';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.dark
  }
}));

export const ProfileBar: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <AppBar position="static" color="secondary" classes={classes}>
        <Toolbar>
          <InputSearch />
          <Avatar>H</Avatar>
        </Toolbar>
      </AppBar>
      <BottomNavigationBar />
    </Grid>
  );
};
