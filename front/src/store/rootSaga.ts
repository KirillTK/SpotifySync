import { all } from 'redux-saga/effects';
import { AuthSaga } from 'login/AuthSaga';
import { ProfileSaga } from 'Profile/ProfileSaga';

export function* rootSaga() {
  try {
    yield all([AuthSaga(), ProfileSaga()]);
  } catch (e) {
    console.error(e);
  }
}
