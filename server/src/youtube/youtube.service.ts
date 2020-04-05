import {HttpService, Injectable} from '@nestjs/common';
import { map } from 'rxjs/operators';
import {AxiosResponse} from 'axios';
import {YOUTUBE} from 'constants/api';

const ytdl = require('ytdl-core');


@Injectable()
export class YoutubeService {

  constructor(private http: HttpService) {
  }

  getSongId(songName: string) {
    return this.http.get(`${YOUTUBE.SEARCH}`, { params: {
        part: 'snippet',
        q: songName,
        key: process.env.YOUTUBE_KEY,
        maxResult: 1,
        order: 'viewCount',
      }})
      .pipe(map(({data}: AxiosResponse) => {
          return data.items[0].id.videoId;
        }),
      ).toPromise();
  }
}