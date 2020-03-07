import React, { ChangeEvent, useCallback, useState } from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
  Theme
} from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.secondary.dark
  }
}));

export const BottomNavigationBar: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = useState('recents');

  const handleChange = useCallback((event: ChangeEvent, newValue) => {
    setValue(newValue);
  }, []);

  return (
    <BottomNavigation value={value} onChange={handleChange} classes={classes}>
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        label="Folder"
        value="folder"
        icon={<RestoreIcon />}
      />
    </BottomNavigation>
  );
};
