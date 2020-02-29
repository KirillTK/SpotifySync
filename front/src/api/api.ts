import axios from 'axios';

export const submitVerificationCode = (code: string) =>
  axios.get(`auth/callback?code=${code}`);

export const getProfileInfo = () => axios.get('user/profile');
