import React, { useMemo } from 'react';
import { Song } from 'interfaces/Song';
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { playSong } from 'actions/spotify-actions';

interface TrackList {
  songs: Song[];
}

export const TrackList: React.FC<TrackList> = ({ songs }: TrackList) => {
  const dispatch = useDispatch();

  const handlePlayMusic = (name: string, id: string) => dispatch(playSong(name, id));

  const items = useMemo(() => {
    return songs.map(song => {
      return (
        <ListItem key={song.id}>
          <ListItemAvatar>
            <Avatar src={song.previewAlbum.url} />
          </ListItemAvatar>
          <ListItemText primary={song.name} secondary={song.artist.name} />
          <button onClick={() => handlePlayMusic(song.name, song.id)}>
            Play
          </button>
        </ListItem>
      );
    });
  }, [songs]);

  return <List>{items}</List>;
};
