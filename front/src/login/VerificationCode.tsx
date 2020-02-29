import React, { useEffect } from 'react';
import { parseVerificationCodeString } from 'utils/utils';
import { useDispatch } from 'react-redux';
import { submitVerificationCode } from './constants/Actions';

interface VerificationCode {
  history: History;
  location: Location;
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
