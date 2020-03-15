import {HttpService, Injectable} from "@nestjs/common";
import {SPOTIFY} from "constants/Api";
import {map} from 'rxjs/operators';
import TrackSearchResponse = SpotifyApi.TrackSearchResponse;
import {AxiosResponse} from 'axios';
import TrackObjectFull = SpotifyApi.TrackObjectFull;
import PagingObject = SpotifyApi.PagingObject;

@Injectable()
export class SpotifyService {
  constructor(private http: HttpService) {
  }


  private buildListSongs({ items }: PagingObject<TrackObjectFull>) {
    return items.map(song => {
      const {name, id} = song;
      const {id: artistId, name: artistName} = song.artists[0];
      const {height, width, url} = song.album.images.slice(-1)[0];
      const {name: albumName, release_date: releaseDay} = song.album;

      return {
        name,
        id,
        artist: {
          id: artistId,
          name: artistName,
        },
        previewAlbum: {
          name: albumName,
          releaseDay,
          height,
          width,
          url,
        }
      }
    });
  }


  getTrackListByName(accessToken: string, q: string, offset: number) {

    const headers = { 'Authorization': `Bearer ${accessToken}` };

    return this.http.get<TrackSearchResponse>(SPOTIFY.SEARCH, {params: {q, offset, type: 'track'}, headers}).pipe(
      map(((response: AxiosResponse<TrackSearchResponse>) => response.data.tracks)),
      map(this.buildListSongs)
    );
  };
}