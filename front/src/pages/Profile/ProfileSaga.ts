import { all, takeEvery } from 'redux-saga/effects';
import { GET_PROFILE } from 'pages/Profile/constants/ActiontTypes';
import { getProfileInfo } from 'api/api';

export function* GET_PROFILE_SAGA() {
  try {
    const { data } = yield getProfileInfo();
  } catch (e) {
    console.error(e);
  }
}

export function* ProfileSaga() {
  yield all([takeEvery(GET_PROFILE, GET_PROFILE_SAGA)]);
}
