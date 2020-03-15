import { all, takeLatest } from 'redux-saga/effects';
import { FIND_SONGS } from 'actions/spotify-actions';
import { FindSongsAction } from 'actions/spotify-actions';

export function FIND_SONGS_SAGA({ query }: FindSongsAction) {
  console.log(query);
}

export function* SpotifySaga() {
  yield all([takeLatest(FIND_SONGS, FIND_SONGS_SAGA)]);
}
