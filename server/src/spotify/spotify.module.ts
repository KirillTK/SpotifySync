import {HttpModule, Module} from '@nestjs/common';
import {SpotifyService} from './spotify.service';
import {SpotifyController} from './spotify.controller';

@Module({
  imports: [
    HttpModule
  ],
  controllers: [SpotifyController],
  providers: [SpotifyService],
  exports: [],
})
export class SpotifyModule {}
