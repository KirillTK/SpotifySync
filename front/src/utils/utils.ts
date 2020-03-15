export const parseVerificationCodeString = (query: string): string =>
  query.replace('?code=', '');
