import React, { ChangeEvent, useCallback, useState } from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
  Theme
} from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.secondary.dark
  }
}));

export const BottomNavigationBar: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = useState('search');
  const { push } = useHistory();

  const handleChange = useCallback((event: ChangeEvent, newValue: string) => {
    setValue(newValue);
    push(newValue);
  }, []);

  return (
    <BottomNavigation value={value} onChange={handleChange} classes={classes}>
      <BottomNavigationAction
        label="Search"
        value="search"
        icon={<RestoreIcon />}
      />
    </BottomNavigation>
  );
};
