import axios, { AxiosResponse } from 'axios';
import { User } from 'interfaces/User';
import { PUBLIC_ROUTES } from 'constants/router-path';
import { history } from 'reducers';
import { HTTP_STATUS_UNAUTHORIZED } from 'constants/status-code';
import { localStorage } from 'utils/local-storage';
import { Song } from 'interfaces/Song';

axios.interceptors.response.use(
  (response: AxiosResponse) => response,
  ({ response: { status }, response }) => {
    if (status === HTTP_STATUS_UNAUTHORIZED) {
      history.push(PUBLIC_ROUTES.login);
      localStorage.remove('user');
    }

    // eslint-disable-next-line no-undef
    return Promise.reject(response);
  }
);

export const submitVerificationCode = (code: string): Promise<void> =>
  axios.get(`auth/callback?code=${code}`);

export const getProfileInfo = (): Promise<User> => axios.get('user/profile');

export const getSongsByName = (q: string, offset: number): Promise<Song[]> =>
  axios.get(`spotify/track?q=${q}&&offset=${offset}`);
