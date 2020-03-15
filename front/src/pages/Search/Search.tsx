import React from 'react';
import { useSelector } from 'react-redux';
import { getSearchTrackList } from 'store/selectors';
import { TrackList } from 'components/TrackList/TrackList';

export const Search: React.FC = () => {
  const { offset, songs } = useSelector(getSearchTrackList);

  return (
    <div>
      <TrackList songs={songs} />
    </div>
  );
};
