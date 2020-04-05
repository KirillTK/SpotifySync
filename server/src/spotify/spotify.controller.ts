import {Controller, Get, Query, Request, UseGuards, Response, Header} from '@nestjs/common';
import { SpotifyService } from './spotify.service';
import { AuthGuard } from 'auth/AuthGuard';
import {YoutubeService} from 'youtube/youtube.service';
import {YOUTUBE} from 'constants/api';

const ytdl = require('ytdl-core');


@Controller('spotify')
export class SpotifyController {
  constructor(private spotifyApi: SpotifyService, private youtube: YoutubeService){}


  @UseGuards(AuthGuard)
  @Get('track')
  async getTrack(@Request() req, @Query('q') q, @Query('offset') offset) {
    const { accessToken } = req.user;
    return this.spotifyApi.getTrackListByName(accessToken, q, offset);
  };


  @Get('song')
  @Header('Content-Type', 'audio/mpeg')
  async playMusic(@Query('name') name, @Response() res) {
    const id = await this.youtube.getSongId(name);

    return ytdl(`${YOUTUBE.VIDEO_URL}=${id}`, {
      format: 'mp3'
    }).pipe(res);
  }
}
