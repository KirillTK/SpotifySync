// TODO need to write interface
import { ProfileReducer } from 'reducers/profile-reducer';
import { User } from 'interfaces/User';

export const getUser = (state: any): User => state.profile;
