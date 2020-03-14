import { User } from 'interfaces/User';
import { RootReducer } from 'reducers';

export const getUser = (state: RootReducer): User | undefined =>
  state.profile.user;
