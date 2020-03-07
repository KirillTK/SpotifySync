import { all, takeLatest, put, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { submitVerificationCode } from 'api/api';
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from 'constants/RouterPath';
import {
  SubmitVerificationAction,
  SUBMIT_VERIFICATION_CODE
} from 'actions/login-actions';

export function* SUBMIT_VERIFICATION_CODE_SAGA({
  code
}: SubmitVerificationAction) {
  try {
    yield call(submitVerificationCode, code);
    yield put(push(PRIVATE_ROUTES.profile));
  } catch (e) {
    yield put(push(PUBLIC_ROUTES.root));
  }
}

export function* AuthSaga() {
  yield all([
    takeLatest(SUBMIT_VERIFICATION_CODE, SUBMIT_VERIFICATION_CODE_SAGA)
  ]);
}
