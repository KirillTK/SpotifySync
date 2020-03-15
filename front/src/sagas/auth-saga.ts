import { all, takeLatest, put, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { submitVerificationCode } from 'api/api';
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from 'constants/router-path';
import { localStorage } from 'utils/local-storage';
import {
  SubmitVerificationAction,
  SUBMIT_VERIFICATION_CODE
} from 'actions/login-actions';
import { setProfile } from 'actions/profile-actions';

export function* SUBMIT_VERIFICATION_CODE_SAGA({
  code
}: SubmitVerificationAction) {
  try {
    const { data } = yield call(submitVerificationCode, code);
    yield put(setProfile(data));
    yield put(push(PRIVATE_ROUTES.search));
    localStorage.set('user', data);
  } catch (e) {
    yield put(push(PUBLIC_ROUTES.root));
  }
}

export function* AuthSaga() {
  yield all([
    takeLatest(SUBMIT_VERIFICATION_CODE, SUBMIT_VERIFICATION_CODE_SAGA)
  ]);
}
