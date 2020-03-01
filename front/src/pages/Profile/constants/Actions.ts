import { GET_PROFILE } from 'pages/Profile/constants/ActiontTypes';
import { Action } from 'redux';

export const getProfile = (): Action => ({
  type: GET_PROFILE
});
