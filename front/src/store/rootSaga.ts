import { all, fork } from 'redux-saga/effects';
import { AuthSaga } from 'pages/Login/AuthSaga';
import { ProfileSaga } from 'pages/Profile/ProfileSaga';

export function* rootSaga() {
  try {
    yield all([fork(AuthSaga), fork(ProfileSaga)]);
  } catch (e) {
    console.error(e);
  }
}
