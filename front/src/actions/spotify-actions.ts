export const FIND_SONGS = '@@SPOTIFY/FIND_SONGS';

export interface FindSongsAction {
  type: string;
  query: {
    q: string;
    offset?: number;
  };
}

export const findSongs = (q: string, offset = 40): FindSongsAction => ({
  type: FIND_SONGS,
  query: {
    q,
    offset
  }
});
