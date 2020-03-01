import {HttpException, HttpService, Injectable} from '@nestjs/common';
import {catchError, map} from 'rxjs/operators';
import {User, UserSpotifyRequest} from 'interfaces/User';

@Injectable()
export class UsersService {

  constructor(private http: HttpService) {}


  static buildUser(user: UserSpotifyRequest): User {
    const { country, email, display_name, id, type, uri, href, images } = user;

    return {
      country,
      email,
      displayName: display_name,
      id,
      type,
      images,
      uri,
      href,
    }
  };

  async getUserProfile(accessToken) {
      const headers = { 'Authorization': `Bearer ${accessToken}`};
    return this.http.get('https://api.spotify.com/v1/me', { headers })
      .pipe(
        map(response => response.data),
        map(UsersService.buildUser),
        catchError( error => {
          throw new HttpException(error.response.data, error.response.status)
        }),
      )
  };
}
