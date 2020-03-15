import { all, takeLatest, call, put } from 'redux-saga/effects';
import { FIND_SONGS, setSearchSongs } from 'actions/spotify-actions';
import { FindSongsAction } from 'actions/spotify-actions';
import { getSongsByName } from 'api/api';
import { DEFAULT_OFFSET } from 'constants/spotify';

export function* FIND_SONGS_SAGA({ query: { offset, q } }: FindSongsAction) {
  const { data } = yield call(getSongsByName, q, offset);
  const nextOffset = offset + DEFAULT_OFFSET;
  yield put(setSearchSongs(data, nextOffset));
}

export function* SpotifySaga() {
  yield all([takeLatest(FIND_SONGS, FIND_SONGS_SAGA)]);
}
