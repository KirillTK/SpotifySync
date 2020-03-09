import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProfile } from 'actions/profile-actions';
import { User } from 'interfaces/User';
import { localStorage } from 'utils/local-storage';
import { getUser } from 'store/selectors';

export const useUser = (): User => {
  const dispatch = useDispatch();
  const localStorageUser = useMemo(() => localStorage.get('user') as User, [
    localStorage
  ]);
  const storeUser = useSelector(getUser);
  const user = localStorageUser || storeUser;

  useEffect(() => {
    if (localStorageUser) {
      dispatch(setProfile(localStorageUser));
    }
  }, [localStorageUser, dispatch]);

  return user;
};
