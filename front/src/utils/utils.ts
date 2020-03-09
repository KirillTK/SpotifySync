import { User } from 'interfaces/User';
import { REQUIRED_USER_PROPERTIES } from 'constants/required-user-property';

export const parseVerificationCodeString = (query: string): string =>
  query.replace('?code=', '');

export const isUserEmpty = (user: User): boolean =>
  Object.entries(user)
    .filter(([key]) => REQUIRED_USER_PROPERTIES.includes(key))
    .every(([, value]) => !value);
