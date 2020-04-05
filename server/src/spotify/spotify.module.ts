import {HttpModule, Module} from '@nestjs/common';
import {SpotifyService} from './spotify.service';
import {SpotifyController} from './spotify.controller';
import {YoutubeModule} from 'youtube/youtube.module';

@Module({
  imports: [
    HttpModule,
    YoutubeModule
  ],
  controllers: [SpotifyController],
  providers: [SpotifyService],
  exports: [],
})
export class SpotifyModule {}
