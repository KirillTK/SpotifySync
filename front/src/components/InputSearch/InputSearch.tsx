import React, { ChangeEvent, useEffect, useState } from 'react';
import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from './Input.styles';
import { useDispatch } from 'react-redux';
import { findSongs } from 'actions/spotify-actions';
import { useDebounce } from 'hooks/useDebounce';
import { DEFAULT_OFFSET } from 'constants/spotify';

export const InputSearch: React.FC = () => {
  const dispatch = useDispatch();
  const [songName, setName] = useState('');
  const debouncedName = useDebounce<string>(songName);
  const classes = useStyles();

  const handleChange = ({
    target: { value }
  }: ChangeEvent<HTMLInputElement>): void => {
    setName(value);
  };

  useEffect(() => {
    if (debouncedName) {
      dispatch(findSongs(debouncedName, DEFAULT_OFFSET));
    }
  }, [debouncedName]);

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
        inputProps={{ 'aria-label': 'search' }}
        onChange={handleChange}
      />
    </div>
  );
};
