import { isUserEmpty, parseVerificationCodeString } from '../utils';
import { User } from 'interfaces/User';

describe('Testing utils', () => {
  it('should parseQuerystring correctly', () => {
    const queryString = '?code=AQCbEX_re6riNGUudDlxToxbx6WqL1z-kvqPfcR7y';
    expect(parseVerificationCodeString(queryString)).toEqual(
      'AQCbEX_re6riNGUudDlxToxbx6WqL1z-kvqPfcR7y'
    );
  });

  it('should user has all property truly', function() {
    let user: User = {
      email: 'email',
      href: '',
      uri: 'testUri',
      type: 'user',
      country: 'USA',
      displayName: 'test',
      id: 'id',
      images: []
    };

    expect(isUserEmpty(user)).toBeFalsy();

    user = {
      email: '',
      href: '',
      uri: '',
      type: '',
      country: '',
      displayName: '',
      id: '',
      images: []
    };

    expect(isUserEmpty(user)).toBeTruthy();
  });
});
