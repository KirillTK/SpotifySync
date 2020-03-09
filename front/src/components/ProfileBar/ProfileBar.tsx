import React from 'react';
import { AppBar, Avatar, Theme, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { InputSearch } from 'components';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.dark
  }
}));

export const ProfileBar: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" color="secondary" classes={classes}>
      <Toolbar>
        <InputSearch />
        <Avatar>H</Avatar>
      </Toolbar>
    </AppBar>
  );
};
