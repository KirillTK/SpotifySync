import { all, takeEvery, put } from 'redux-saga/effects';
import { getProfileInfo } from 'api/api';
import { GET_PROFILE, setProfile } from 'actions/profile-actions';

export function* GET_PROFILE_SAGA() {
  try {
    const { data } = yield getProfileInfo();
    yield put(setProfile(data));
  } catch (e) {
    console.error(e);
  }
}

export function* ProfileSaga() {
  yield all([takeEvery(GET_PROFILE, GET_PROFILE_SAGA)]);
}
