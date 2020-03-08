import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { getProfile } from 'actions/profile-actions';
import { User } from 'interfaces/User';
import { localStorage } from 'utils/local-storage';

export const useUser = (): User => {
  const dispatch = useDispatch();
  const user = useMemo(() => localStorage.get('user') as User, []);

  useEffect(() => {
    if (user) {
      dispatch(getProfile());
    }
  }, [user, dispatch, getProfile]);

  return user;
};
