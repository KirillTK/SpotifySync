import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ProfileBar } from 'components/AppBar/AppBar';
import { getProfile } from 'actions/profile-actions';

export const ProfileContainer: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <>
      <ProfileBar />
    </>
  );
};
