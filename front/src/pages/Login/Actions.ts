import { SUBMIT_VERIFICATION_CODE } from 'pages/Login/constants/ActiontTypes';

export interface SubmitVerificationAction {
  type: string;
  code: string;
}

export const submitVerificationCode = (
  code: string
): SubmitVerificationAction => ({
  type: SUBMIT_VERIFICATION_CODE,
  code
});
