import axios from 'axios';

export const logIn = (code: string) => axios.get(`auth/callback${code}`);
