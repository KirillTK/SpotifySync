import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProfile } from './Actions';

export const ProfileContainer: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return <div>Profile</div>;
};
