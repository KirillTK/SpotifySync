import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProfile } from 'pages/Profile/constants/Actions';

export const ProfileContainer: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return <div>Profile</div>;
};
