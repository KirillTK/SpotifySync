import { all, fork } from 'redux-saga/effects';
import { AuthSaga } from './auth-saga';
import { ProfileSaga } from './profile-saga';

export function* rootSaga() {
  try {
    yield all([fork(AuthSaga), fork(ProfileSaga)]);
  } catch (e) {
    console.error(e);
  }
}
