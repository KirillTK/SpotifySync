export const SUBMIT_VERIFICATION_CODE = '@@SUBMIT_VERIFICATION_CODE';

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
