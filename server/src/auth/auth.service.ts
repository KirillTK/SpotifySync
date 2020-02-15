import {HttpException, HttpService, Injectable} from '@nestjs/common';
import {UsersService} from "../users/users.service";
import { catchError, map } from "rxjs/operators";
import * as qs from 'qs';


@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService, private http: HttpService) {
  }

  private generateAuthorizationData() {
    return Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_SECRET}`).toString('base64');
  }

  private getCallbackUrl(){
    return process.env.CALLBACK_URL_DEV;
  }

  async requestAccessToken(code: string) {
    const data = qs.stringify({ 'grant_type': 'client_credentials', code , redirect_uri: this.getCallbackUrl()});
    const headers = { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8', 'Authorization': `Basic ${this.generateAuthorizationData()}` };

    return this.http.post('https://accounts.spotify.com/api/token', data, { headers }).pipe(
      map(response => response.data.access_token),
      catchError( error => {
        throw new HttpException(error.response.data, error.response.status)
      }),
    );
  }
}
