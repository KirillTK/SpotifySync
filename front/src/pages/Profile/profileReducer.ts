import { Reducer } from 'redux';
import { SET_PROFILE } from './constants/ActiontTypes';
import { SetProfile } from './Actions';
import { User } from 'interfaces/User';

const initialState: User = {
  country: '',
  href: '',
  id: '',
  email: '',
  displayName: '',
  images: [],
  type: '',
  uri: ''
};

type ProfileAction = SetProfile;

export const profile: Reducer<User, ProfileAction> = (
  state = initialState,
  action: ProfileAction
) => {
  if (action.type === SET_PROFILE) {
    return { ...state, ...action.profile };
  } else {
    return state;
  }
};
