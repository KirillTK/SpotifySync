import {Strategy} from 'passport-spotify';
import {Injectable} from '@nestjs/common';
import {PassportStrategy} from "@nestjs/passport";
import {UserScopes} from 'constants/UserScopes';

@Injectable()
export class SpotifyStrategy extends PassportStrategy(Strategy, 'spotify') {
  constructor() {
    super({
        clientID: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_SECRET,
        callbackURL: process.env.CALLBACK_URL_DEV,
        scope: UserScopes,
      }, async (
      accessToken: string,
      refreshToken: string,
      profile: any,
      done: any,
      ) => {
        return done(null, {...profile, accessToken, refreshToken});
      },
    );
  }
}