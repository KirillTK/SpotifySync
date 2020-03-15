import { all, fork } from 'redux-saga/effects';
import { AuthSaga } from './auth-saga';
import { ProfileSaga } from './profile-saga';
import { SpotifySaga } from './spotify-saga';

export function* rootSaga() {
  try {
    yield all([fork(AuthSaga), fork(ProfileSaga), fork(SpotifySaga)]);
  } catch (e) {
    console.error(e);
  }
}
