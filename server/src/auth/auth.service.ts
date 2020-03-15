import {HttpException, HttpService, Injectable} from '@nestjs/common';
import { catchError, map } from "rxjs/operators";
import * as qs from 'qs';


@Injectable()
export class AuthService {
  constructor(private http: HttpService) {
  }

  private generateAuthorizationData() {
    return Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_SECRET}`).toString('base64');
  }

  private getCallbackUrl(){
    return process.env.CALLBACK_URL_DEV;
  }

  async getRefreshedAccessToken(refreshToken: string) {
    const data = qs.stringify({ grant_type: 'refresh_token', refresh_token: refreshToken });
    const headers = { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8', 'Authorization': `Basic ${this.generateAuthorizationData()}` };

    return this.http.post('https://accounts.spotify.com/api/token', data, { headers }).pipe(
      map(response => response.data.access_token),
      catchError( error => {
        throw new HttpException(error.response.data, error.response.status)
      }),
    );
  }
}
