import {HttpService, Injectable} from "@nestjs/common";
import { SPOTIFY } from "constants/Api";
import { map } from 'rxjs/operators';

@Injectable()
export class SpotifyService {
  constructor(private http: HttpService) {}


  getTrackListByName(accessToken: string, q: string) {

    const headers = { 'Authorization': `Bearer ${accessToken}` };

    return this.http.get(SPOTIFY.SEARCH, { params: { q, type: 'track'}, headers }).pipe(
      map(({ data: { tracks }}) => tracks),
    );
  }
}