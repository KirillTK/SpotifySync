import {Controller, Get, Query, Request, UseGuards} from '@nestjs/common';
import { SpotifyService } from './spotify.service';
import { AuthGuard } from 'auth/AuthGuard';


@Controller('spotify')
export class SpotifyController {
  constructor(private spotifyApi: SpotifyService){}


  @UseGuards(AuthGuard)
  @Get('track')
  async getTrack(@Request() req, @Query('q') q) {
    const { accessToken } = req.user;
    return this.spotifyApi.getTrackListByName(accessToken, q);
  };

}
