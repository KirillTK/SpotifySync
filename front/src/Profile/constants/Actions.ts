import { GET_PROFILE } from './ActiontTypes';
import { Action } from 'redux';

export const getProfile = (): Action => ({
  type: GET_PROFILE
});
