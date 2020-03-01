import axios from 'axios';
import { User } from 'interfaces/User';

export const submitVerificationCode = (code: string): Promise<void> =>
  axios.get(`auth/callback?code=${code}`);

export const getProfileInfo = (): Promise<User> => axios.get('user/profile');
