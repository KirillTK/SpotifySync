import { Reducer } from 'redux';
import { User } from 'interfaces/User';
import { SetProfile, SET_PROFILE } from 'actions/profile-actions';

export interface ProfileReducer {
  user: User;
}

const initialState: ProfileReducer = {
  user: {
    country: '',
    href: '',
    id: '',
    email: '',
    displayName: '',
    images: [],
    type: '',
    uri: ''
  }
};

type ProfileAction = SetProfile;

export const profile: Reducer<ProfileReducer, ProfileAction> = (
  state = initialState,
  action: ProfileAction
) => {
  if (action.type === SET_PROFILE) {
    return { ...state, user: action.profile };
  } else {
    return state;
  }
};
