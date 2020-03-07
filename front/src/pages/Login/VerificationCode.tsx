import React, { useEffect } from 'react';
import { parseVerificationCodeString } from 'utils/utils';
import { useDispatch } from 'react-redux';
import { submitVerificationCode } from 'actions/login-actions';

export interface VerificationCode {
  location: {
    search: string;
  };
}

export const VerificationCode: React.FC<VerificationCode> = ({
  location: { search }
}: VerificationCode) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const verificationCode = parseVerificationCodeString(search);
    dispatch(submitVerificationCode(verificationCode));
  }, [search]);

  return <div>Code</div>;
};
