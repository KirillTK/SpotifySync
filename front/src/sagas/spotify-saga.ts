import { all, takeLatest, call, put } from 'redux-saga/effects';
import {
  FIND_SONGS,
  setSearchSongs,
  PlaySongAction,
  PLAY_MUSIC
} from 'actions/spotify-actions';
import { FindSongsAction } from 'actions/spotify-actions';
import { getSongsByName, playMusic } from 'api/api';
import { DEFAULT_OFFSET } from 'constants/spotify';

const getAudioContext = () => {
  // eslint-disable-next-line no-global-assign
  AudioContext = window.AudioContext;
  const audioContent = new AudioContext();
  return audioContent;
};

export function* FIND_SONGS_SAGA({ query: { offset, q } }: FindSongsAction) {
  const { data } = yield call(getSongsByName, q, offset);
  const nextOffset = offset + DEFAULT_OFFSET;
  yield put(setSearchSongs(data, nextOffset));
}

export function* PLAY_MUSIC_SAGA({ songName, id }: PlaySongAction) {
  const { data } = yield call(playMusic, songName, id);
  // DOWNLOAD
  // const url = window.URL.createObjectURL(new Blob([data]));
  // const link = document.createElement('a');
  // link.href = url;
  // link.setAttribute('download', 'file.mp3');
  // document.body.appendChild(link);
  // link.click();

  // PLAY MUSIC
  const audioContext = getAudioContext();
  const audioBuffer = yield audioContext.decodeAudioData(data);

  const source = audioContext.createBufferSource();
  source.buffer = audioBuffer;
  source.connect(audioContext.destination);
  source.start();
}

export function* SpotifySaga() {
  yield all([
    takeLatest(FIND_SONGS, FIND_SONGS_SAGA),
    takeLatest(PLAY_MUSIC, PLAY_MUSIC_SAGA)
  ]);
}
