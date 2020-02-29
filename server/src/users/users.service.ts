import {HttpException, HttpService, Injectable} from '@nestjs/common';
import {catchError, map} from 'rxjs/operators';

export type User = any;

@Injectable()
export class UsersService {

  constructor(private http: HttpService) {}

  async getUserProfile(accessToken) {
      const headers = { 'Authorization': `Bearer ${accessToken}`};
    return this.http.get('https://api.spotify.com/v1/me', { headers })
      .pipe(
        map(response => response.data),
        catchError( error => {
          throw new HttpException(error.response.data, error.response.status)
        }),
      )
  };
}
