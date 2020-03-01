import { Action } from 'redux';
import { User } from 'interfaces/User';
import { GET_PROFILE, SET_PROFILE } from './constants/ActiontTypes';

export const getProfile = (): Action => ({
  type: GET_PROFILE
});

export interface SetProfile {
  type: string;
  profile: User;
}

export const setProfile = (profile: User): SetProfile => ({
  type: SET_PROFILE,
  profile
});
