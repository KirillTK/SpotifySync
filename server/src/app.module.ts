import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { SpotifyModule } from './spotify/spotify.module';

@Module({
  imports: [AuthModule, UsersModule, SpotifyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
