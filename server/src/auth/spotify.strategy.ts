import { Strategy } from 'passport-spotify';
import { Injectable } from '@nestjs/common';
import * as passport from 'passport';

@Injectable()
export class SpotifyStrategy extends Strategy {
  constructor() {
    super({
      clientID: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_SECRET,
      callbackURL: process.env.CALLBACK_URL_DEV,
      scope: ['user-read-email', 'user-read-private'],
    }, (accessToken: string, refreshToken: string, profile: any, done: Function) => {
      done(null, accessToken);
    });

    passport.use(this);

    passport.serializeUser((user, done) => {
      done(null, user);
    });

    passport.deserializeUser((user, done) => {
      done(null, user);
    });
  }
}