// TODO need to write interface
import { ProfileReducer } from 'reducers/profile-reducer';

export const getUser = (state: { profile: ProfileReducer }) => state.profile;
