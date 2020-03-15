import { HttpModule, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from "users/users.module";
import { SpotifyStrategy } from "./spotify.strategy";
import { PassportModule } from "@nestjs/passport";
import {SpotifyAuthGuard} from "./spotify-auth-guard";
import {UserSerializer} from "./user-serializer";
import {AuthController} from "./auth.controller";
import {AuthGuard} from 'auth/AuthGuard';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'spotify', session: true }),
    UsersModule,
    HttpModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, SpotifyStrategy, SpotifyAuthGuard, UserSerializer, AuthGuard],
  exports: [AuthService, SpotifyAuthGuard, AuthGuard],
})
export class AuthModule {}