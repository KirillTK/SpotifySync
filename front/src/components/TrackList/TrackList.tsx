import React, { useMemo } from 'react';
import { Song } from 'interfaces/Song';
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core';

interface TrackList {
  songs: Song[];
}

export const TrackList: React.FC<TrackList> = ({ songs }: TrackList) => {
  console.log(songs);

  const items = useMemo(() => {
    return songs.map(song => {
      return (
        <ListItem key={song.id}>
          <ListItemAvatar>
            <Avatar src={song.previewAlbum.url} />
          </ListItemAvatar>
          <ListItemText primary={song.name} secondary={song.artist.name} />
        </ListItem>
      );
    });
  }, [songs]);

  return <List>{items}</List>;
};
