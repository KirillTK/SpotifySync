import { parseVerificationCodeString } from '../utils';

describe('Testing utils', () => {
  test('parseQuerystring', () => {
    const queryString = '?code=AQCbEX_re6riNGUudDlxToxbx6WqL1z-kvqPfcR7y';
    expect(parseVerificationCodeString(queryString)).toEqual(
      'AQCbEX_re6riNGUudDlxToxbx6WqL1z-kvqPfcR7y'
    );
  });
});
