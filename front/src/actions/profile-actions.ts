import { Action } from 'redux';
import { User } from 'interfaces/User';

export const GET_PROFILE = '@@PROFILE/GET_PROFILE';
export const SET_PROFILE = '@@PROFILE/SET_PROFILE';

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
