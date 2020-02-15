import { HttpModule, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from "../users/users.module";
import { SpotifyStrategy } from "./spotify.strategy";
import { PassportModule } from "@nestjs/passport";

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'spotify'}),
    UsersModule,
    HttpModule,
  ],
  providers: [AuthService, SpotifyStrategy],
  exports: [AuthService],
})
export class AuthModule {}