import { all } from 'redux-saga/effects';
import { AuthSaga } from 'pages/Login/AuthSaga';
import { ProfileSaga } from 'pages/Profile/ProfileSaga';

export function* rootSaga() {
  try {
    yield all([AuthSaga(), ProfileSaga()]);
  } catch (e) {
    console.error(e);
  }
}
